import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <img
          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
          alt="Construction Site"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">Building Dreams, Creating Value</h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Since 2003, KRATOS CONSTRUCTION has been transforming Gabon's landscape through innovative construction solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;