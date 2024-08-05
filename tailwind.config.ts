import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./svg/**/*.{js,ts,jsx,tsx,mdx}",
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
      coreLightColor: "#F0C534",
      pentagonColor: "#5D41DF",
      pentagonHoverColor: "#5740bd",
      multiversColor: "#0BBCA3",
      white: "#FFFFFF",
      greyColor: "#232323",
      borderColor: "#494747",
      purpleColor: "#5E40E7",
      black: "#000000",
      yellowLight: "#EFC235",
      darkGrayColor: "#1A1A1A",
      lightGrayColor: "#969EB2",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius(utils) {
        return {
          "4xl": "2.5rem",
        };
      },
      maxWidth: {
        "410": "410px",
        "430": "430px",
      },
      spacing: {
        "273": "273px",
        "118": "118px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        chakra: ["var(--font-chakra)", "sans-serif"],
        archivo: ["var(--font-Archivo)", "sans-serif"],
        lexand: ["var(--font-lexand)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
