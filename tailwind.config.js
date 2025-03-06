/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Aldrich: ["Aldrich", "sans-serif"],
      },
      colors: {
        // ...colors,
        yuYangRan: "#576470", //育阳染
        tangLiHe: "#955A42", //棠梨褐
        juYi: "#D3A237", //鞠衣
        zhuCao: "#A64036", //朱草
        youTanRui: "#615EA8", //优昙瑞
        rouLan: "#106898", //柔蓝
        testOne: "#106898", //柔蓝
        cuiWei: "#4C8045", //翠微
        
        tianShuiBi: "#5AA4AE", //天水碧
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
