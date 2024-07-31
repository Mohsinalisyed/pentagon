import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: ["Inter", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"],
    },
    colors: {
      coreColor: "#FF9211",
      coreHoverColor: "#FF8A00",
      pentagonColor: "#5D41DF",
      pentagonHoverColor: "#5740bd",
      multiversColor: "#0BBCA3",
      white: '#fff',
      greyColor: "#232323",
      borderColor: '#494747',
      yellowLight: "#F6D92B"

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "273": "273px",
        "118": "118px",
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'], 
        chakra: ['var(--font-chakra)', 'sans-serif'],
        archivo: ['var(--font-Archivo)', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;
