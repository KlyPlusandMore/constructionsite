import React from 'react';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectsGrid from '../components/projects/ProjectsGrid';

const Projects = () => {
  return (
    <main className="pt-20">
      <ProjectsHero />
      <ProjectsGrid />
    </main>
  );
};

export default Projects;