import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-2">20+</h3>
            <p className="text-lg">Years Experience</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-white"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-2">200+</h3>
            <p className="text-lg">Projects Completed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-white"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-2">50+</h3>
            <p className="text-lg">Team Members</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-white"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-2">100%</h3>
            <p className="text-lg">Client Satisfaction</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;