# Nuxt 3 Minimal Starter
Includes:
- Typescript support
- ES Lint
- Nuxt JS Color Mode
- Vueuse
- Pinia
- Nuxt Icon
- Nuxt Headless UI

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```


# Docker
## Build
sudo docker build -t portfolio .

## Interactive
sudo docker run --interactive --tty --entrypoint /bin/sh portfolio

## Run
sudo docker run -p 3000:3000 portfolio


# Fly.io
## Deploy
fly deploy