/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A0AA",
        secondary: "#FFC567",
        "c-grey": "#D9D9D9",
        "light-grey": " #979797",
        "ghost-white": "#F8F9FE",
      },
      maxWidth: {
        container: "1180px",
      },
      width: {
        "20.25":"81px"
      },
      height: {
        "13.75":"55px"
      },
      gap:{
        "98.75":"395px"
      },
      fontSize:{
        "4.5xl":"46px",
        "3.5xl":"32px"
      },
    },
  },
  plugins: [],
};
