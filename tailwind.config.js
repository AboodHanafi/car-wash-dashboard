/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],

  theme: {
    colors: {
      main: '#4C2784',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
