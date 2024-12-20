import React from 'react';
import { Logo } from './Logo';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 transition-colors duration-200
       dark:bg-gray-900 dark:border-gray-800 
       border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Logo size="sm" />
            <span className="text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              iloveinsta
            </span>
          </div>
          
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}