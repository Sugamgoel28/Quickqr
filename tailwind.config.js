/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       titilliumWeb: ["Titillium Web"],
      },
      Color: {
        'subtle': '#F7F6F1',  
      },
      boxShadow: {
        'md': '0px 4px 9px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}