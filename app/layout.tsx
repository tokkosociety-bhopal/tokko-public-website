import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

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
    default: "Tokko Society",
    template: "%s | Tokko Society",
  },
  description:
    "Tokko Society is a smart digital platform for visitor management, maintenance tracking, billing, and society administration.",
  keywords: [
    "Society Management System",
    "Visitor Management App",
    "Apartment Management Software",
    "Housing Society App India",
    "Tokko Society",
  ],
  openGraph: {
    title: "Tokko Society",
    description:
      "Smart Digital Society Management Platform for modern housing communities.",
    url: "https://www.tokkosociety.com",
    siteName: "Tokko Society",
    locale: "en_IN",
    type: "website",
  },
  metadataBase: new URL("https://www.tokkosociety.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}