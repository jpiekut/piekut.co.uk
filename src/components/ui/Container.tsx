import React from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn('container mx-auto px-6', className)}>
      {children}
    </div>
  );
};

export default Container;