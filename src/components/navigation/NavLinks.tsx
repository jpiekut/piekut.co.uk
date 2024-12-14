import React from 'react';
import { scrollToSection } from '@/utils/scroll';
import { useNavigationContext } from '@/contexts/NavigationContext';

export const NavLinks = () => {
  const { currentPage, onNavigate } = useNavigationContext();

  const handleClick = (label: string) => {
    if (label === 'Services' && currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => scrollToSection('services'), 100);
    } else if (label === 'Services') {
      scrollToSection('services');
    } else if (label === 'Personal Projects') {
      onNavigate('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (label === 'Testimonials') {
      onNavigate('testimonials');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const links = [
    { label: 'Services', action: () => handleClick('Services') },
    { label: 'Personal Projects', action: () => handleClick('Personal Projects') },
    { label: 'Testimonials', action: () => handleClick('Testimonials') },
  ];

  return (
    <>
      {links.map(({ label, action }) => (
        <button
          key={label}
          onClick={action}
          className={`text-gray-300 hover:text-white transition-colors ${
            (currentPage === 'projects' && label === 'Personal Projects') ||
            (currentPage === 'testimonials' && label === 'Testimonials') ||
            (currentPage === 'home' && label === 'Services')
              ? 'text-white'
              : ''
          }`}
        >
          {label}
        </button>
      ))}
    </>
  );
};