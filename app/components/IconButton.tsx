import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

export function IconButton({ 
  icon: Icon, 
  variant = 'primary', 
  isLoading, 
  className = '', 
  ...props 
}: IconButtonProps) {
  const baseStyles = "p-2 rounded-md transition-colors disabled:opacity-50";
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full" />
      ) : (
        <Icon size={20} />
      )}
    </button>
  );
}