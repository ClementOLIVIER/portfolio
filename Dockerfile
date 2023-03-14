FROM node:19-alpine

WORKDIR /portfolio

COPY ./.output .

EXPOSE 3000

ENTRYPOINT ["node", "server/index.mjs"]