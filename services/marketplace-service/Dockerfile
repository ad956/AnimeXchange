# Use a Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the pnpm-lock.yaml and package.json files
COPY pnpm-lock.yaml package.json ./

# Install dependencies using pnpm
RUN npm install -g pnpm && pnpm install

# Copy the source code
COPY . .

# Build the app
RUN pnpm run build

# Set the command to start the app
CMD [ "pnpm", "run", "serve" ]