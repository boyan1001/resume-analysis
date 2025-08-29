# ========= Build & Run =========
FROM node:24.4.0-alpine
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.15.0 --activate

# Install dependencies
COPY frontend/package.json frontend/pnpm-lock.yaml* frontend/.npmrc* ./
RUN pnpm install --frozen-lockfile

# Copy project files and build
COPY frontend/ .

RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "preview"]
