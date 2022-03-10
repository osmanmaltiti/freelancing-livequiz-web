module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '40/60': "40% 60%",
        '25/75': "25% 75%"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}