/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#150E28",
        secondary: "#903AFF",
        accent: "#D434FE",
        extra: "#FE34B9",
      },
      fontFamily: {
        unica: "Unica One",
        montserrat: "Montserrat",
        clash: "ClashDisplay",
      },
    },
  },
  plugins: [],
};
