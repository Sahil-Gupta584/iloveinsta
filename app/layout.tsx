import { Metadata, Viewport } from "next";
import "./globals.css";
import { DownloadProvider } from "./context/downloadContext";
import { ThemeProvider } from "./context/themeContext";
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={` antialiased dark:bg-gray-900 text-white bg-gray-50`} >
          <DownloadProvider>
            {children}
            <Analytics/>
          </DownloadProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Instagram Reels Downloader - Fast Download Reels & Videos",
  description:
    "Quickly download Instagram stories, reels, photos, and profile pictures for free. Enjoy a fast, secure, and user-friendly Instagram content downloader.",
  keywords: [
    "free instagram downloader",
    "download instagram stories",
    "instagram reels download",
    "instagram photo saver",
    "save instagram profile pictures",
    "secure instagram downloader",
    "instagram video download",
    "download instagram content HD",
  ],
  other: {
    "robots": "index, follow", 
    "author": "iloveinsta.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: "#ec4899",
}