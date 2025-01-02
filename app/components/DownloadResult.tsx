'use client';
import { Download, ExternalLink } from 'lucide-react';


export function DownloadResult({ downloadData }: { downloadData: { urls: string[] } }) {

  console.log(downloadData)


  const handleDownload = async (url:string) => {
    try {
      const response = await fetch('/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
      });

      if (!response.ok) {
        throw new Error('Download failed');
      }

      // Trigger the file download
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'downloaded-file'; // You can dynamically name the file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };


  return <>
    {downloadData.urls.map((url, i) =>
        <>
          <div key={i} className="bg-white w-fit dark:bg-gray-800 p-6 rounded-xl shadow-lg">

            <video src={url} className="rounded-md mx-auto object-cover h-[400px] w-[300px]" controls={true}></video>

            <div className="flex gap-3 mt-4">
              <button
                onClick={()=>handleDownload(url)}
                className="grow flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download</span>
              </button>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 border border-gray-200 rounded-lg hover:  transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-gray-600 dark:text-white" />
              </a>
            </div>
          </div>
        </>
      )}
      </>
}