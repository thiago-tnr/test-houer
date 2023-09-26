FROM --platform=linux node:18
USER node
COPY package*.json ./
COPY . .

WORKDIR /home/node/app

CMD ["tail", "-f", "/dev/null"]
