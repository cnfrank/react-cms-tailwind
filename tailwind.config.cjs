/*
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2023-01-25 22:50:48
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2023-01-25 23:48:10
 * @Description: file content
 * @FilePath: /react-cms-tailwind/tailwind.config.cjs
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#00040f",
        secondary:"#00f6ff",
        dimWhite:"rgba(255,255,255,0.7)",
        dimBlue:"rgba(9,151,124,0.1)",
      },
      fontFamily:{
        poppins:["poppins","sans-serif"],
      }
    },
    screens:{
      xs:"480px",
      ss:"620px",
      sm:"768px",
      md:"1060px",
      lg:"1200px",
      xl:"1700px",
  },
},
  plugins: [],
};
