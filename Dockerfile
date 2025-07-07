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

# --- Stage 2: Setup the Production Environment ---
# Use a lightweight Nginx image for the final container
FROM nginx:1.23-alpine

# Copy the built static files from the 'builder' stage to the Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy our custom Nginx configuration
#COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the runtime configuration template
COPY --from=builder /app/public/config.js /usr/share/nginx/html/config.js

# Copy and set permissions for the entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose the port Nginx will listen on
EXPOSE 8080

# Set the entrypoint script to run when the container starts
ENTRYPOINT ["/entrypoint.sh"]

# Start the application
#CMD ["npm","run","dev"]