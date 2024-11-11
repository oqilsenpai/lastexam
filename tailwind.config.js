/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#065056",
        secondary: "#6F6F6F",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),  // Tailwind Forms plugin
   
  ],
};
