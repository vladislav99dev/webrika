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
        'yellow-opacity':'rgba(255,221,96,0)',
        'development-100':'rgba(117, 90, 186, 0)',
        'development-200':'rgba(117, 90, 186, 0.25)',
        'development-300':'rgba(117, 90, 186, 0.5)',
        'development-400':'rgba(117, 90, 186)',
        'design-100':'rgba(66, 226, 183, 0)',
        'design-200':'rgba(66, 226, 183, 0.25)',
        'design-300':'rgba(66, 226, 183, 0.5)',
        'design-400':'rgba(66, 226, 183,0.7)',
        'eCommerce-100':'rgba(0, 205, 255, 0)',
        'eCommerce-200':'rgba(0, 205, 255, 0.25)',
        'eCommerce-300':'rgba(0, 205, 255, 0.5)',
        'eCommerce-400':'rgba(0, 205, 255,0.7)',
        'socialMedia-100':'rgba(105, 138, 220, 0)',
        'socialMedia-200':'rgba(105, 138, 220, 0.25)',
        'socialMedia-300':'rgba(105, 138, 220, 0.5)',
        'socialMedia-400':'rgba(105, 138, 220,0.7)',
        'grey-100':'rgba(240,240,240,0.25)',
        'grey-200':'rgba(240,240,240,0.5)',
        'grey-300':'rgba(240,240,240)',



      },
    },
  },
  plugins: [],
}
