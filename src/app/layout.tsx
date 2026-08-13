import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import Navbar from "@/lib/components/Navbar";
import Footer from "@/lib/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Higher Learning",
  description: "Higher Learning NYC",
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="notranslate" translate="no">
      <body
        className={`${dmSans.variable} ${playfair.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content" className="pt-[72px]">
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
