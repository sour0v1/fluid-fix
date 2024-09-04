/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'kanit' : [ "Kanit", "sans-serif"],
        'poppins' : ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

