/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{js,jsx,ts,tsx}",
    "./types/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#F5822A",
        background: "#000000",
        tabBackground: "#0F0F0F",
        tabInactive: "#8A8A8A",
        text: "#1A1A1A",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
