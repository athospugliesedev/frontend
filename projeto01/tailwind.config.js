/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",


    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        abc: ["Sedgwick Ave Display", "cursive"]
      },
      backgroundImage: {
      blur: 'url(/src/assets/blur.jpg)'
    },},
  },
  plugins: [],
}

