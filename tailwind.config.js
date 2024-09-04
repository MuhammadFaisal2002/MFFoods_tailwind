/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Faisal: '#FF6363',
        secFaisal: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        body: ["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

