import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import { Oxanium } from "next/font/google";

const oxaniumFont = Oxanium({ weight: '500',subsets: ["latin"], });

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
    <div lang="en">
      <GoogleAnalytics gaId="G-4KWX4DWN7D" />
      <div className={`${oxaniumFont.className} overflow-x-hidden  w-auto h-auto`}>
        {" "}
        {children}
        
      </div>
    </div>
  );
}
