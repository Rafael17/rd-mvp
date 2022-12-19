FROM node:16 AS build
WORKDIR /usr/src/app

# copy files for build
COPY package.json .
COPY angular.json .
COPY tsconfig.json .
COPY tsconfig.app.json .
COPY src ./src

# stop angular from asking dumb questions in cli
ENV NG_CLI_ANALYTICS=ci

# build it
RUN npm install \
    && npm run build

FROM node:12-slim
WORKDIR /usr/src/app

# this is the final image
# let's only copy the files we need to run the app
COPY --from=build /usr/src/app/dist dist
COPY --from=build /usr/src/app/node_modules node_modules
RUN npm install http-server -g

EXPOSE 8080
CMD ["http-server", "dist/rd-mvp"]
