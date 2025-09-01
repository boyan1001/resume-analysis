# Resume Analysis System  
![React](https://img.shields.io/badge/React-20232a.svg?logo=react&logoColor=61DAFB&style=for-the-badge)
![Flask](https://img.shields.io/badge/Flask-000.svg?logo=flask&logoColor=white&style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge)
![sqlite](https://img.shields.io/badge/sqlite-07405e.svg?logo=sqlite&logoColor=white&style=for-the-badge)  
This is a web application we developed in DevJam (a hackathon hold by GDG). It can analyze resumes and provide feedback by Gemini AI.

## ✨ Overview  

- Developed a web application using Flask and React, allowing users to upload resumes and receive feedback.
- Implemented Gemini AI to analyze resumes and provide suggestions for improvement.
- Use RAG (RetrievalAugmented Generation) to enhance the accuracy of resume analysis.  
- With online mock interview mode, you can practice and improve your interview performance.

## 🧑‍💻 Teams  
```sh
erichung9060 : Project Manager / Back-end / General Codes / mock interview / Gemini api

weng__0721 : Front-end / mock interview interface design

boyan1001 : Back-end / resume analysis pipeline design / Gemini api / prompt engineering / Deploy  

noyapoyo : Front-end / resume analysis interface design
```

## 🧱 Project Structure  
```sh
resume-analysis
├── /backend/                  # Flask app
│  ├── Dockerfile              
│  ├── interview_results.db    # Database
│  └── ...
├── /backend/                  # Next.js app
│  ├── Dockerfile
│  └── ...
├── docker-compose.yml 
├── .gitignore
├── LICENSE
└── README.md
```

## 🖥️ Requirements    
To run the program successfully, please check the following:  
- Node.js 18+ / pnpm (for frontend)
- Python 3.12+ / uv (for backend)
- Docker % docker-compose (you can also deploy by Docker)

## 🐳 Run by Docker  
First enter your **gemini api key**
```sh
echo 'GOOGLE_API_KEY=<your_gemini_api_key>' > .env
```
Build and start the containers:  
```sh
docker compose up --build
```
Then access the services:  
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:3001

## 💻 Local Development (without Docker)  
First enter your **gemini api key**
```sh
echo 'GOOGLE_API_KEY=<your_gemini_api_key>' > .env
```
### Backend  
Use **uv** to install dependencies the backend app need: 
```sh
cd backend
uv sync
uv run app.py
```
Your **backend** app runs at http://localhost:3001  
### Frontend
Then use **pnpm** to runs frontend:
```sh
cd frontend
pnpm install
pnpm dev
```
Your **frontend** runs at http://localhost:3000  
