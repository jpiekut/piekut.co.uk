import React from 'react';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '@/utils/scroll';
import { CyberpunkBackground } from './animations/CyberpunkBackground';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-black">
        <CyberpunkBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Unlock the Future of{' '}
            <span className="bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
              Automation with AI
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business processes with cutting-edge AI solutions from Piekut.
            We bring tomorrow's technology to your business today.
          </p>
          <div>
            <button 
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-400 rounded-full text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center group"
            >
              Discover Our Solutions
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Animated gradient orb */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-teal-400/30 rounded-full blur-3xl animate-pulse" />
    </div>
  );
};

export default Hero;