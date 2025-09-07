FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all application code
COPY . .

# Expose the port used in your code (3001)
EXPOSE 3001

# Set default environment variable for PORT if not set
ENV PORT=3001

# Start the Node.js application
CMD ["node", "index.js"]
