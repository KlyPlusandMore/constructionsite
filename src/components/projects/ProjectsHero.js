import React from 'react';
import { motion } from 'framer-motion';

const ProjectsHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60" />
        <img
          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
          alt="Construction Projects"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Projects</h1>
          <p className="text-xl text-gray-200">Showcasing Excellence in Construction</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHero;