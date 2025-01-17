/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px'
      }
    },
  },
  plugins: [],
}

