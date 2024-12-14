import React from 'react';
import { NavLinks } from './NavLinks';
import { ContactButton } from './ContactButton';
import { motion } from 'framer-motion';

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="md:hidden mt-4 pb-4 border-t border-purple-500/20 pt-4"
    >
      <div className="flex flex-col space-y-6" onClick={onClose}>
        <NavLinks />
        <ContactButton />
      </div>
    </motion.div>
  );
};