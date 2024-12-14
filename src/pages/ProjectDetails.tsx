import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { useNavigationContext } from '@/contexts/NavigationContext';
import { projects } from '@/components/projects/project-data';
import { FadeIn } from '@/components/animations/FadeIn';
import { ProjectTags } from '@/components/projects/ProjectTags';
import { SnowlandScene } from '@/components/projects/snowland/SnowlandScene';
import { ProjectFeatures } from '@/components/projects/ProjectFeatures';
import { ProjectScreenshots } from '@/components/projects/ProjectScreenshots';

const ProjectDetails = () => {
  const { currentProject, onNavigate } = useNavigationContext();
  const project = projects.find(p => p.id === currentProject);

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black pt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => onNavigate('projects')}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </button>

          <div className="grid grid-cols-1 gap-12">
            <div>
              <FadeIn>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-gray-400 text-lg mb-6">
                  {project.description}
                </p>

                <ProjectTags project={project} />
              </FadeIn>
            </div>

            {project.id === 'snowland' ? (
              <FadeIn delay={200}>
                <SnowlandScene />
              </FadeIn>
            ) : (
              <div className="space-y-8">
                <FadeIn delay={200}>
                  <ProjectFeatures features={project.features} />
                </FadeIn>

                {project.showScreenshots && (
                  <FadeIn delay={400}>
                    <ProjectScreenshots screenshots={project.screenshots} title={project.title} />
                  </FadeIn>
                )}
              </div>
            )}
          </div>

          {project.team && (
            <FadeIn delay={600}>
              <div className="text-center mt-16 text-gray-400">
                Made on Earth by team {project.team}
              </div>
            </FadeIn>
          )}
        </motion.div>
      </Container>
    </div>
  );
};

export default ProjectDetails;