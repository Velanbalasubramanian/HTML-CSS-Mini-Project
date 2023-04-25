/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
    extend: {},
    container: {
      
  },
  plugins: [],
}
}

