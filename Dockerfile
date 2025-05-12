FROM node:alpine

WORKDIR /app
RUN npm install -g pnpm

COPY . /app

RUN pnpm install

ENTRYPOINT [ "node", "index.js" ]
