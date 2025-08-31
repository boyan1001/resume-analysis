from flask import Flask, request, jsonify, send_from_directory
import os
from flask_cors import CORS
from mock_interview import gemini_mock_interview
from mock_interview import get_user_history
from resume_anlayze import gemini_resume_anlayze

app = Flask(__name__)

allow = os.getenv("ALLOW_ORIGINS",  "").split(",") if os.getenv("ALLOW_ORIGINS", "") else []
allow.append("http://localhost:3000")

CORS(
    app,
    resources={r"/*": {"origins": allow or "*"}},  # 或者列出特定路徑
    supports_credentials=True,
    methods=["GET","POST","PUT","DELETE","OPTIONS"],
    allow_headers=["Content-Type","Authorization","X-Requested-With"],
    max_age=86400,
)
# Create output directory for audio files
os.makedirs('./output', exist_ok=True)

@app.get("/healthz")
def healthz():
    return "ok", 200

# Serve static files from the output directory
@app.route('/output/<path:filename>')
def serve_audio(filename):
    return send_from_directory('./output', filename)

# ----------------------------------------------------------------------------------------------
# --------------------------------------RESUME ANALYSIS-----------------------------------------

@app.route('/upload_imformation', methods=['POST'])
def upload_imformation():
    return gemini_resume_anlayze(request)

# ----------------------------------------------------------------------------------------------
# --------------------------------------MOCK INTERVIEW------------------------------------------

@app.route('/interview', methods=['POST'])
def interview_simulation():
    return gemini_mock_interview(request)

@app.route('/interview_history', methods=['GET'])
def get_interview_history():
    return get_user_history(request)

# ----------------------------------------------------------------------------------------------
# -------------------------------------------main-----------------------------------------------

@app.route('/', methods=['get'])
def root():
    return "hello world"

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001, debug=True)