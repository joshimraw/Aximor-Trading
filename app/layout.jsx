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

// Separate viewport export for Next.js 14+
export const viewport = {
  themeColor: "#0a192f",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: {
    default: "Aximor Trading | Enterprise ERP, HRM & eCommerce Solutions",
    template: "%s | Aximor Trading",
  },
  description: "Aximor Trading specializes in high-performance eCommerce development, custom ERP systems, and scalable HRM software.",
  keywords: ["ERP Software", "HRM System", "eCommerce Development", "Next.js Developer", "Business Automation"],
  authors: [{ name: "Aximor Trading Team" }],
  creator: "Aximor Trading",
  metadataBase: new URL("https://aximortrading.com"), 
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aximortrading.com",
    siteName: "Aximor Trading",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aximor Trading Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aximor Trading | Software Solutions",
    description: "Enterprise ERP, HRM & eCommerce Solutions",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a192f] text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}