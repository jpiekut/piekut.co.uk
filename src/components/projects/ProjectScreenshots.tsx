import React from 'react';
import { motion } from 'framer-motion';

interface ProjectScreenshotsProps {
  screenshots: string[];
  title: string;
}

export const ProjectScreenshots = ({ screenshots, title }: ProjectScreenshotsProps) => {
  if (!screenshots.length) return null;
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-4">Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg bg-purple-900/20 border border-purple-500/20"
          >
            <div className="relative pb-[200%]">
              <img
                src={screenshot}
                alt={`${title} screenshot ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};