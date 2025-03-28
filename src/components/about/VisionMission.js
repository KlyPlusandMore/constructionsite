import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaBullseye, FaHandshake } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-primary text-4xl mb-6">
              <FaLightbulb className="mx-auto" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">To be the leading construction company in Gabon, setting new standards in quality and innovation.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="text-primary text-4xl mb-6">
              <FaBullseye className="mx-auto" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">To deliver exceptional construction projects that exceed client expectations while contributing to Gabon's development.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <div className="text-primary text-4xl mb-6">
              <FaHandshake className="mx-auto" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600">Excellence, integrity, and innovation in every project we undertake.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;