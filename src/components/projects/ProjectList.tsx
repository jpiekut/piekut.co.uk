import React from 'react';
import { ProjectCard } from './ProjectCard';
import { FadeIn } from '@/components/animations/FadeIn';
import { projects } from './project-data';

export const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <FadeIn key={project.title} delay={index * 200}>
          <ProjectCard {...project} />
        </FadeIn>
      ))}
    </div>
  );
};