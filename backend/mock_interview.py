import speech_recognition as sr
from gtts import gTTS
import io
from flask import jsonify, request
import google.generativeai as genai
import os
from dotenv import load_dotenv
import requests
from pydub import AudioSegment
import tempfile
import subprocess
import ffmpeg
import edge_tts
import asyncio
import jwt
from database import save_user_interview_result, get_user_interview_history  # 修正導入路徑

# import firebase_init  # Import the Firebase initialization module

load_dotenv()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=GOOGLE_API_KEY)

chat_sessions = {}

def load_interview_questions(interview_type):
    if interview_type == 'general':
        with open("docs/Questions.txt", 'r', encoding='utf-8') as f:
            return f.read()
    elif interview_type == 'codility':
        with open("docs/Codility.txt", 'r', encoding='utf-8') as f:
            return f.read()
    elif interview_type == 'behavior':
        with open("docs/Behavior.txt", 'r', encoding='utf-8') as f:
            return f.read()

def get_or_create_chat_session(session_id, job_position, interview_type):
    if session_id not in chat_sessions:
        model = genai.GenerativeModel('models/gemini-2.5-flash-preview-04-17')

        interview_types = {
            'general': '一般面試',
            'codility': '程式 Codility',
            'behavior': 'Behavior Question'
        }

        initial_prompt = f"""你現在是一位專業的面試官，正在對我進行模擬面試。
你現在要面試的職位是：{job_position}
你現在要進行的是：{interview_types[interview_type]}
以下是一些常見的面試問題，請你根據這些問題來提問，並根據我的回答進行追問或評估。
請用繁體中文進行對話。
---
面試問題參考：
{load_interview_questions(interview_type)}
---
現在開始面試，請向面試者提問。
面試官："""
        
        print(initial_prompt)
        chat = model.start_chat(history=[
            {"role": "user", "parts": [initial_prompt]}
        ])

        initial_response = chat.send_message("好，我準備好了。")
        
        chat_sessions[session_id] = {"chat_object": chat, "history": chat.history}
        return chat_sessions[session_id], initial_response.text

    return chat_sessions[session_id], None

def tts(text, session_id):
    async def tts():
        communicate = edge_tts.Communicate(text=text, voice="zh-CN-YunxiNeural", rate="+30%")
        await communicate.save(f"./output/gemini_response_{session_id}.mp3")
    asyncio.run(tts())
    
    # Get server URL from request
    server_url = f"http://{request.host}"
    audio_url = f"{server_url}/output/gemini_response_{session_id}.mp3"
    return audio_url
        

def stt(wav_path):
    recognizer = sr.Recognizer()
    recognizer.energy_threshold = 300  # 增加能量閾值
    recognizer.dynamic_energy_threshold = True
    recognizer.pause_threshold = 0.8  # 調整停頓閾值
    
    with sr.AudioFile(wav_path) as source:
        audio = recognizer.record(source)
        user_input_text = recognizer.recognize_google(audio, language="zh-TW")
        print("Recognized text:", user_input_text)
        return user_input_text


def webm_to_wav(webm_file, session_id):
    webm_path = os.path.join("./uploads", f"input_{session_id}.webm")
    wav_path = os.path.join("./uploads", f"output_{session_id}.wav")
    
    webm_file.save(webm_path)
    stream = ffmpeg.input(webm_path)
    stream = ffmpeg.output(stream, wav_path,
                        acodec='pcm_s16le',  # 16-bit PCM
                        ac=1,                # mono
                        ar=16000)           # 16kHz sample rate
    ffmpeg.run(stream, overwrite_output=True, capture_stdout=True, capture_stderr=True)
    return wav_path


