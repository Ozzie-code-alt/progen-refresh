import type { Metadata } from "next";

import "../globals.css"

export const metadata: Metadata = {
  title: "Prometheus PH - Blogs Page",
  description: "OurWorks Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black " >
        {children}
      </body>
    </html>
  );
}