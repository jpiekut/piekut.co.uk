import React from 'react';
import { motion } from 'framer-motion';

export const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-teal-400 rounded-lg blur-xl opacity-50" />
        <div className="relative bg-black border border-purple-500/20 rounded-lg p-8 md:p-12">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-teal-400 text-center"
            animate={{
              backgroundPosition: ['0%', '100%'],
              opacity: [0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            Coming Soon
          </motion.h2>
          
          <motion.div
            className="mt-4 flex justify-center space-x-2"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-teal-400"
                style={{
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};