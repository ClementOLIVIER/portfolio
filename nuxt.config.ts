export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@nuxt/content',
    '@pinia/nuxt'
  ],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
