import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "Prometheus PH - Blog Page",

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <head>
      <meta name="author" content="Prometheus" />
      </head>
      <div className="bg-black ">{children}</div>
    </div>
  );
}
