'use client';
import { Download, ExternalLink } from 'lucide-react';


export function   DownloadResult({downloadData}: {downloadData: {url: string, height: number, width: number,}}) {

  console.log(downloadData)
  const handleDownload = async () => {
    if (!downloadData) return; // Ensure downloadData exists
    try {
      const response = await fetch(downloadData.url);
      const blob = await response.blob();
      const objectUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = 'iloveinsta.mp4';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.log(error);
      
      throw new Error('Download failed');
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      
        <div className="relative mb-4 rounded-lg overflow-hidden">
          <video src={downloadData.url} className="w-full object-cover" controls={true} height={downloadData.height}></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      
      <div className="flex gap-3">
        <button
          onClick={handleDownload}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
        >
          <Download className="w-5 h-5" />
          <span>Download</span>
        </button>
        
        <a
          href={downloadData?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 border border-gray-200 rounded-lg hover:  transition-colors"
        >
          <ExternalLink className="w-5 h-5 text-gray-600" />
        </a>
      </div>
    </div>
  );
}