import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Spencer Larsen - Portfolio",
    template: "%s | Spencer Larsen",
  },
  description: "Engineering and Research Portfolio - Showcasing projects, publications, and technical expertise",
  keywords: ["engineering", "research", "portfolio", "projects", "software development"],
  authors: [{ name: "Spencer Larsen" }],
  creator: "Spencer Larsen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spencerlarsen.com",
    siteName: "Spencer Larsen Portfolio",
    title: "Spencer Larsen - Portfolio",
    description: "Engineering and Research Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spencer Larsen - Portfolio",
    description: "Engineering and Research Portfolio",
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
        className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
