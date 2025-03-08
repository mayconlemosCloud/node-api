# Use a base image with Node.js
FROM node:14 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --verbose

# Copy the rest of the application code
COPY . .

# Use a lightweight image for the final stage
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy dependencies from the builder stage
COPY --from=builder /app/node_modules ./node_modules

# Copy the application code
COPY --from=builder /app .

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]
