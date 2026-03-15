import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aximor Trading | Enterprise ERP, HRM & eCommerce Solutions",
    template: "%s | Aximor Trading",
  },
  description: "Aximor Trading specializes in high-performance eCommerce development, custom ERP systems, and scalable HRM software for modern businesses.",
  keywords: ["ERP Software", "HRM System", "eCommerce Development", "Next.js Developer", "Business Automation"],
  authors: [{ name: "Aximor Trading Team" }],
  creator: "Aximor Trading",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aximortrading.com", // Replace with your actual domain
    siteName: "Aximor Trading",
    images: [
      {
        url: "/og-image.jpg", // Add a preview image in your public folder
        width: 1200,
        height: 630,
        alt: "Aximor Trading Software Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a192f] text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}