/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      plus: ["Plus Jakarta Sans"],
    },
    extend: {
      colors: {
        orange: "#FF6F48",
        pink: "#F02AA6",
        "dark-blue": "#13183F",
        "deep-pink": "#F74780",
        "light-gray": "#F0F1FF",
        "light-blue": "#4851FF",
        gray: "#83869A",
      },
    },
  },
  plugins: [],
};
