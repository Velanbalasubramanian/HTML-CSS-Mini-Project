/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  important: true,
  purge: {
    enabled:false,
    content: ["./dist/*.{html,js}"],
  },
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image-one': "url('images/realworld.png')",
        'image-two': "url('/images/logo-dark.png')",
    }),
    colors: {
      'cyan': colors.cyan,
      'teal': colors.teal
    }
    },
    container: {
      center: true,
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
}
}

