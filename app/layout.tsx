import type { Metadata } from "next";
import localFont from "next/font/local";
import { Josefin_Sans, Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const josefin = Josefin_Sans({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({ subsets: ["latin"], variable: "--font-serif" });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Akashic Shades",
  description:
    "We provide creative services like UI/UX Design, Graphic Design and Video Editing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: "#000" }}>
      <head>
        {/* 🧩 Force dark color scheme for all browsers */}
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={twMerge(
          josefin.variable,
          inter.variable,
          `${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-black text-white`
        )}
      >
        {children}
      </body>
    </html>
  );
}
