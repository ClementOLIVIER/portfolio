export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@nuxt/content'
  ],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
