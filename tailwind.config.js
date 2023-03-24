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
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      text: ['Barlow', 'sans-serif']
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#2A4365',
          50: '#7D9EC9',
          100: '#6F93C3',
          200: '#527DB7',
          300: '#42699F',
          400: '#365682',
          500: '#2A4365',
          600: '#1A293D',
          700: '#090E16',
          800: '#0c121d',
          900: '#000000'
        },
        salmon: {
          DEFAULT: '#FF7D6C',
          50: '#FFF6F6',
          100: '#FFE6E7',
          200: '#FFC8C8',
          300: '#FFADA9',
          400: '#FF948B',
          500: '#FF7D6C',
          600: '#FF684D',
          700: '#FF552F',
          800: '#FF4510',
          900: '#F13E00'
        },
        teal: {
          DEFAULT: '#52A3B3',
          50: '#E6F7F9',
          100: '#D0F0F4',
          200: '#A8E4E9',
          300: '#7FD8DE',
          400: '#57CDD3',
          500: '#52A3B3',
          600: '#3E7A8A',
          700: '#2A5151',
          800: '#162828',
          900: '#000000'
        },
        primary2: {
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
        dark: {
          900: '#0c121d',
          800: '#1a202c',
          700: '#2a4365',
          600: '#2c5282',
          500: '#2b6cb0',
          400: '#4c51bf',
          300: '#6b46c1',
          200: '#805ad5',
          100: '#2a4365'
        }
      }
    }
  },
  plugins: []
}
