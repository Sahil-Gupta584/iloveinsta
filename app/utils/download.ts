'use server';

import { DownloadData, DownloadResponse } from "../hooks/useDownload";
import s from "videos-downloader";

export const getFileExtension = async(type:'reel' | 'story' | 'photo' | 'profile'): string => {
  return type === 'photo' || type === 'profile' ? 'jpg' : 'mp4';
};

export const generateFileName =async (type: 'reel' | 'story' | 'photo' | 'profile'): string => {
  return `instagram-${type}-${Date.now()}.${getFileExtension(type)}`;
};

export const downloadFile = async (url: string, fileName: string): Promise<void> => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const objectUrl = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(objectUrl);
  } catch (error) {
    throw new Error('Download failed');
  }
};

export const handleDownload = async (url:string,setIsLoading: (boolean:boolean)=>void, setDownloadData:(data:DownloadData|null)=>void, setError:(err:string|null)=>void,) => {
  setIsLoading(true);
  setDownloadData(null);
  setError(null);
  
  try {
    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('url',url);
    
    const re = s.instagram(url)
    console.log('res',re);
    
    // Simulate successful response
    const response:DownloadResponse = {
      success: true,
      data: {
        mediaUrl: 'https://example.com/sample-video.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0',
        type: 'reel'
      }
    };

    if (response.success && response.data) {
      setDownloadData(response.data);
    } else {
      throw new Error(response.error || 'Download failed');
    }
  } catch (err) {
    setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    console.error('Download failed:', err);
  } finally {
    setIsLoading(false);
  }
};