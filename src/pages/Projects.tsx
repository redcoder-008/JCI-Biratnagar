import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <div className="bg-white pb-20 min-h-screen">
      {/* Page Header */}
      <div className="bg-jci-blue py-16 text-center text-white">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Explore the initiatives we undertake to develop our community and youth.</p>
        </div>
      </div>

      <div className="section-container mt-16">
        <SectionHeading title="Featured Projects" centered />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
