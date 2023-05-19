/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  important: true,
  purge: {
    enabled:false,
    content: ["./dist/*.{html,js}"],
  },
  theme: {
    extend: {
      colors: {
        'zblue': '#002d61'
      },
      opacity: {
        '06': '.06',
      },
    },
   
  variants: {
    
  },
  plugins: [],
}
}

