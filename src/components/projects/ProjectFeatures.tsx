import React from 'react';

interface ProjectFeaturesProps {
  features: string[];
}

export const ProjectFeatures = ({ features }: ProjectFeaturesProps) => {
  return (
    <div className="bg-purple-900/20 border border-purple-500/20 rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-300">
            <span className="mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};