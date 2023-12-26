const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      // use colors only specified
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      blue: colors.blue,
      primary_blue:'#687099',
      primary_light_blue: '#E9E9E9',
      primary_blue_2: '#334CCB47',
      accent_black:"#66666640",
      pomo_red: "#A0342F",
    },
    extend: {
      colors:{
        primary_blue:'#687099',
        primary_light_blue: '#E9E9E9',
        primary_blue_2: '#334CCB47',
        accent_black:"#66666640",
        pomo_red: "#A0342F",
      }
    },
  },
  plugins: [],
};