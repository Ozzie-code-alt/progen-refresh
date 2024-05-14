import type { Metadata } from "next";

import "../globals.css"

export const metadata: Metadata = {
  title: "Prometheus PH - Blogs Page",
  description: "Blogs Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <div className="bg-black " >
        {children}
      </div>
    </div>
  );
}