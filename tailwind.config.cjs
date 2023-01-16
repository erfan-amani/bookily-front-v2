/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        background: {
          dark: "#1a1b23",
          light: "#fff",
        },
        card: {
          dark: "#23242f",
          light: "#e2e8f0",
        },
        modal: {
          dark: "#23242f",
          light: "#fff",
        },
        app: {
          darker: "#2c2d3a",
          dark: "#3b3c4e",
          gray: "#737373",
          light: "#e2e8f0",
          blue: "#0372ee",
          green: "#11df8f",
          red: "#ff6370",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Poppins", "sans-serif"],
        serif: ["Poppins", "sans-serif"],
        number: ["Monospace", "Poppins", "sans-serif"],
        fa: "fa",
      },
    },
  },
  plugins: [],
};
