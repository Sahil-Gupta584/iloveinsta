import { Features } from './components/Features';
import { DownloadForm } from './components/DownloadForm';
import { Instructions } from './components/Instructions';
import { DownloadResult } from './components/DownloadResult';
import { useDownload } from './hooks/useDownload';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Metadata } from 'next';

export default function Home() {
  const { isLoading, downloadData } = useDownload();

  return (
    <div className="min-h-screen bg-gray-50">
    <Navbar />
    <main className="container mx-auto px-4 pt-20 pb-12">
      <header className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Logo size="lg" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            iloveinsta
          </h1>
        </div>
        <p className="text-gray-600 max-w-md mx-auto">
          Download your favorite Instagram content safely and easily. Just paste the URL and we'll handle the rest.
        </p>
      </header>
      
      <div className="flex justify-center mb-12">
        <DownloadForm  />
      </div>

      {isLoading && <LoadingAnimation />}

      {downloadData && (
        <div className="max-w-xl mx-auto mb-12">
          <DownloadResult {...downloadData} />
        </div>
      )}

      <Features />
      <Instructions />
    </main>
    <Footer />
  </div>
  );
}

export function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-pink-200 rounded-full animate-ping"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-12 h-12 border-t-4 border-pink-600 rounded-full animate-spin"></div>
        </div>
      </div>
      <p className="mt-4 text-gray-600 animate-pulse">Fetching your content...</p>
    </div>
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
  themeColor: "#ec4899",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-apple.png", sizes: "180x180" },
    ],
  },
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: "https://iloveinsta.com",
  },
  other: {
    "robots":"index, follow" , // Instructs crawlers to index and follow links
    "author":"iloveinsta.com" , // Adds site author information
  },
  
};
