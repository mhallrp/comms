import type { Config } from "tailwindcss";
import { Poppins } from "next/font/google";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      objectPosition: {
        left: "left",
      },
      textColor: {
        primary: "#313131",
        secondary: "#626262",
        primaryBlue: "#009FD1",
        baseGrey: "#494949",
        lightGrey: "#626262",
      },
      borderColor: {
        primaryBlue: "#009FD1",
      },
      backgroundColor:{
        primaryBlue: "#009FD1",
        secondaryBlue: "#CCECF6",
      },
      boxShadow: {
        mainShadow: "0px 0px 55px 0px rgba(0, 0, 0, 0.10)",
      },
      fontFamily:{
        poppins: ["Poppins"],
      }
    },
  },
  plugins: [],
};
export default config;
