'use client';
import { useState } from 'react';
import { handleDownload } from '../utils/download';
export interface DownloadData {
  mediaUrl: string;
  thumbnail?: string;
  type: 'reel' | 'story' | 'photo' | 'profile';
}
export interface DownloadResponse {
  success: boolean;
  data?: DownloadData;
  error?: string;
}

export type TUseDownload={
  isLoading:boolean;
  downloadData:DownloadData | null;
  error:string | null
  handleDownload:(url:string,setIsLoading: (boolean:boolean)=>void, setDownloadData:(data:DownloadData|null)=>void, setError:(err:string|null)=>void)=>void;
  setIsLoading: (isLoading: boolean) => void;
  setDownloadData: (data: DownloadData | null) => void;
  setError: (error: string | null) => void;
}

export function useDownload():TUseDownload {
// export function useDownload() {
  const [isLoading, setIsLoading] = useState(false);
  const [downloadData, setDownloadData] = useState<DownloadData | null>(null);
  const [error, setError] = useState<string | null>(null);

 

  return {
    isLoading,
    downloadData,
    error,
    handleDownload,
    setIsLoading,
    setDownloadData,
    setError,
  };
}