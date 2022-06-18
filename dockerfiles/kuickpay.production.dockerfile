FROM node:16-alpine

EXPOSE 3000
WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN yarn build
CMD node dist/main.js