# ========= Build & Run (單階段) =========
FROM node:24.4.0-alpine
WORKDIR /app

# 啟用 corepack 並鎖定 pnpm 版本（你也可省略 prepare，若 package.json 有 packageManager 欄位）
RUN corepack enable && corepack prepare pnpm@10.15.0 --activate

# 先裝依賴（善用快取）
COPY frontend/package.json frontend/pnpm-lock.yaml* frontend/.npmrc* ./
RUN pnpm install --frozen-lockfile

# 複製程式碼並建置
COPY frontend/ .
# 若你使用 output: 'export'，只要 next build 就會產生 out/
RUN pnpm build

# 若你沒有把 serve 裝進 dependencies，也可改用 pnpm dlx：
# CMD ["pnpm", "dlx", "serve", "-s", "out", "-l", "3000"]

EXPOSE 3000
CMD ["pnpm", "preview"]
