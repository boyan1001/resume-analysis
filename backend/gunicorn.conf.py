import os

bind = f"0.0.0.0:{os.getenv('PORT', '3001')}"
workers = int(os.getenv('WEB_CONCURRENCY', '2'))
worker_class = "gthread"
threads = int(os.getenv('THREADS', '8'))
timeout = int(os.getenv('TIMEOUT', '120'))
