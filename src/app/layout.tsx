import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Mohammed Aslam S - Portfolio",
  description: "Software Engineer | Blockchain & AI Specialist",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.yourwebsite.com",
    title: "Mohammed Aslam S - Software Engineer | Blockchain & AI Specialist",
    description:
      "Innovative Software Engineer specializing in Blockchain, AI, and Full-Stack Development. Building cutting-edge solutions with React, Python, and Web3 technologies.",
    siteName: "Mohammed Aslam S Portfolio",
    images: [
      {
        url: "https://i.ibb.co/m5zfkT1Q/preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammed Aslam S - Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Aslam S - Software Engineer | Blockchain & AI Specialist",
    description:
      "Innovative Software Engineer specializing in Blockchain, AI, and Full-Stack Development. Building cutting-edge solutions with React, Python, and Web3 technologies.",
    images: ["https://i.ibb.co/m5zfkT1Q/preview-image.jpg"],
    creator: "@yourtwitterhandle", // Add your Twitter handle here
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
