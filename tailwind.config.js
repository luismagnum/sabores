/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      brightColors:"#f4511f",
      backgroundColor:"#b7bca9",
      lightText:"#959595",
    },
  },
  plugins: [],
}

