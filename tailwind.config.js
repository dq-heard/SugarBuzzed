/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    fontFamily: {
      'cookie': ['Cookie', 'cursive'],
      'hind': ['Hind', 'sans-serif'],
      'mitr': ['Mitr', 'sans-serif']
    },
    extend: {
      colors: {
        royalPurple: "#8641CF",
        lightPurple: "#A85FEF",
        offWhite: "#FFF0D1",
        richBrown: "#D48B25",
        brightRed: "#FF014A"
      },
    },
  },
  plugins: [],
}