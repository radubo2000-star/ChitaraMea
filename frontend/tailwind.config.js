/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#fdf8f3',
          100: '#f5e6d3',
          200: '#e8cba3',
          300: '#d4a574',
          400: '#c08552',
          500: '#a6693a',
          600: '#8b5230',
          700: '#6d3f26',
          800: '#4a2a1a',
          900: '#2d1810',
          950: '#1a0f0a',
        },
      },
    },
  },
  plugins: [],
}
