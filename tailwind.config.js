/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "#F4364C",
      orange: "#EF6A00",
      yellow: "#FFB500",
      green: "#00957A",
      teal: "#00BCE1",
      blue: "#0047BB",
      purple: "#97409E",
      pink: "#EF60A3",
      black: "#101820",
      white: "#FFF9F3",
      whiteDark: "#F2E9E3",
      whiteDarkest: "#997B71",
      blackLight: "#1A2835",
      blackLighter: "#3D5062",
      blackLightest: "#9192A0",
    },
    fontFamily: {
      sans: ["NeueHaasGrotesk", "Nunito", "Arial"],
      display: ["RoxboroughCF", "Nunito", "Arial"],
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
