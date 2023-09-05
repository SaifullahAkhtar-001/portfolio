//** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      height: {
        'vh-17' : '17vh',
        'vh-96' : '96vh',
        'vh-26' : '26vh',
      },
      padding: {
        'vh-4' : '4vh'
      }
    },
  },
  plugins: [],
};