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
      padding: {
        7.5: "30px",
      },
      height: {
        13.5: "54px",
      },
      gap: {
        98.5: "394px",
        7.5: "30px",
        16.5: "66px",
      },
      fontSize: {
        "4.5xl": "46px",
        "3.5xl": "32px",
        "46px": "46px",
        10: "40px",
      },
      width: {
        188.5: "475px",
      },
      borderWidth: {
        1: "1px",
      },
      inset: {
        "1.5":"6px",
      }
    },
  },
  plugins: [],
};
