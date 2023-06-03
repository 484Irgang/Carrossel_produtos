/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      animation: {
        'bounce-inverted' : 'bounce 1s 0.5s infinite'
      }
      
    },
  },
  plugins: [],
}

