import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export const TestimonialCard = ({ name, role, company, content, image }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-purple-900/20 border border-purple-500/20 rounded-xl p-6 relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Quote className="absolute top-6 right-6 text-purple-500/20 w-12 h-12" />
      <div className="flex items-center space-x-4 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/20"
        />
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-gray-400">{role}</p>
          <p className="text-purple-400">{company}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">{content}</p>
    </motion.div>
  );
};