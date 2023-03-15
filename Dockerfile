# Build Image
FROM node:19-alpine AS BUILD_IMAGE

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

# Copy source code
COPY . .

# Build
RUN yarn build


# Run Image
FROM node:19-alpine

WORKDIR /app

# copy from build image
COPY --from=BUILD_IMAGE /app/.output ./.output
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules

EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]