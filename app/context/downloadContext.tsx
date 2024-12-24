'use client';
import { createContext, useContext, useEffect, useState } from 'react';

export interface DownloadData {
  url: string;
}
export interface DownloadResponse {
  success: boolean;
  data?: DownloadData;
  error?: string;
}

export type TUseDownload = {
  isLoading: boolean;
  setIsLoading: (boolean: boolean) => void;
  downloadData: DownloadData | null;
  setDownloadData: (data:{url:string}) => void;
}


const DownloadContext = createContext<TUseDownload | null>(null);

export const useDownload = () => {
  const context = useContext(DownloadContext);
  if (!context) {
    throw new Error('useDownload must be used within a DownloadProvider');
  }
  return context;
};

export function DownloadProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [downloadData, setDownloadData] = useState<DownloadData | null>(null);

  useEffect(() => {
    console.log('changed from hook', isLoading);


  }, [isLoading])



  return (<DownloadContext.Provider value={{
    isLoading,
    downloadData,
    setIsLoading,
    setDownloadData,
  }}>
    {children}
  </DownloadContext.Provider>)
}