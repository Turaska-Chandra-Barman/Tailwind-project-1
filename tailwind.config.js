/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['*.html'],
  theme: {
    extend: {
      screens: {
        xs1: '318px',
        xs2: '470px',
        lgpro: '1338px',
      },
      fontSize: {
        '8px': '8px',
      },
      maxWidth: {
        '3xl': '1800px',
        '4xl': '2200px',

        smallsize: '500px',
      },
      colors: {
        secondary: '#5677AC',
        primary: '#333333',
        'text-clr': '#616161',
        'secondary-2': '#E6EBF3',
        'text-clr2': '##121212',
        'News-clr': '#F0F0F0',
      },
      backgroundImage: {
        heroImg:
          "url('https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
      width: {
        smallsize: '500px',
      },
      size: {
        '2px': '2px',
      },
      animation: {
        wiggle: 'wiggle 2s  ease-in-out   ',
      },
      keyframes: {
        wiggle: {
          '0%': {
            opacity: '0',
            top: '0px',
          },
          '50%': {
            opacity: '0',
            top: '-100px',
          },

          '100%': {
            opacity: '1',
            top: '0px',
          },
        },
      },
    },
  },
  plugins: [],
};

