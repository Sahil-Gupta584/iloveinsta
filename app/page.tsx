'use client';
import { Features } from './components/Features';
import { DownloadForm } from './components/DownloadForm';
import { Instructions } from './components/Instructions';
import { DownloadResult } from './components/DownloadResult';
import { useDownload } from './context/downloadContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';

export default function Home() {
  const { isLoading, downloadData, } = useDownload();

  
  
  return (
    <div className="min-h-screen  ">
    <Navbar />
    <main className="container mx-auto px-4 pt-20 pb-12">
      <header className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Logo size="lg" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            iloveinsta
          </h1>
        </div>
        <p className=" max-w-md mx-auto">
        Download your favorite Instagram Reels in HD quality. Just paste the Reel URL and we'll handle the rest.        </p>
      </header>
      
      <div className="flex justify-center mb-12">
        <DownloadForm  />
      </div>

      {isLoading && <LoadingAnimation />}

      {downloadData && (
        <div className="max-w-xl mx-auto mb-12">
          <DownloadResult downloadData={downloadData} />
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


