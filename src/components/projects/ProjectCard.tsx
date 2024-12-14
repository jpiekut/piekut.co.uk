import React from 'react';
import { cn } from '@/utils/cn';
import { useNavigationContext } from '@/contexts/NavigationContext';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const ProjectCard = ({ id, title, description, image, tags }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const { onNavigate } = useNavigationContext();

  return (
    <div
      className="relative group rounded-xl overflow-hidden bg-purple-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-[1.02] duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onNavigate('project-details', id)}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className={cn(
            'w-full h-full object-cover transition-transform duration-700',
            isHovered && 'scale-110'
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2 md:line-clamp-none group-hover:text-white transition-colors">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-purple-500/20 rounded-full text-purple-300 backdrop-blur-sm group-hover:bg-purple-500/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};