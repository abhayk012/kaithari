import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaithari — Kerala Handloom Dhotis & Mundus",
  description:
    "Authentic Kerala handloom dhotis, kasavu mundus, and kaithari dress materials. Pure cotton, traditionally woven, shipped across India.",
  keywords: [
    "Kerala dhoti",
    "kasavu mundu",
    "handloom dhoti",
    "kaithari",
    "set mundu",
    "Onam dhoti",
    "wedding dhoti Kerala",
    "pure cotton dhoti",
  ],
  openGraph: {
    title: "Kaithari — Kerala Handloom Dhotis & Mundus",
    description:
      "Authentic Kerala handloom dhotis, kasavu mundus, and kaithari dress materials.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
