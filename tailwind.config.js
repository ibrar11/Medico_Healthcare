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
      fontSize: {
        10: "40px",
      },
      gap: {
        7.5: "30px",
        16.5: "66px",
      },
    },
  },
  plugins: [],
};
