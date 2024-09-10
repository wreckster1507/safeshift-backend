# 1. Use Node.js 18 slim version as the base image
FROM node:18-slim

# 2. Set the working directory inside the container
WORKDIR /usr/app/safeshift/backend

# 3. Copy package.json and package-lock.json files
COPY package*.json ./

# 4. Install dependencies (including only production dependencies)
RUN npm install --production

# 5. Copy the rest of the application source code to the container
COPY . .

# 6. Expose the port your app will run on (ensure this matches your app's port)
EXPOSE 5000


# 8. Command to start the application
CMD ["npm", "start"]
