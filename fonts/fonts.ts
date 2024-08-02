import { Poppins as FontSans, Chakra_Petch, Archivo, Lexend_Giga } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

export const fontChakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-chakra",
});

export const fontArchivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-Archivo",
});

export const fontLexand = Lexend_Giga({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lexand",
});