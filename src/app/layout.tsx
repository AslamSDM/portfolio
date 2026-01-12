import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { MentiqProvider } from "@/components/mentiq-provider";
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
  metadataBase: new URL("https://aslam.sh"),
  openGraph: {
    title: "Mohammed Aslam S - Portfolio",
    description: "Software Engineer | Blockchain & AI Specialist",
    url: "https://aslam.sh",
    siteName: "Mohammed Aslam S",
    images: [
      {
        url: "/preview.jpeg",
        width: 1200,
        height: 630,
        alt: "Mohammed Aslam S - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Aslam S - Portfolio",
    description: "Software Engineer | Blockchain & AI Specialist",
    images: ["/preview.jpeg"],
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
          <MentiqProvider>{children}</MentiqProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
