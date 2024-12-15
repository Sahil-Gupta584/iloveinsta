import { useState } from 'react';
import { Download, ClipboardPaste, AlertCircle } from 'lucide-react';
import { IconButton } from './IconButton';
import { useDownload } from '../hooks/useDownload';


export function DownloadForm() {
    const { isLoading, handleDownload,downloadData,setDownloadData,setError,setIsLoading } = useDownload();
  
  const [url, setUrl] = useState('');
  const [error, setErr] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErr('');

    if (!url) {
      setErr('Please enter an Instagram URL');
      return;
    }

    if (!url.includes('instagram.com')) {
      setErr('Please enter a valid Instagram URL');
      return;
    }

    handleDownload(url,setIsLoading, setDownloadData, setError);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      setErr('');
    } catch (err) {
      console.log(err);
      setErr('Unable to access clipboard. Please paste manually.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg">
      <div className="relative flex gap-2">
        <div className="relative flex-1">
          <input
            type="url"
            className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ${error && 'border-red-500'}`}
            placeholder="Paste Instagram reel or story URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}

          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <IconButton
              type="button"
              icon={ClipboardPaste}
              variant="secondary"
              onClick={handlePaste}
              title="Paste from clipboard"
            />
          </div>
        </div>
        <IconButton
          type="submit"
          icon={Download}
          isLoading={isLoading}
          title="Download"
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
        />
      </div>
      {error && <div className="mt-2 text-red-500 flex items-center gap-1">
        <AlertCircle size={16} />
        <span>{error}</span>
      </div>}
    </form>
  );
}