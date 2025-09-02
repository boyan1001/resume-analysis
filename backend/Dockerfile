FROM python:3.11-slim

# Add DNS configuration to resolve network issues
RUN echo "nameserver 8.8.8.8" > /etc/resolv.conf && \
    echo "nameserver 8.8.4.4" >> /etc/resolv.conf

# 取代舊的 MAINTAINER
LABEL maintainer="boyan1001 <cby931001@gmail.com>"

# 基本環境 - 移除 UV_PYTHON_PREFERENCE，讓 uv 使用系統 Python
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    UV_LINK_MODE=copy

# 原生相依
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    portaudio19-dev \
    build-essential \
    curl \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# 先只複製相依檔，讓 Docker layer cache 生效
COPY pyproject.toml uv.lock ./

# 安裝 uv 並同步相依（會建立 /app/.venv）
RUN curl -LsSf https://astral.sh/uv/install.sh | sh \
 && /root/.local/bin/uv --version \
 && /root/.local/bin/uv sync --frozen --no-dev \
 && /root/.local/bin/uv run python --version

# 再複製程式碼
COPY . /app/

# 安全性：改非 root 執行
RUN useradd -m -u 1001 appuser \
 && chown -R appuser:appuser /app

USER appuser

# 確保虛擬環境在 PATH 中，並檢查 Python 是否正常
ENV PATH="/app/.venv/bin:${PATH}"

# 檢查 Python 和相依是否正常安裝
RUN python --version && python -c "import sys; print(sys.executable)" && gunicorn --version

# Cloud Run 預設會注入 PORT；本地測試預設 3001
ENV PORT=3001 WEB_CONCURRENCY=2 THREADS=8 TIMEOUT=120
EXPOSE 3001

# 直接使用虛擬環境中的 gunicorn，避免 uv run 的權限問題
CMD ["gunicorn", "--config", "gunicorn.conf.py", "app:app"]

