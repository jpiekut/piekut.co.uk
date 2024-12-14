import React from 'react';
import Container from '@/components/ui/Container';
import { ProjectList } from '@/components/projects/ProjectList';
import { FadeIn } from '@/components/animations/FadeIn';

const Projects = () => {
  return (
    <div className="min-h-screen bg-black pt-24">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Personal{' '}
              <span className="bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my personal projects and contributions to the tech community.
            </p>
          </div>
        </FadeIn>
        
        <ProjectList />
      </Container>
    </div>
  );
};

export default Projects;