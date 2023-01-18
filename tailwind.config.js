/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container :{
      center : true,
      padding : '16px',
    },
    extend: {
      screens : {
        '2xl' : '1320px',
      },
      colors : {
        primary : '#FBC912',
        secondary : '#FED154',
        dark1 : '#2A2F35',
        dark2 : '#3B4046',
      },
      fontFamily :{
        'lato' : 'lato',
      }
    },
  },
  plugins: [],
}
