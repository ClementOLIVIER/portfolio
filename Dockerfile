# Build Image
FROM node:18-alpine AS BUILD_IMAGE

WORKDIR /app

# Couchbase sdk requirements
RUN apk update && apk add yarn curl bash && rm -rf /var/cache/apk/*


# Install dependencies
COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile --production

# Copy source code
COPY . .

# Build
RUN yarn build

# Prune dev dependencies
## Using npm prun
RUN npm prune --omit=dev

## Unsing node-prune
RUN npm install -g node-prune
RUN node-prune

## Manually (Identified by running `du -sh ./node_modules/* | sort -nr | grep '\dM.*'`)
RUN rm -rf node_modules/typescript
RUN rm -rf node_modules/@babel
RUN rm -rf node_modules/rxjs
RUN rm -rf node_modules/vite
RUN rm -rf node_modules/lodash
RUN rm -rf node_modules/@esbuild
RUN rm -rf node_modules/caniuse-lite
RUN rm -rf node_modules/@vue
RUN rm -rf node_modules/nuxt
RUN rm -rf node_modules/web-streams-polyfill
RUN rm -rf node_modules/eslint
RUN rm -rf node_modules/tailwindcss
RUN rm -rf node_modules/@nuxt
RUN rm -rf node_modules/vue
RUN rm -rf node_modules/unenv
RUN rm -rf node_modules/rollup
RUN rm -rf node_modules/js-sdsl
RUN rm -rf node_modules/css-tree
RUN rm -rf node_modules/@rollup

# Run Image
FROM node:18-alpine

WORKDIR /app

# copy from build image
COPY --from=BUILD_IMAGE /app/.output ./.output
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules

EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]