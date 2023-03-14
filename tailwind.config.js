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
        background: {
          200: '#0c121d',
          300: '#2a4365'
        },
        primary: {
          300: '#425E81',
          400: '#2b6cb0',
          500: '#2c5282',
          600: '#2a4365'
        },
        purple: {
          900: '#4C4C61',
          800: '#5A5A6E',
          700: '#6B6B7B',
          600: '#7C7C88',
          500: '#8D8D95',
          400: '#9E9EA2',
          300: '#AFB0AF',
          200: '#C0C1BC'
        },
        orange: {
          900: '#FF6B3C',
          800: '#FF7A4D',
          700: '#FF895E',
          600: '#FF9749',
          500: '#FFA55A',
          400: '#FFB36B',
          300: '#FFC17C',
          200: '#FFCE8D'
        },
        green: {
          900: '#2E8B57',
          800: '#3A7F58'
        },
        secondary: '#ecc94b'
      }
    }
  },
  plugins: []
}
