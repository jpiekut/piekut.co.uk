import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useNavigationContext } from '@/contexts/NavigationContext';
import { scrollToSection } from '@/utils/scroll';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className 
}: ServiceCardProps) => {
  const { currentPage, onNavigate } = useNavigationContext();

  const handleClick = () => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => scrollToSection('services'), 100);
    } else {
      scrollToSection('services');
    }
  };

  return (
    <div 
      className={cn(
        "p-6 rounded-xl bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all group cursor-pointer hover:scale-[1.02] duration-300",
        className
      )}
      onClick={handleClick}
    >
      <div className="mb-4 relative">
        <Icon className="w-12 h-12 text-purple-500 group-hover:text-teal-400 transition-colors transform group-hover:scale-110 duration-300" />
        <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </div>
  );
};