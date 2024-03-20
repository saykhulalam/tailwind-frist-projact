/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        'container': '1200px',
      },
      colors: {
        'lightgray': '#CCCCCC',
        'hadinggray': '#D9D9D9',
        'darkgray': '#A7A7A7',
      },
      fontFamily: {
        'dm': ["DM Sans","sans-serif"],
        'poppins': ["Poppins","sans-serif"],
      },
    },
  },
  plugins: [],
};
