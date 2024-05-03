import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Oxanium } from "next/font/google";

const oxaniumFont = Oxanium({ weight: '700',subsets: ["latin"], });

export const metadata: Metadata = {
  title: "Prometheus PH",
  description: "Prometheus Description Here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oxaniumFont.className} overflow-x-hidden  w-auto h-auto`}>
        {" "}
        {children}
        
      </body>
    </html>
  );
}
