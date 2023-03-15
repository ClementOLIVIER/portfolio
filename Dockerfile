FROM node:19-alpine

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

RUN rm -rf node_modules

EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]