/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Inter: ["Inter"],
    },
    colors: {
      primary: "rgb(32, 107, 196)",
      "title-color": "rgb(0, 42, 84)",
      "title-gray": "rgb(246, 246, 246)",
      "title-white": "rgb(255, 255, 255)",
    },
  },

  plugins: [],
};
