import google.generativeai as genai
import google.ai.generativelanguage as glm
import os
from flask import Flask, request, jsonify
from dotenv import load_dotenv # 導入 load_dotenv
from werkzeug.utils import secure_filename
import requests
import json
import re


# 輸入 google api 金鑰
load_dotenv()

# 設定上傳資料夾
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

try:
    api_key = os.getenv("GOOGLE_API_KEY")
    if api_key is None:
        raise ValueError("GOOGLE_API_KEY 環境變數未設定。")
    
    genai.configure(api_key=api_key)
    
    print("API 金鑰已從環境變數成功載入並配置。")
except ValueError as ve:
    print(f"錯誤：{ve}")
    print("請確保在您的 .env 檔案中設定 GOOGLE_API_KEY，例如：GOOGLE_API_KEY=\"您的API金鑰\"")
    exit()
except Exception as e:
    print(f"配置 API 金鑰時發生錯誤: {e}")
    exit()

def upload_large_file_to_gemini(file_path: str) -> glm.File:
    try:
        uploaded_file = genai.upload_file(path=file_path, display_name=os.path.basename(file_path))
        return uploaded_file
    except Exception as e:
        print(f"[Upload Error] {e}")
    return None

def generate_content_with_file(uploaded_file: glm.File, prompt: str):
    if not uploaded_file:
        return "[未生成內容]", {}

    try:
        model = genai.GenerativeModel(
            model_name='models/gemini-2.0-flash',
            tools=[
                glm.Tool(
                    function_declarations=[
                        glm.FunctionDeclaration(
                            name="resume_score_output",
                            description="回傳履歷六大項目的分數",
                            parameters=glm.Schema(
                                type=glm.Type.OBJECT,
                                properties={
                                    "專業能力與工作經驗": glm.Schema(type=glm.Type.INTEGER),
                                    "學歷與專業認證": glm.Schema(type=glm.Type.INTEGER),
                                    "語言能力與溝通表達": glm.Schema(type=glm.Type.INTEGER),
                                    "問題解決與思考能力": glm.Schema(type=glm.Type.INTEGER),
                                    "職涯目標與企業文化契合度": glm.Schema(type=glm.Type.INTEGER),
                                    "求職動機與熱忱": glm.Schema(type=glm.Type.INTEGER),
                                },
                                required=[
                                    "專業能力與工作經驗",
                                    "學歷與專業認證",
                                    "語言能力與溝通表達",
                                    "問題解決與思考能力",
                                    "職涯目標與企業文化契合度",
                                    "求職動機與熱忱",
                                ]
                            )
                        )
                    ]
                )
            ]
        )

        response = model.generate_content([uploaded_file, prompt], stream=False)
        
        text_parts = []
        score_json = {}

        for part in response.candidates[0].content.parts:
            if hasattr(part, 'function_call') and part.function_call.name == "resume_score_output":
                args_str = str(part)

                # 使用正則表達式提取字段和值
                pattern = r'key: "([^"]+)"\s+value {\s+number_value: (\d+)'
                matches = re.findall(pattern, args_str)
                for field_name, value in matches:
                    score_json[field_name] = int(value)
                print(score_json)
            elif hasattr(part, 'text'):
                print(part.text)
                text_parts.append(part.text)
        
        text = "\n".join(text_parts) if text_parts else "[無文字回應]"
        return text, score_json

    except Exception as e:
        return f"[錯誤] Gemini 分析失敗：{e}", {}


def gemini_find_page(job_id):
    url = f"https://www.104.com.tw/job/ajax/content/{job_id}"
    headers = {
        "User-Agent": "Mozilla/5.0",
        "Referer": f"https://www.104.com.tw/job/{job_id}",
    }

    response = requests.get(url, headers=headers)
    data = response.json()

    # 印出一些重點
    output_text = f""" 
    職缺 ID: {job_id}
    職缺名稱：{data['data']['header']['jobName']}
    公司名稱：{data['data']['header']['custName']}
    工作地點：{data['data']['jobDetail']['addressRegion']}
    工作內容：{data['data']['jobDetail']['jobDescription']}
    需求技能：{', '.join(skill['description'] for skill in data['data']['condition']['specialty'])}
    """
    return output_text


