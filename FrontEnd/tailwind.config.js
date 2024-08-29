/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
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
        appBlack : "#212529",
        appBgGray : "#f6f6f6",
      },
      borderRadius : {
        appRadius : "30px",
      },
      textColor :{
        appblue : "#152536",
        appGray : "#757475",
      },
    },
  },
  plugins: [],
}

