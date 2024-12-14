import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useClickContext } from '@/contexts/ClickContext';

export const ClickCounter = () => {
  const { clicks } = useClickContext();
  const [showPulse, setShowPulse] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setShowPulse(true);
    const timeout = setTimeout(() => setShowPulse(false), 200);
    return () => clearTimeout(timeout);
  }, [clicks]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 pointer-events-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-teal-400 rounded-lg blur group-hover:blur-xl transition-all duration-300" />
        <div className={`
          relative bg-black border border-purple-500/20 px-6 py-3 rounded-lg
          flex items-center space-x-3
          ${showPulse ? 'scale-95' : 'scale-100'} transition-transform duration-200
        `}>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
            {clicks}
          </span>
          <span className="text-gray-400">clicks</span>
        </div>
      </div>
    </motion.div>
  );
};