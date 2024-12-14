import React from 'react';
import { ServiceCard } from './ServiceCard';
import { services } from './service-data';
import { FadeIn } from '@/components/animations/FadeIn';

const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <FadeIn key={service.title} delay={index * 200}>
          <ServiceCard {...service} />
        </FadeIn>
      ))}
    </div>
  );
};

export default ServiceList;