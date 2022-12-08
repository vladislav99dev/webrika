/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '3-1':'3fr 1fr',
        '1-1-1-1':'1fr 1fr 1fr 1fr'
      },
      colors:{
        'navy': '#3B485E',
        'navy-100':'#6E82A4',
        'white--underLine--1': 'rgba(255,255,255,1)',
        'white--underLine--2': 'rgba(255,255,255,0)',
        'yellow':'#FFDC60',
        'yellow-opacity':'rgba(255,221,96,0)'

      },
    },
  },
  plugins: [],
}
