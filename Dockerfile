# Base image
FROM node:20-alpine

# App directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of app
COPY . .

# App port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
