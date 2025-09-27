# Use the official Node.js LTS image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only package metadata to leverage Docker layer caching
COPY package*.json ./

# Install dependencies (none listed yet, but keeps Dockerfile ready)
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Expose the port the app listens on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]