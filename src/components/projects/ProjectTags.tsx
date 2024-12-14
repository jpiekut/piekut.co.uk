import React from 'react';
import { Github } from 'lucide-react';
import type { Project } from './project-data';

interface ProjectTagsProps {
  project: Project;
}

export const ProjectTags = ({ project }: ProjectTagsProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300"
        >
          {tag}
        </span>
      ))}
      
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 hover:bg-purple-500/30 transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
      )}
    </div>
  );
};