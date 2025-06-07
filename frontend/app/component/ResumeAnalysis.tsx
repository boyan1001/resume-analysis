'use client';

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Radar } from 'react-chartjs-2';
import {
    Chart,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
export default function ResumeAnalysis() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [analysisResult, setAnalysisResult] = useState<string>('');
    const [jobTitle, setJobTitle] = useState<string>('');
    const [jobUrl, setJobUrl] = useState<string>('');
    // 新增搜尋紀錄狀態
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const [scores, setScores] = useState<{ [key: string]: number }>({});

    // 載入搜尋紀錄
    useEffect(() => {
        const savedHistory = localStorage.getItem('resumeAnalysisHistory');
        if (savedHistory) {
            setSearchHistory(JSON.parse(savedHistory));
        }
    }, []);

    // 儲存搜尋紀錄
    const saveToHistory = (title: string) => {
        if (!title.trim()) return;
        
        const newHistory = [title, ...searchHistory.filter(item => item !== title)].slice(0, 10); // 最多保留10筆
        setSearchHistory(newHistory);
        localStorage.setItem('resumeAnalysisHistory', JSON.stringify(newHistory));
    };

    // 清除搜尋紀錄
    const clearHistory = () => {
        setSearchHistory([]);
        localStorage.removeItem('resumeAnalysisHistory');
        setShowDropdown(false);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
            setAnalysisResult(''); // Clear previous analysis when new file is selected
            setScores({});
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('請選擇一個履歷檔案。');
            return;
        }

        // 儲存職缺名稱到搜尋紀錄
        if (jobTitle.trim()) {
            saveToHistory(jobTitle.trim());
            setShowDropdown(false);
        }

        const formData = new FormData();
        formData.append('file', selectedFile);
        if (jobTitle) {
            formData.append('job_title', jobTitle);
        }
        if (jobUrl) {
            formData.append('job_url', jobUrl);
        }

        setAnalysisResult('正在分析履歷，請稍候...'); // Loading message
        
        try {
            // In a real application, you would send this formData to your backend.
            // For now, we'll simulate an API call.
            
            const response = await fetch('http://192.168.69.26:3001/upload_imformation', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            
            const responseData = await response.json();
			setAnalysisResult(responseData['content'] || '分析結果未提供。');
			setScores(responseData.scores || {});
            
        } catch (error) {
            console.error('履歷分析失敗:', error);
            setAnalysisResult('履歷分析失敗，請重試。');
        }
            
    };

    return (
        <div>
            <h2 style={{ fontSize: '2em', color: '#2c3e50', marginBottom: '20px', textAlign: 'center' }}>履歷分析 (Resume Analysis)</h2>
            <p style={{ fontSize: '1.1em', color: '#666', marginBottom: '25px', textAlign: 'center' }}>上傳你的履歷並獲得Gemini的分析與建議。</p>
            <p style={{ fontSize: '1.1em', color: '#666', marginBottom: '30px', textAlign: 'center' }}>Upload your resume and get analysis and suggestions from Gemini.</p>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '25px',
                alignItems: 'center',
                padding: '30px',
                border: '2px dashed #a7b7c7',
                borderRadius: '15px',
                backgroundColor: '#ffffff',
                boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                width: '100%',
                boxSizing: 'border-box',
            }}>
                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    style={{
                        display: 'none',
                    }}
                    id="resume-upload-input"
                />
                <div style={{
                    width: '100%',
                    maxWidth: '500px',
                    position: 'relative',
                }}>
                    <input
                        type="text"
                        value={jobTitle}
                        onChange={e => setJobTitle(e.target.value)}
                        onFocus={() => setShowDropdown(true)}
                        onBlur={() => {
                            // 延遲關閉下拉選單，讓點擊事件有時間觸發
                            setTimeout(() => setShowDropdown(false), 200);
                        }}
                        placeholder="要應徵的職缺名稱 (可選)"
                        style={{
                            padding: '12px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            border: '1px solid #ced4da',
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                    />

                    {/* 搜尋紀錄下拉選單 */}
                    {showDropdown && searchHistory.length > 0 && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: 'white',
                            border: '1px solid #e0e0e0',
                            borderRadius: '10px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            zIndex: 1000,
                            maxHeight: '200px',
                            overflowY: 'auto',
                            marginTop: '5px',
                        }}>
                            <div style={{
                                padding: '10px 15px',
                                fontSize: '12px',
                                color: '#666',
                                borderBottom: '1px solid #f0f0f0',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <span>搜尋紀錄</span>
                                <button
                                    onClick={clearHistory}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: '#999',
                                        cursor: 'pointer',
                                        fontSize: '12px',
                                        padding: '2px 6px',
                                        borderRadius: '4px',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#f0f0f0';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                >
                                    清除
                                </button>
                            </div>
                            {searchHistory.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        setJobTitle(item);
                                        setShowDropdown(false);
                                    }}
                                    style={{
                                        padding: '12px 15px',
                                        cursor: 'pointer',
                                        borderBottom: index < searchHistory.length - 1 ? '1px solid #f0f0f0' : 'none',
                                        fontSize: '14px',
                                        color: '#333',
                                        transition: 'background-color 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                >
                                    <span style={{ marginRight: '8px', color: '#999' }}>🕐</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div style={{
                    width: '100%',
                    maxWidth: '500px',
                }}>
                    <input
                        type="text"
                        value={jobUrl}
                        onChange={e => setJobUrl(e.target.value)}
                        placeholder="職缺頁面 URL (可選)"
                        style={{
                            padding: '12px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            border: '1px solid #ced4da',
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                    />
                </div>
                <label htmlFor="resume-upload-input" style={{
                    padding: '12px 25px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    boxShadow: '0 4px 10px rgba(0,123,255,0.2)',
                    display: 'inline-block',
                }}>
                    {selectedFile ? '更換檔案 (Change File)' : '選擇履歷檔案 (Choose Resume File)'}
                </label>
                {selectedFile && (
                    <p style={{ fontSize: '15px', color: '#333', margin: '0' }}>已選擇檔案: <span style={{ fontWeight: 'bold' }}>{selectedFile.name}</span></p>
                )}
                <button
                    onClick={handleUpload}
                    disabled={!selectedFile}
                    style={{
                        padding: '12px 25px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        background: selectedFile ? 'linear-gradient(45deg, #28a745 0%, #218838 100%)' : '#cccccc',
                        color: '#fff',
                        transition: 'all 0.3s ease',
                        boxShadow: selectedFile ? '0 4px 10px rgba(40,167,69,0.3)' : 'none',
                        outline: 'none',
                    }}
                >
                    上傳並分析履歷 (Upload & Analyze Resume)
                </button>

                {analysisResult && (
                    <div style={{
                        marginTop: '30px',
                        padding: '25px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '12px',
                        backgroundColor: '#fefefe',
                        whiteSpace: 'pre-wrap',
                        width: '100%',
                        maxWidth: '800px',
                        boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                        textAlign: 'left',
                    }}>
                        <h3 style={{ fontSize: '1.5em', color: '#2c3e50', marginBottom: '15px' }}>分析結果 (Analysis Result):</h3>
                        <div style={{ fontSize: '1em', lineHeight: '1.6', color: '#4a4a4a' }}>
                            <ReactMarkdown>{analysisResult}</ReactMarkdown>
                        </div>
                    </div>
                )}
				{Object.keys(scores).length > 0 && (
                    <div style={{
                        marginTop: '20px',
                        padding: '20px',
                        border: '1px solid #ddd',
                        borderRadius: '12px',
                        backgroundColor: '#fafafa',
                        width: '100%',
                        maxWidth: '800px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                        textAlign: 'left',
                    }}>
                        <h3 style={{ fontSize: '1.5em', color: '#2c3e50', marginBottom: '15px' }}>六大指標分數 (Resume Score):</h3>

                        {/* 文字版 */}
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1em', lineHeight: '1.8', color: '#4a4a4a' }}>
                            {Object.entries(scores).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{key}：</strong> {value} 分
                                </li>
                            ))}
                        </ul>

                        {/* 雷達圖版 */}
                        <div style={{ marginTop: '30px' }}>
                            <Radar
                                data={{
                                    labels: Object.keys(scores),
                                    datasets: [
                                        {
                                            label: '履歷分數',
                                            data: Object.values(scores),
                                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                            borderColor: 'rgba(54, 162, 235, 1)',
                                            borderWidth: 2,
                                            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                                        },
                                    ],
                                }}
                                options={{
                                    scales: {
                                        r: {
                                            suggestedMin: 0,
                                            suggestedMax: 10,
                                            ticks: {
                                                stepSize: 1,
                                            },
                                            pointLabels: {
                                                font: {
                                                    size: 14,
                                                },
                                            },
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}