import sqlite3
import os
import json
from datetime import datetime

DATABASE_PATH = 'interview_results.db'

def init_database():
    """初始化資料庫和建立表格"""
    try:
        # 如果資料庫檔案存在但損壞，先刪除它
        if os.path.exists(DATABASE_PATH):
            try:
                conn = sqlite3.connect(DATABASE_PATH)
                conn.execute("SELECT 1")
                conn.close()
            except sqlite3.DatabaseError:
                print(f"偵測到損壞的資料庫檔案，正在刪除: {DATABASE_PATH}")
                os.remove(DATABASE_PATH)
        
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        
        # 修改表格結構，新增 user_email 欄位和 interview_history JSON 欄位
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS user_interview_history (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_email TEXT NOT NULL UNIQUE,
                interview_history TEXT NOT NULL
            )
        ''')

        print("資料庫初始化完成")
        conn.commit()
        conn.close()
        
    except Exception as e:
        print(f"資料庫初始化錯誤: {e}")
        # 如果仍然失敗，強制刪除檔案並重新建立
        if os.path.exists(DATABASE_PATH):
            os.remove(DATABASE_PATH)
        # 重新嘗試建立
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE user_interview_history (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_email TEXT NOT NULL UNIQUE,
                interview_history TEXT NOT NULL,
            )
        ''')
        conn.commit()
        conn.close()
        print("強制重新建立資料庫完成")

def save_user_interview_result(user_email, session_id, test_topic, evaluation):
    """保存用戶面試結果到資料庫，包含歷史紀錄"""
    conn = sqlite3.connect(DATABASE_PATH)
    cursor = conn.cursor()
    
    # 新的面試記錄
    new_interview = {
        'test_topic': test_topic,
        'evaluation': evaluation,
    }
    
    # 查詢是否已有該用戶的記錄
    cursor.execute('''
        SELECT interview_history FROM user_interview_history WHERE user_email = ?
    ''', (user_email,))
    
    result = cursor.fetchone()
    
    if result:
        # 用戶已有歷史記錄，加入新記錄
        existing_history = json.loads(result[0])
        existing_history.append(new_interview)
        
        cursor.execute('''
            UPDATE user_interview_history 
            SET interview_history = ?
            WHERE user_email = ?
        ''', (json.dumps(existing_history, ensure_ascii=False), user_email))
        
        print(f"更新用戶 {user_email} 的面試記錄，總共 {len(existing_history)} 次面試")
        
    else:
        # 用戶沒有歷史記錄，建立新記錄
        new_history = [new_interview]
        
        cursor.execute('''
            INSERT INTO user_interview_history (user_email, interview_history)
            VALUES (?, ?)
        ''', (user_email, json.dumps(new_history, ensure_ascii=False)))
        
        print(f"為用戶 {user_email} 建立新的面試記錄")
    
    conn.commit()
    conn.close()
    
    return new_interview
    

def get_user_interview_history(user_email):
    conn = sqlite3.connect(DATABASE_PATH)
    cursor = conn.cursor()
    
    cursor.execute('''
        SELECT interview_history FROM user_interview_history 
        WHERE user_email = ?
    ''', (user_email,))
    
    result = cursor.fetchone()
    conn.close()
    
    if result:
        return {
            'user_email': user_email,
            'interview_history': json.loads(result[0])
        }
    else:
        return None
    

init_database()