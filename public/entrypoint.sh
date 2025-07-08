#!/bin/sh
# entrypoint.sh

# This script will replace placeholders in config.js with actual environment variable values.

# Define the path to the config file within the container
CONFIG_FILE='/usr/share/nginx/html/config.js'

# Use environment variables, with default values if they are not set.
# This is useful for running the container locally without setting the variables.
export API_URL=${API_URL:-http://localhost:8080/api}
export APP_TITLE=${APP_TITLE:-LMS Portal}

# Use sed to replace the placeholders. The `g` flag ensures all occurrences are replaced.
sed -i "s|__API_URL__|${API_URL}|g" $CONFIG_FILE
sed -i "s|__APP_TITLE__|${APP_TITLE}|g" $CONFIG_FILE

echo "Configuration applied:"
cat $CONFIG_FILE

# Start the Nginx server in the foreground.
# `exec` replaces the shell process with the nginx process, which is a best practice.
echo "Starting Nginx..."
exec nginx -g 'daemon off;'