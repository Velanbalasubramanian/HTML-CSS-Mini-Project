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
      screens: {
        '2xl': '1340px'
      },
      colors: {
        'zblue': '#002d61',
        'bg-channel' : 'rgba(78, 31, 163, 0.15)', 
         'btn-det' : 'rgba(78, 31, 163, 0.10)',
        'txt-channel' : '#4E1FA3',
        'h-lyt' : '#92929D',
        'common-bl' : '#F5F5F6',
        'tech-title' : '#192A44',
        'line-btm' : '#D9D9DE', 
        'in-place' : '#A0AEC0',
        'btm-back' : '#F5F5F6',
        'user-spn' : '#5F646D',
        'user-bg' : '#F5F5FA',
        'line-btm1': '#808095',
      },
      opacity: {
        // '06': '.06',
      },
      fontFamily: {
      man : ["manrope"],
      styr : ["StyreneALC"],
      robo : ["Roboto Flex"]
      },
      fontSize: {
        // '40l' : ["2.5rem"]
        '13' : ["13px"],
        'xxs' : ['10px']
      },
      boxShadow: {
        // '3xl': '0 0 20px 0 rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        // 'brdar': '11.5rem',
        'bordr': '18px'
      },
      lineHeight: {
        // 'xs': '1.5rem',
      },
      backgroundImage: {
        'how-to-acc': "url('/images/vertical-bg.png')",
      },
      borderWidth: {
        // '12': '10px',
      },
      minHeight: {
        '1/7': '855px',
        '1/77': '750px',
        '11/77': '720px',
      },
      maxHeight: {
        '3/7': '815px',
        '3/77': '490px',
        '33/77': '355px',
      },
      width: {
        '60': '15rem',
        '23':'358px',
      },
      transitionDuration: {
        '0.4': '0.4s',
      },
      padding: {
        '29': '29px',
        '27': '27px',
        '22': '22px',
        '11': '11px',
        '26': '26px',
        '18': '18px',
        '19': '19px',
        '31': '31px',
        '17':'17px',
        '55':'55px',
        '9.5' : '9px',
        '26' : '26px'
      },
      margin: {
        '26': '26px',
      },
    },
   
  variants: {
    
  },
  plugins: [
    
  ],
}
}

