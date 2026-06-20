# Use the official Node.js LTS image as base
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies (production only, skip devDependencies)
RUN npm ci --omit=dev

# Copy application source code
COPY . .

# Expose port (default is 5000, or uses process.env.PORT)
EXPOSE 5000

# Set production environment variable
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
