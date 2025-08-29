FROM python:3.12-slim

MAINTAINER boyan1001(cby931001@gmail.com)

# venv
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

COPY pyproject.toml uv.lock ./

# install uv
RUN curl -LsSf https://astral.sh/uv/install.sh | sh \
    && /root/.local/bin/uv --version \
    && /root/.local/bin/uv sync --frozen --no-dev

ENV PATH="/app/.venv/bin:$PATH"

COPY . /app/

EXPOSE 3001

CMD ["gunicorn", "app:app", "-b", "0.0.0.0:3001", "-w", "2", "-k", "gthread", "--threads", "8", "--timeout", "120"]
