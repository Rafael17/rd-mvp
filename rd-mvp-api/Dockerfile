FROM node:16 AS build
WORKDIR /usr/src/app

COPY controllers ./controllers
COPY models ./models
COPY package.json .
COPY server.js .

# build it
RUN npm install

CMD ["node", "server.js"]