FROM node:18
COPY package*.json ./
COPY . .
WORKDIR /app
CMD ["tail", "-f", "/dev/null"]
