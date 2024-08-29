import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
      "Very_dark_blue": "hsl(220, 13%, 13%)",
      "Dark_grayish_blue": "hsl(219, 9%, 45%)",
      "Grayish_blue": "hsl(220, 14%, 75%)",
      "Light_grayish_blue": "hsl(223, 64%, 98%)",
      "White": "hsl(0, 0%, 100%)",
      "Black": "hsl(0, 0%, 0%, 75%)",
    },
    backgroundColor:{
      "Orange": "hsl(26, 100%, 55%)"
     }
    },
  },
  plugins: [],
};
export default config;
