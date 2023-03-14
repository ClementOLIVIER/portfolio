/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#425E81',
          400: '#2b6cb0',
          500: '#2c5282',
          600: '#2a4365'
        },
        secondary: '#ecc94b'
      }
    }
  },
  plugins: []
}
