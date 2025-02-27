# Gunakan image resmi Node.js sebagai base
FROM node:22-alpine AS base

# Set working directory
WORKDIR /app

# Salin package.json dan package-lock.json untuk instalasi dependencies
COPY package.json package-lock.json ./

# Instal dependencies menggunakan npm ci untuk lingkungan produksi
RUN npm ci

# Salin seluruh project
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Gunakan image yang lebih ringan untuk menjalankan aplikasi
FROM node:22-alpine AS runtime

WORKDIR /app

# Salin hasil build dari stage sebelumnya
COPY --from=base /app/.next .next
COPY --from=base /app/public public
COPY --from=base /app/package.json .
COPY --from=base /app/node_modules node_modules

# Port yang digunakan oleh Next.js
EXPOSE 3000

# Perintah untuk menjalankan aplikasi Next.js
CMD ["npm", "run", "start"]
