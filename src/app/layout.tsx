// src/app/layout.tsx
// THIS FILE IS NOW CORRECTED

import type { Metadata } from "next"; // Imported ONCE
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MougAI | Lucas Mougeot - AI Systems Architect",
  description: "The official portfolio and consulting hub for Lucas Mougeot, an AI Systems Architect & Applied LLM Engineer.",
  icons: {
    icon: '/logos/icon-dmode.png',
    shortcut: '/logos/favicon.ico',
    apple: '/logos/apple-icon-dmode.png',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}