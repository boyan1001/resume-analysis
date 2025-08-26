FROM python:3.12-slim

# 讓容器內預設走專案的 venv
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    UV_PYTHON_PREFERENCE=only-managed \
    UV_LINK_MODE=copy

# ffmpeg
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    portaudio19-dev \
    build-essential \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY pyproject.toml uv.lock /app/

# install uv
RUN curl -LsSf https://astral.sh/uv/install.sh | sh \
    && /root/.local/bin/uv --version \
    && /root/.local/bin/uv sync --frozen --no-dev

ENV PATH="/app/.venv/bin:$PATH"

COPY backend/ /app/

EXPOSE 8000

CMD ["gunicorn", "app:app", "-b", "0.0.0.0:8000", "-w", "2", "-k", "gthread", "--threads", "8", "--timeout", "120"]
