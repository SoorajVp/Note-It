/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#5c33bd',
        secondary: '#7848e8'
      },
      fontSize: {
        '2xs': '.625rem', // Your custom font size
      },
    },
  },
  plugins: [],
}
