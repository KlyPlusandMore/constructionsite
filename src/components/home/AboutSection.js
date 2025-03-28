import React from 'react';
import { motion } from 'framer-motion';
import residentialImage from '../../assets/images/Residential.jpg';

const AboutSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={residentialImage}
            alt="Construction Site"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Building Excellence Since 2003
          </h2>
          <div className="w-20 h-1 bg-primary"></div>
          <p className="text-gray-600 leading-relaxed">
            With two decades of experience in construction excellence, we've built a reputation
            for delivering exceptional quality and innovative solutions across Gabon.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">200+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">20+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">50+</h3>
              <p className="text-gray-600">Expert Team</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">100%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;