def end_interview_with_user_history(request):
    """結束面試並根據用戶email保存結果到資料庫"""
    session_id = request.form.get('session_id')
    job_position = request.form.get('job_position')
    interview_type = request.form.get('interview_type')
    

    auth_header = request.headers.get("Authorization", "")
    id_token = auth_header.replace("Bearer ", "")
    decoded = jwt.decode(id_token, options={"verify_signature": False})
    user_email = decoded.get("email")
    print(user_email)
    
    chat_session_data = chat_sessions[session_id]
    chat = chat_session_data["chat_object"]
    
    # 向 Gemini 請求評語
    evaluation_prompt = """
請根據我們剛才的面試對話，給我一個詳細的評語和建議。
請包含以下內容：
1. 需要改進的地方
2. 具體建議
請用繁體中文回答，簡短回答即可。
"""
    
    try:
        evaluation_response = chat.send_message(evaluation_prompt)
        evaluation = evaluation_response.text
        
        # 構建面試主題
        interview_types = {
            'general': '一般面試',
            'codility': '程式 Codility', 
            'behavior': 'Behavior Question'
        }
        test_topic = f"{job_position} - {interview_types.get(interview_type, interview_type)}"
        
        # 檢查用戶是否有歷史記錄
        user_history = get_user_interview_history(user_email)
        
        if user_history:
            print(f"用戶 {user_email} 已有 {len(user_history['interview_history'])} 次面試記錄")
        else:
            print(f"用戶 {user_email} 是第一次進行面試")
        
        # 保存到資料庫（會自動處理新增或更新）
        result = save_user_interview_result(user_email, session_id, test_topic, evaluation)
        
        # 取得更新後的完整歷史記錄
        updated_history = get_user_interview_history(user_email)
        
        # 清除聊天記錄
        del chat_sessions[session_id]
        
        return jsonify({
            "message": "面試已結束並保存結果",
            "user_email": user_email,
            "current_interview": result,
            "total_interviews": len(updated_history['interview_history']),
            "evaluation": evaluation,
            "interview_history": updated_history['interview_history'][-5:]  # 只回傳最近5次記錄
        })
        
    except Exception as e:
        return jsonify({
            "error": "生成評語或保存記錄時發生錯誤",
            "message": str(e)
        }), 500


def get_user_history(request):
    """取得用戶的面試歷史記錄"""
    # 取得用戶email
    auth_header = request.headers.get("Authorization", "")
    id_token = auth_header.replace("Bearer ", "")
    decoded = jwt.decode(id_token, options={"verify_signature": False})
    user_email = decoded.get("email")
    
    if not user_email:
        return jsonify({
            "error": "無法取得用戶信息",
            "message": "Authorization token 中沒有email"
        }), 401
    
    user_history = get_user_interview_history(user_email)
    
    if user_history:
        return jsonify({
            "user_email": user_email,
            "total_interviews": len(user_history['interview_history']),
            "interview_history": user_history['interview_history']
        })
    else:
        return jsonify({
            "user_email": user_email,
            "total_interviews": 0,
            "interview_history": [],
            "message": "尚無面試記錄"
        })

def gemini_mock_interview(request):
    end_interview = request.form.get('end_interview')
    if end_interview == 'true':
        end_interview_with_user_history(request)
        return jsonify({
            "message": "Interview ended"
        })
        
    session_id = request.form.get('session_id')
    job_position = request.form.get('job_position')
    interview_type = request.form.get('interview_type')

    chat_session_data, initial_bot_response = get_or_create_chat_session(session_id, job_position, interview_type)
    chat = chat_session_data["chat_object"] 

    if initial_bot_response:
        print("Start initial")
        audio_url = tts(initial_bot_response, session_id)
        return jsonify({
            "message": "Interview simulation started",
            "user_input_text": "開始面試",
            "gemini_response_text": initial_bot_response,
            "audio_response_url": audio_url
        })
    else:
        print("Already initialized")

    # Create directories if they don't exist
    os.makedirs("./uploads", exist_ok=True)
    os.makedirs("./output", exist_ok=True)

    # 1. webm to wav
    webm_file = request.files['audio']
    wav_path = webm_to_wav(webm_file, session_id)
    
    # 2. speech to text
    user_input_text = stt(wav_path)

    # 3. Interact with Gemini API using the chat history
    response = chat.send_message(user_input_text)
    gemini_text_response = response.text
    chat_session_data["history"] = chat.history

    # 4. Convert Gemini's text response to speech
    audio_url = tts(gemini_text_response, session_id)

    return jsonify({
        "message": "Interview simulation response",
        "user_input_text": user_input_text,
        "gemini_response_text": gemini_text_response,
        "audio_response_url": audio_url
    })
