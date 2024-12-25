/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',  // Enable dark mode using class
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',  // Custom color for buttons
        secondary: '#EF4444',  // Custom color for log out button
      }
    },
  },
  plugins: [],
};
