/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          500: "#d84e55",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        xs: "0.6rem", // Extra small
        sm: "0.75rem", // Small
        base: "0.875rem", // Default/base
        lg: "1rem", // Large
        xl: "1.25rem", // Extra large
        "2xl": "1.25rem", // Double extra large
        "3xl": "1.5rem", // Triple extra large
        "4xl": "2rem", // Quadruple extra large
        "5xl": "3rem", // Quintuple extra large
        "6xl": "4rem", // Sixtuple extra large
      },
    },
  },
  plugins: [],
};
