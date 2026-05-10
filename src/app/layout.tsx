import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import LoadingScreen from "./components/loading-screen";

/* ── Syne — display font for brand name, headings ───────── */
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/* ── Inter — body, captions, UI ─────────────────────────── */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ElectroMaster | Industrial Welding Solutions",
  description:
    "Premium welding consumables and industrial hardware engineered to AWS, ISO, and DIN standards. Precision supply. Expert support.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable} antialiased`}>
        <LoadingScreen>
          <NavBar />
          {children}
          <Footer />
        </LoadingScreen>
      </body>
    </html>
  );
}
