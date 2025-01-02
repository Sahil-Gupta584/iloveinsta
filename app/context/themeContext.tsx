'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  

  useEffect(() => {

    const prevTheme = localStorage.getItem('theme');
    if(prevTheme){

      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(prevTheme);
      setTheme(prev=>prev === 'light' ? 'dark' : 'light')
    }
  }, []);
  
  const toggleTheme = () => {
    setTheme(prev => {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(prev === 'light' ? 'dark' : 'light');
       localStorage.setItem('theme',prev === 'light' ? 'dark' : 'light');

      return prev === 'light' ? 'dark' : 'light'
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}