def gemini_resume_anlayze(request):
    # 職缺要求與職缺名字
    requirement_text = ""
    job_title = ""

    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 403

    if not file.filename.lower().endswith('.pdf'):
        return jsonify({"error": "Only PDF files are allowed"}), 402
    
    filename = secure_filename(file.filename)
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)
    file.save(filepath)

    # 處理 url 的部分
    job_url = request.form.get('job_url', '').strip()
    if job_url:
        if job_url.startswith("https://www.104.com.tw/job/"):
            job_id = job_url.split('/')[-1].split('?')[0]
            requirement_text = gemini_find_page(job_id)
        else:
            return jsonify({"error": "只能接受 https://www.104.com.tw/job/ 開頭的 URL"}), 503

    # 處理 job_title 的部分
    if 'job_title' in request.form:
        job_title = request.form['job_title'].strip()

    # 處理 pdf 檔案
    uploaded_file = None
    text = "[ERROR] 未知錯誤"

    if not os.path.exists(filepath):
        text = "[ERROR] 指定的 PDF 檔案不存在。請檢查檔案路徑。"
        return jsonify({"error": text}), 401
    
    try:
        uploaded_file = upload_large_file_to_gemini(filepath)

        evaluate_table = """
        六個指標一個 10 分，共 60 分
        請記得也要保留這六項指標的文字說明
        1.專業能力與工作經驗：評估應徵者的技能與實際工作經驗是否符合職缺需求。
        2.學歷與專業認證：考量學歷、科系與是否具備相關證照或專業成就。
        3.語言能力與溝通表達：綜合應徵者的語言能力與溝通、協作技巧（履歷中未提及的語言代表完全不會）
        4.問題解決與思考能力：評估其分析問題、提出解方與實踐的能力。
        5.職涯目標與企業文化契合度：觀察應徵者的價值觀、工作態度與企業的文化是否一致。
        6.求職動機與熱忱：評估其主動性、應徵誠意與對職缺的渴望程度。
        請務必使用名為 `resume_score_output` 的工具，回傳六大指標的分數。此工具輸出是這次分析的關鍵。
        """

        if uploaded_file:
            if requirement_text != "" and job_title != "":
                prompt_text = f"""以下是職缺要求：{requirement_text}。
                以下是職缺名稱：{job_title}。
                請根據以上資訊，分析 PDF 檔案內容與職缺要求的相關性，並生成一份針對該職缺的履歷分析報告。\
                並回傳履歷與職缺要求的契合度，總分為 60 分
                評分方式參考可以如下：
                {evaluate_table}
                請幫我把契合度總分放在回饋的最上面
                並提供履歷的改善建議。請列點呈現
                並鼓勵使用者在面試時強調履歷中的亮點。
                """
            elif requirement_text != "" and job_title == "":
                prompt_text = f"""以下是職缺要求：{requirement_text}。
                請根據以上資訊，分析 PDF 檔案內容與職缺要求的相關性，並生成一份針對該職缺的履歷分析報告。\
                並回傳履歷與職缺要求的契合度，總分為 60 分
                評分方式參考可以如下：
                {evaluate_table}
                請幫我把契合度總分放在回饋的最上面
                並提供履歷的改善建議。請列點呈現
                並鼓勵使用者在面試時強調履歷中的亮點。
                """
            elif requirement_text == "" and job_title != "":
                prompt_text = f"""以下是職缺名稱：{job_title}。
                請根據以上資訊，分析 PDF 檔案內容與職缺要求的相關性，並生成一份針對該職缺的履歷分析報告。\
                並回傳履歷與職缺要求的契合度，總分為 60 分
                評分方式參考可以如下：
                {evaluate_table}
                請幫我把契合度總分放在回饋的最上面
                並提供履歷的改善建議。請列點呈現
                並鼓勵使用者在面試時強調履歷中的亮點。
                """
            else:
                prompt_text = """這是一份履歷，請提供履歷的改善建議。請列點呈現
                並鼓勵使用者在面試時強調履歷中的亮點。
                """
            text, scores = generate_content_with_file(uploaded_file, prompt_text)
            if requirement_text == "" and job_title == "":
                text = f"**因為沒有提供職缺名稱與職缺連結，所以無法提供針對該職缺的履歷分析報告**。\n\n{text}"
            return jsonify({
                "message": "Successfully generated content",
                "content": text,
                "scores": json.loads(json.dumps(scores))  # 確保是純 dict
            }), 200
        else:
            return jsonify({"error": "[ERROR] 上傳檔案失敗，無法生成內容。"}), 501

    except Exception as e:
        return jsonify({"error": f"[ERROR] 在處理 PDF 檔案時發生錯誤: {e}"}), 502