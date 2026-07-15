import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
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
  title: "Mohammed Aslam S | AI Engineer",
  description:
    "Mohammed Aslam S is a software engineer specializing in Rust, Go, TypeScript, blockchain, AI/ML, and full-stack product development. View portfolio, projects, blog, and CV.",
  metadataBase: new URL("https://aslam.sh"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Mohammed Aslam S",
    "Software Engineer",
    "Blockchain Developer",
    "AI Engineer",
    "Rust",
    "Go",
    "TypeScript",
    "Next.js",
    "Solidity",
    "Full Stack Developer",
  ],
  authors: [{ name: "Mohammed Aslam S", url: "https://aslam.sh" }],
  creator: "Mohammed Aslam S",
  openGraph: {
    title: "Mohammed Aslam S | AI Engineer",
    description:
      "Portfolio of Mohammed Aslam S — software engineer building scalable backends, AI automation, and blockchain products.",
    url: "https://aslam.sh",
    siteName: "Mohammed Aslam S",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Aslam S - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Aslam S | AI Engineer",
    description:
      "Portfolio of Mohammed Aslam S — software engineer building scalable backends, AI automation, and blockchain products.",
    images: ["/preview.png"],
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
  verification: {
    google: "", // Add Google Search Console verification code here if available
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
