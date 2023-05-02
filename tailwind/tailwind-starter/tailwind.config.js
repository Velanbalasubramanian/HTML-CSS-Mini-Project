/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled:false,
    content: ["./dist/*.{html,js}"],
  },
  darkMode: "class",
  theme: {
    extend: {},
    container: {
      center: true,
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}

