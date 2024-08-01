import { Archivo as FontMono } from "next/font/google";

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});


console.log(fontMono, "fontMono")