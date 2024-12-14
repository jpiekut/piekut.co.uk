import React, { createContext, useContext, useState, useEffect } from 'react';

interface ClickContextType {
  clicks: number;
  incrementClicks: () => void;
}

const ClickContext = createContext<ClickContextType | undefined>(undefined);

export const ClickProvider = ({ children }: { children: React.ReactNode }) => {
  const [clicks, setClicks] = useState(0);

  const incrementClicks = () => {
    setClicks(prev => prev + 1);
  };

  useEffect(() => {
    const handleClick = () => incrementClicks();
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <ClickContext.Provider value={{ clicks, incrementClicks }}>
      {children}
    </ClickContext.Provider>
  );
};

export const useClickContext = () => {
  const context = useContext(ClickContext);
  if (!context) {
    throw new Error('useClickContext must be used within a ClickProvider');
  }
  return context;
};