import React from 'react';
import { Bot } from 'lucide-react';
import { useNavigationContext } from '@/contexts/NavigationContext';
import { scrollToTop } from '@/utils/scroll';

export const Logo = () => {
  const { onNavigate } = useNavigationContext();

  const handleLogoClick = () => {
    onNavigate('home');
    scrollToTop();
  };

  return (
    <div 
      className="flex items-center space-x-2 cursor-pointer"
      onClick={handleLogoClick}
    >
      <Bot className="h-8 w-8 text-purple-500" />
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
        Piekut
      </span>
    </div>
  );
};