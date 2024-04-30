import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ox: ['Oxanium', 'Arial', 'sans-serif'],
        moonlander: ['MBF Moonlander', 'Arial', 'sans-serif'],
        // Add more font families as needed
      },

      colors: {
        customOrange: '#67574C',
        customGray: '#232323',
        customGrayLogo: '#8E8E8E',
        prOrange: '#96895F'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
