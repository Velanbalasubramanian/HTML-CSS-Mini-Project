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
        'zblue': '#002d61',
        'bg-channel' : 'rgba(78, 31, 163, 0.15)', 
        'txt-channel' : '#4E1FA3',
      },
      opacity: {
        '06': '.06',
      },
      fontFamily: {
      pop : ["poppins"],
      },
      fontSize: {
        '40l' : ["2.5rem"]
      },
      boxShadow: {
        '3xl': '0 0 20px 0 rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'brdar': '11.5rem',
      },
      lineHeight: {
        'xs': '1.5rem',
      },
      backgroundImage: {
        'how-to-acc': "url('/images/how-to-access.png')",
      },
      borderWidth: {
        '12': '10px',
      }
    },
   
  variants: {
    
  },
  plugins: [
   
  ],
}
}

