import React from 'react';
import { Heart, Instagram } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'lg';
}

export function Logo({ size = 'sm' }: LogoProps) {
  const sizes = {
    sm: {
      container: 'w-8 h-8',
      icon: 'w-4 h-4'
    },
    lg: {
      container: 'w-12 h-12',
      icon: 'w-6 h-6'
    }
  };

  return (
    <div className="relative">
      <Heart className={`text-pink-600 ${sizes[size].container}`} fill="#ec4899" />
      <Instagram className={`text-pink-600 ${sizes[size].icon} absolute bottom-0 right-0`} />
    </div>
  );
}