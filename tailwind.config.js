/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)']
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#19A7CE", // 240,86,199
        primaryDark: "#1B7476", // 80,230,217
      }
    },
  },
  plugins: [],
}

