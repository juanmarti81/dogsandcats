/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'Jura' :['Jura', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'PTSans': ['"PT Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}