import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import Navigation from "@/components/navigation/Navigation";
import "./globals.scss";
import Footer from "@/components/footer/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photosnap Website challenge on Frontend Mentor",
  description: "Frontend Mentor challenges help you improve your coding skills by building realistic projects. Join 1,000,000+ developers building projects, reviewing code, and helping each other get better.",
  openGraph: {
    title: "Photosnap Website challenge on Frontend Mentor",
    description: "Frontend Mentor challenges help you improve your coding skills by building realistic projects. Join 1,000,000+ developers building projects, reviewing code, and helping each other get better.",
    url: "https://photosnap-website.vercel.app/",
    siteName: "Photosnap",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Photosnap Website",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${geistMono.variable}`}
    >
      <body>
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        <Navigation />
        <main
          id="main-content"
          className="grid-container"
          tabIndex={-1}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
