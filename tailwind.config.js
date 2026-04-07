/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '15px',
      screens: {
         sm: '1230px'
      }
    }
  },
  plugins: [],
}