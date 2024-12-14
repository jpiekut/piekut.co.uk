import React from 'react';
import Container from '@/components/ui/Container';
import { ComingSoon } from '@/components/animations/ComingSoon';
import { FadeIn } from '@/components/animations/FadeIn';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-black pt-24">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Client{' '}
              <span className="bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience working with us.
            </p>
          </div>
        </FadeIn>
        
        <ComingSoon />
      </Container>
    </div>
  );
};

export default Testimonials;