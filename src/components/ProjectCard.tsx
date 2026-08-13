import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer h-72 bg-gray-900">
      <img 
        src={project.image} 
        alt={project.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-jci-dark via-jci-dark/40 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 transform transition-transform duration-300">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-jci-blue/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-2">
            {project.category}
          </span>
          <span className="inline-block px-3 py-1 bg-jci-gold/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-2 ml-2">
            {project.status}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-jci-gold transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
