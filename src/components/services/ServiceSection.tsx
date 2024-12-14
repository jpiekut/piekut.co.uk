import React from 'react';
import Container from '../ui/Container';
import ServiceList from './ServiceList';
import { FadeIn } from '@/components/animations/FadeIn';

const ServiceSection = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Leverage our expertise in automation to transform your business operations
              and stay ahead of the competition.
            </p>
          </div>
        </FadeIn>
        <ServiceList />
      </Container>
    </section>
  );
};

export default ServiceSection;