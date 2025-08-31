"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { getAuth } from "firebase/auth";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

interface InterviewHistory {
  session_id: string;
  test_topic: string;
  evaluation: string;
  timestamp: string;
}

export default function MockInterview() {
  const auth = getAuth();

  const [currentStep, setCurrentStep] = useState<"input" | "interview">(
    "input",
  );
  const [jobPosition, setJobPosition] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [sessionId, setSessionId] = useState<string>("");
  // const audioQueueRef = useRef<HTMLAudioElement[]>([]);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  // 新增搜尋紀錄狀態
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const [interviewType, setInterviewType] = useState<
    "general" | "codility" | "behavior"
  >("general");

  // 新增面試歷史相關狀態
  const [interviewHistory, setInterviewHistory] = useState<InterviewHistory[]>(
    [],
  );
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // 載入搜尋紀錄
  useEffect(() => {
    const savedHistory = localStorage.getItem("mockInterviewHistory");
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  // 儲存搜尋紀錄
  const saveToHistory = (position: string) => {
    if (!position.trim()) return;

    const newHistory = [
      position,
      ...searchHistory.filter((item) => item !== position),
    ].slice(0, 10); // 最多保留10筆
    setSearchHistory(newHistory);
    localStorage.setItem("mockInterviewHistory", JSON.stringify(newHistory));
  };

  // 清除搜尋紀錄
  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("mockInterviewHistory");
    setShowDropdown(false);
  };

  // 檢查用戶登入狀態
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
      if (user) {
        fetchInterviewHistory();
      }
    });

    return () => unsubscribe();
  }, []);

  // 獲取面試歷史記錄
  const fetchInterviewHistory = useCallback(async () => {
    if (!auth.currentUser) return;

    try {
      const token = await auth.currentUser?.getIdToken();
      const response = await fetch(
        `${API_BASE_URL}/interview_history`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      if (data.interview_history) {
        console.log("new data");
        setInterviewHistory(data.interview_history);
      }
    } catch (error) {
      console.error("Error fetching interview history:", error);
    }
  }, [auth]);

  useEffect(() => {
    if (currentStep === "interview") {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, currentStep]);

  const startInterview = async () => {
    if (!jobPosition.trim()) {
      alert("請輸入您想要應徵的職位");
      return;
    }

    // 儲存到搜尋紀錄
    saveToHistory(jobPosition.trim());
    setShowDropdown(false);

    const currentSessionId = uuidv4();
    setSessionId(currentSessionId);
    setCurrentStep("interview");
    setMessages((prev) => [...prev, "正在連接面試官..."]);

    const fetchInitialResponse = async () => {
      try {
        const formData = new FormData();
        formData.append("session_id", currentSessionId);
        formData.append("job_position", jobPosition);
        formData.append("interview_type", interviewType);
        formData.append("end_interview", "false");

        const response = await fetch(
          `${API_BASE_URL}/interview`,
          {
            method: "POST",
            body: formData,
          },
        );
        const data = await response.json();

        if (data.error) {
          setMessages((prev) => [...prev, `Error: ${data.error}`]);
          return;
        }
        if (data.user_input_text) {
          setMessages((prev) => [...prev, `You: ${data.user_input_text}`]);
        } else {
          setMessages((prev) => [...prev, `You: (Audio input received)`]);
        }

        setMessages((prev) => [...prev, `Bot: ${data.gemini_response_text}`]);
        console.log("data.audio_response_url", data.audio_response_url);
        if (data.audio_response_url) {
          playAudio(data.audio_response_url);
        }
      } catch (error) {
        console.error("Error fetching initial bot response:", error);
        setMessages((prev) => [...prev, `Error starting interview: ${error}`]);
      }
    };
    fetchInitialResponse();
  };

  const playAudio = (url: string) => {
    const audio = new Audio(url);
    setIsPlayingAudio(true);
    audio.play();
    audio.onended = () => {
      stopAudio();
    };
  };

  const stopAudio = () => {
    setIsPlayingAudio(false);
    startRecording();
  };

  const startRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        mediaRecorderRef.current = new MediaRecorder(stream, {
          mimeType: "audio/webm",
        });
        audioChunksRef.current = [];

        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorderRef.current.onstop = async () => {
          const audioBlob = new Blob(audioChunksRef.current, {
            type: "audio/webm",
          });
          // Reset audio chunks for the next recording
          audioChunksRef.current = [];

          // Send the audio blob to the server
          const formData = new FormData();
          formData.append("session_id", sessionId);
          formData.append("audio", audioBlob, "recording.webm");
          formData.append("job_position", jobPosition); // Include job_position
          formData.append("interview_type", interviewType);
          formData.append("end_interview", "false");

          setMessages((prev) => [...prev, "You: (analyzing...)"]);

          try {
            const token = await auth.currentUser?.getIdToken();
            const response = await fetch(
              `${API_BASE_URL}/interview`,
              {
                method: "POST",
                body: formData,
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );
            const data = await response.json();

            if (data.error) {
              setMessages((prev) => [...prev, `Error: ${data.error}`]);
              return;
            }
            // Remove the "Sending audio..." message and add the actual user input text if available
            setMessages((prev) =>
              prev.filter((msg) => msg !== "You: (analyzing...)"),
            );
            if (data.user_input_text) {
              setMessages((prev) => [...prev, `You: ${data.user_input_text}`]);
            } else {
              setMessages((prev) => [...prev, `You: (Audio input processed)`]);
            }
            setMessages((prev) => [
              ...prev,
              `Bot: ${data.gemini_response_text}`,
            ]);
            if (data.audio_response_url) {
              console.log("data.audio_response_url", data.audio_response_url);
              playAudio(data.audio_response_url);
            }
          } catch (error) {
            // Remove the "Sending audio..." message if an error occurs
            setMessages((prev) =>
              prev.filter((msg) => msg !== "You: (Sending audio...)"),
            );
            console.error("Error sending audio:", error);
            setMessages((prev) => [...prev, `Error sending audio: ${error}`]);
          }

          // Stop microphone tracks
          stream.getTracks().forEach((track) => track.stop());
        };

        mediaRecorderRef.current.start();
        setIsRecording(true);
        setMessages((prev) => [...prev, "You: (Recording...)"]);
      } catch (err) {
        console.error("Error accessing microphone:", err);
        setMessages((prev) => [...prev, `Error accessing microphone: ${err}`]);
      }
    } else {
      alert("getUserMedia not supported on your browser!");
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      // Remove the "Recording..." message
      setMessages((prev) =>
        prev.filter((msg) => msg !== "You: (Recording...)"),
      );
    }
  };

  const endInterview = async () => {
    try {
      const formData = new FormData();
      formData.append("session_id", sessionId);
      formData.append("job_position", jobPosition);
      formData.append("end_interview", "true");

      const token = await auth.currentUser?.getIdToken();
      const response = await fetch(
        `${API_BASE_URL}/interview`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();

      if (data.error) {
        setMessages((prev) => [...prev, `Error: ${data.error}`]);
        return;
      }

      setMessages((prev) => [...prev, `Bot: 面試結束，感謝您的參與！`]);
      setTimeout(() => {
        setCurrentStep("input");
        setMessages([]);
      }, 2000);
    } catch (error) {
      console.error("Error ending interview:", error);
      setMessages((prev) => [...prev, `Error ending interview: ${error}`]);
    }
  };

  // 職位輸入界面
  if (currentStep === "input") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "850px", // 這裡由600px改成750px
          borderRadius: "30px",
          overflow: "hidden",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          backgroundColor: "#ffffff",
          border: "1px solid rgb(6, 6, 6)",
        }}
      >
        <div
          style={{
            padding: "18px",
            borderBottom: "1px solid #e0e0e0",
            fontSize: "28px",
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "#f8f9fa",
            color: "#333",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          模擬面試設定 (Mock Interview Setup)
        </div>

        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
            backgroundColor: "#fbfcfd",
            gap: "30px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "18px",
              color: "#333",
              marginBottom: "20px",
            }}
          >
            請輸入您想要應徵的職位，我們將為您客製化面試問題
          </div>

          <div
            style={{
              width: "100%",
              maxWidth: "400px",
              position: "relative",
            }}
          >
            <input
              type="text"
              value={jobPosition}
              onChange={(e) => setJobPosition(e.target.value)}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => {
                // 延遲關閉下拉選單，讓點擊事件有時間觸發
                setTimeout(() => setShowDropdown(false), 200);
              }}
              placeholder="例如：前端工程師、產品經理、資料科學家..."
              style={{
                width: "100%",
                padding: "15px 20px",
                fontSize: "16px",
                borderRadius: "25px",
                border: "2px solid #e0e0e0",
                outline: "none",
                transition: "border-color 0.3s ease",
                boxSizing: "border-box",
                textAlign: "center",
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  startInterview();
                }
              }}
            />

            {/* 搜尋紀錄下拉選單 */}
            {showDropdown && searchHistory.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  backgroundColor: "white",
                  border: "1px solid #e0e0e0",
                  borderRadius: "10px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  zIndex: 1000,
                  maxHeight: "200px",
                  overflowY: "auto",
                  marginTop: "5px",
                }}
              >
                <div
                  style={{
                    padding: "10px 15px",
                    fontSize: "12px",
                    color: "#666",
                    borderBottom: "1px solid #f0f0f0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>搜尋紀錄</span>
                  <button
                    onClick={clearHistory}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#999",
                      cursor: "pointer",
                      fontSize: "12px",
                      padding: "2px 6px",
                      borderRadius: "4px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f0f0f0";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    清除
                  </button>
                </div>
                {searchHistory.map((item, index) => (
                  <div
                    key={`search-history-${item}`}
                    onClick={() => {
                      setJobPosition(item);
                      setShowDropdown(false);
                    }}
                    style={{
                      padding: "12px 15px",
                      cursor: "pointer",
                      borderBottom:
                        index < searchHistory.length - 1
                          ? "1px solid #f0f0f0"
                          : "none",
                      fontSize: "14px",
                      color: "#333",
                      transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f8f9fa";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <span style={{ marginRight: "8px", color: "#999" }}>
                      🕐
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 面試類型選擇區塊 */}
          <div
            style={{
              width: "100%",
              maxWidth: "400px",
              backgroundColor: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              padding: "20px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
                textAlign: "center",
                marginBottom: "15px",
              }}
            >
              請選擇面試類型
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {[
                {
                  id: "general",
                  label: "一般面試",
                  desc: "基本面試問題和職位相關討論",
                },
                {
                  id: "codility",
                  label: "程式 Codility",
                  desc: "程式設計和演算法測試",
                },
                {
                  id: "behavior",
                  label: "Behavior Question",
                  desc: "行為面試和情境問題",
                },
              ].map((option) => (
                <div
                  key={`interview-type-${option.id}`}
                  onClick={() =>
                    setInterviewType(
                      option.id as "general" | "codility" | "behavior",
                    )
                  }
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "12px",
                    border: `2px solid ${interviewType === option.id ? "#007bff" : "#e0e0e0"}`,
                    borderRadius: "8px",
                    cursor: "pointer",
                    backgroundColor:
                      interviewType === option.id ? "#f0f8ff" : "#fff",
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      border: `2px solid ${interviewType === option.id ? "#007bff" : "#ccc"}`,
                      marginRight: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {interviewType === option.id && (
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#007bff",
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "#333",
                        marginBottom: "2px",
                      }}
                    >
                      {option.label}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#666",
                      }}
                    >
                      {option.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 面試歷史記錄按鈕和面板 */}
          {isAuthenticated && (
            <div
              style={{
                width: "100%",
                maxWidth: "400px",
                position: "relative",
              }}
            >
              <button
                onClick={() => setShowHistory(!showHistory)}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #e0e0e0",
                  backgroundColor: "#f8f9fa",
                  cursor: "pointer",
                  fontSize: "14px",
                  color: "#333",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>面試歷史記錄</span>
                <span>{showHistory ? "▼" : "▶"}</span>
              </button>

              {showHistory && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    backgroundColor: "white",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    marginTop: "8px",
                    maxHeight: "300px",
                    overflowY: "auto",
                    zIndex: 1000,
                  }}
                >
                  {interviewHistory.length === 0 ? (
                    <div
                      style={{
                        padding: "20px",
                        textAlign: "center",
                        color: "#666",
                      }}
                    >
                      尚無面試記錄
                    </div>
                  ) : (
                    interviewHistory.map((history, index) => (
                      <div
                        key={history.session_id}
                        style={{
                          padding: "15px",
                          borderBottom:
                            index < interviewHistory.length - 1
                              ? "1px solid #f0f0f0"
                              : "none",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            marginBottom: "5px",
                          }}
                        >
                          {history.test_topic}
                        </div>
                        <div
                          style={{
                            fontSize: "12px",
                            color: "#666",
                            marginBottom: "8px",
                          }}
                        >
                          {new Date(history.timestamp).toLocaleString()}
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            color: "#333",
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          {history.evaluation}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          )}

          {/* 開始面試按鈕 */}
          <button
            onClick={startInterview}
            style={{
              padding: "15px 40px",
              borderRadius: "25px",
              background: "linear-gradient(45deg, #007bff 0%, #0056b3 100%)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(0,123,255,0.3)",
              outline: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(0,123,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(0,123,255,0.3)";
            }}
          >
            開始面試 (Start Interview)
          </button>
        </div>
      </div>
    );
  }

  // 原來的面試界面
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        height: "600px",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        backgroundColor: "#ffffff",
        border: "1px solid rgb(6, 6, 6)",
      }}
    >
      <div
        style={{
          padding: "18px",
          borderBottom: "1px solid #e0e0e0",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
          color: "#333",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => setCurrentStep("input")}
          style={{
            background: "none",
            border: "none",
            fontSize: "16px",
            color: "#007bff",
            cursor: "pointer",
            padding: "5px 10px",
            borderRadius: "5px",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f0f0f0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          ← 返回設定
        </button>
        <span>模擬面試 - {jobPosition}</span>
        <div style={{ width: "80px" }}></div>
      </div>

      <div
        style={{
          flexGrow: 1,
          overflowY: "auto",
          padding: "20px",
          backgroundColor: "#fbfcfd",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {messages.map((msg, idx) => {
          const isUser = msg.startsWith("You: ");
          const displayMsg = msg.replace(/^You: |^Bot: /, "");
          return (
            <div
              key={`message-${idx}-${isUser ? "user" : "bot"}`}
              style={{
                display: "flex",
                justifyContent: isUser ? "flex-end" : "flex-start",
              }}
            >
              <div
                style={{
                  padding: "12px 18px",
                  borderRadius: "22px",
                  backgroundColor: isUser ? "#007bff" : "#e9ecef",
                  backgroundImage: isUser
                    ? "linear-gradient(45deg, #007bff 0%, #0056b3 100%)"
                    : "none",
                  color: isUser ? "#fff" : "#333",
                  maxWidth: "75%",
                  wordWrap: "break-word",
                  fontSize: "16px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                {displayMsg}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      <div
        style={{
          display: "flex",
          padding: "15px",
          borderTop: "1px solid #e0e0e0",
          backgroundColor: "#f8f9fa",
          gap: "10px",
        }}
      >
        <button
          onClick={isRecording ? stopRecording : startRecording}
          disabled={!isRecording}
          style={{
            flexGrow: 1,
            padding: "14px 22px",
            borderRadius: "25px",
            background: isRecording
              ? "linear-gradient(45deg, #dc3545 0%, #c82333 100%)"
              : "linear-gradient(45deg, #007bff 0%, #0056b3 100%)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            boxShadow: isRecording
              ? "0 4px 10px rgba(220,53,69,0.3)"
              : "0 4px 10px rgba(0,123,255,0.3)",
            outline: "none",
            opacity: isPlayingAudio ? 0.6 : 1,
          }}
        >
          {isRecording ? "停止錄音 (Stop Recording)" : "分析中..."}
        </button>
        <button
          onClick={endInterview}
          style={{
            padding: "14px 22px",
            borderRadius: "25px",
            background: "linear-gradient(45deg, #6c757d 0%, #495057 100%)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 10px rgba(108,117,125,0.3)",
            outline: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 6px 15px rgba(108,117,125,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 4px 10px rgba(108,117,125,0.3)";
          }}
        >
          結束面試
        </button>
      </div>
    </div>
  );
}
