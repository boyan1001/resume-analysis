# ========= Build & Run =========
FROM node:18-alpine
WORKDIR /app

# Add DNS configuration to resolve network issues
RUN echo "nameserver 8.8.8.8" > /etc/resolv.conf && \
    echo "nameserver 8.8.4.4" >> /etc/resolv.conf

RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies
COPY frontend/package.json frontend/pnpm-lock.yaml* frontend/.npmrc* ./
RUN pnpm install --frozen-lockfile

# Copy project files and build
COPY frontend/ .

# Build without formatting (to avoid potential issues)
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "preview"]
