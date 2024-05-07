import type { Metadata } from "next";

import "../globals.css"

import { Oxanium } from "next/font/google";
import NavbarGroup from "@/components/Global/NavbarGroup";

const oxaniumFont = Oxanium({ weight: '700',subsets: ["latin"], });

export const metadata: Metadata = {
  title: "Prometheus PH - Recon Page",
  description: "Recon Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black overflow-x-hidden ${oxaniumFont.className}`} >
        <NavbarGroup/>
        {children}
      </body>
    </html>
  );
}