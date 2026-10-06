/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#030c14',
          navy: '#051829',
          blue: '#0d3859',
          cyan: '#00b4d8',
          accent: '#183157'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['Objectivity', 'Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
