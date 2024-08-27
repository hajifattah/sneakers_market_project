/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        Inter : ["Inter", "sans-serif"]
      },
      fontSize :{
        "3.5xl" : ["32px","38.7px"],
      },
      colors :{
        appBlack : "#212529"
      },
      borderRadius : {
        appRadius : "30px",
      },
    },
  },
  plugins: [],
}

