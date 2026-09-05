# ---------- Build Stage ----------
FROM node:20-bookworm-slim AS builder

WORKDIR /app

# Native build tools required to compile dependencies
RUN apt-get update && \
    apt-get install -y python3 make g++ && \
    rm -rf /var/lib/apt/lists/*

COPY package*.json ./

RUN npm ci --omit=dev --build-from-source

COPY . .


# ---------- Production Stage ----------
FROM node:20-bookworm-slim AS production

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src

EXPOSE 5000

CMD ["npm", "start"]