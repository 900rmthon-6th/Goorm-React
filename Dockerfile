# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY demo/package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY demo .

# Build the project
RUN npm run build

# Expose a port (optional, depending on your application's needs)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
