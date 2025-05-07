# Stage 1: Build
FROM node:20.11.1-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Generate Prisma client before build
RUN npx prisma generate

# Build the Next.js app
RUN npm run build

# Stage 2: Run
FROM node:20.11.1-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
