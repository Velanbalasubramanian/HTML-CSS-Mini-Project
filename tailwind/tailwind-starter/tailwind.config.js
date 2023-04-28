/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled:false,
    content: ["./dist/*.{html,js}"],
  },
  darkMode: 'media',
  theme: {
    extend: {},
    container: {
      center: true,
  },
  variants: {
    extend: {
      display:['dark'],
      opacity:['dark'],
    }
  },
 
  plugins: [],
}
}

