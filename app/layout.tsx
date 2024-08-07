import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { fontArchivo, fontChakra, fontLexand, fontSans } from "@/fonts";
import React from "react";

export const metadata: Metadata = {
  title: "Home",
  description:
    "By joining Blockchain Superheroes, you're helping to shape Superheroes' stories and unlock their potential.",
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}assets/meta/metaImg.png`,
        width: 768,
        height: 432,
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontChakra.variable} ${fontArchivo.variable} ${fontLexand.variable}`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
