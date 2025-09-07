/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlack: '#19293A',
        brandGray: '#506473',
        secondaryPink: '#C0345E',
      },
    },
  },
  plugins: [],
}
