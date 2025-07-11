/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: {
          custom: 'rgb(223, 118, 6)',
        },
      },
    },
  },
  plugins: [],
};
