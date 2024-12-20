import { Metadata, Viewport } from "next";
import "./globals.css";
import { DownloadProvider } from "./context/downloadContext";
import { ThemeProvider } from "./context/themeContext";


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
          </DownloadProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Free Instagram Downloader - Stories, Reels, Photos, & Profile Pictures", // Optimized for keywords and click-through
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

  openGraph: {
    title: "Free Instagram Downloader - Stories, Reels, Photos, & Profile Pictures",
    description:
      "Easily download Instagram stories, reels, photos, and profile pictures in HD. The perfect tool for saving your favorite Instagram content securely.",
    type: "website",
    url: "https://iloveinsta.com",
    images: [
      {
        url: "https://iloveinsta.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Instagram Downloader - Save Stories, Reels, & More",
      },
    ],
  },
  icons: {
    icon: [
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-apple.png", sizes: "180x180" },
    ],
  },

  alternates: {
    canonical: "https://iloveinsta.com",
  },
  other: {
    "robots": "index, follow", // Instructs crawlers to index and follow links
    "author": "iloveinsta.com", // Adds site author information
  },

};
export const viewport: Viewport = {
  themeColor: "#ec4899",
}