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
        'zblack': '#353535',
        'zbl' : ' #f0f2f6',
        'zbtwo' : '#03438c',
        'zbopa' : '#02397a',
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
        'hoborder':'5.5rem',
        'hobornine':'8.5rem',
        'hobo':'40px',
      },
      lineHeight: {
        'xs': '1.5rem',
        'sm': '2rem',
        'lg': '42px',
        'llg': '51px',
        'xl': '58px',
        'xxl': '65px',
        
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

