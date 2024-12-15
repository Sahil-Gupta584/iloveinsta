import { Download, ExternalLink } from 'lucide-react';
import { downloadFile, generateFileName } from '../utils/download';
import { useDownload } from '../hooks/useDownload';


export function DownloadResult() {
  const { downloadData }  = useDownload();
  const handleDownload = async () => {
    if (!downloadData) return; // Ensure downloadData exists
    try {
      await downloadFile(downloadData.mediaUrl, generateFileName(downloadData.type));
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      {downloadData?.thumbnail && (
        <div className="relative mb-4 rounded-lg overflow-hidden">
          <img src={downloadData.thumbnail} alt="Content preview" className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}
      
      <div className="flex gap-3">
        <button
          onClick={handleDownload}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
        >
          <Download className="w-5 h-5" />
          <span>Download {downloadData?.type}</span>
        </button>
        
        <a
          href={downloadData?.mediaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ExternalLink className="w-5 h-5 text-gray-600" />
        </a>
      </div>
    </div>
  );
}