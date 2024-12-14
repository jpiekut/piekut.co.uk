import React, { createContext, useContext, useState } from 'react';
import { scrollToTop } from '@/utils/scroll';

type Page = 'home' | 'projects' | 'project-details' | 'testimonials';

interface NavigationContextType {
  currentPage: Page;
  currentProject?: string;
  onNavigate: (page: Page, projectId?: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentProject, setCurrentProject] = useState<string>();

  const handleNavigate = (page: Page, projectId?: string) => {
    setCurrentPage(page);
    setCurrentProject(projectId);
    if (page === 'projects' || page === 'project-details' || page === 'testimonials') {
      scrollToTop();
    }
  };

  return (
    <NavigationContext.Provider 
      value={{ 
        currentPage, 
        currentProject, 
        onNavigate: handleNavigate 
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }
  return context;
};