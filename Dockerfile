# Use an official Node runtime as a parent image
FROM node:22-alpine AS builder

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json .

# Install the dependencies
RUN npm install

# Copy the remaining application files to the working directory
COPY . .

# Build the application
RUN npm run build

# Copy the built static files from the 'builder' stage to the Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the runtime configuration template
COPY --from=builder /app/public/config.js /usr/share/nginx/html/config.js

# Expose port  5173 for the application
EXPOSE 8080

# Start the application
#CMD ["npm","run","dev"]