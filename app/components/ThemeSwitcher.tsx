import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/themeContext';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors duration-200
        dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200
        bg-gray-100 hover:bg-gray-200 text-gray-800"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}