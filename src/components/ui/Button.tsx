import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'px-6 py-2 rounded-full transition-all flex items-center justify-center',
        variant === 'primary' && 'bg-gradient-to-r from-purple-600 to-teal-400 text-white hover:opacity-90',
        variant === 'secondary' && 'border border-purple-500 text-white hover:bg-purple-500/10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;