import React from "react";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Enneagram Hub",
  description: "Explore and understand the nine Enneagram personality types",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
