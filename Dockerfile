FROM node:20-alpine

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Add prisma schema
COPY src/prisma/schema.prisma ./prisma/

# Copy environment variables
COPY .env ./

# Install dependencies
RUN npm install

# Generate Prisma client with database URL
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
RUN npx prisma generate

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0

# Use start instead of dev for production
CMD ["npm", "run", "start"]