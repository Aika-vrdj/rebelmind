import React from "react";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Rebel Mind",
  description: "Explore and understand the nine Enneagram personality types",
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "16x16" },
    { rel: "icon", url: "/favicon.ico", sizes: "32x32" },
    { rel: "icon", url: "/favicon.ico", sizes: "48x48" },
    { rel: "icon", url: "/favicon.png", type: "image/png", sizes: "64x64" },
    // Optional for Apple devices
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    // Optional for Android devices
    { rel: "icon", href: "/android-chrome-192x192.png", sizes: "192x192" },
  ],
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
