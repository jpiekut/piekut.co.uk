import React from 'react';
import { useNavigationContext } from '@/contexts/NavigationContext';
import { scrollToSection } from '@/utils/scroll';

export const ContactButton = () => {
  const { currentPage, onNavigate } = useNavigationContext();

  const handleContactClick = () => {
    if (currentPage !== 'home') {
      onNavigate('home');
      // Add small delay to ensure navigation completes before scrolling
      setTimeout(() => scrollToSection('contact'), 100);
    } else {
      scrollToSection('contact');
    }
  };

  return (
    <button 
      onClick={handleContactClick}
      className="px-6 py-2 bg-gradient-to-r from-purple-600 to-teal-400 text-white rounded-full hover:opacity-90 transition-opacity"
    >
      Contact
    </button>
  );
};