import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaHandshake } from 'react-icons/fa';

const WhyChooseUsSection = () => {
  return (
    <section className="relative py-24 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 mb-16"
        >
          Why Choose Kratos Construction
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaTrophy />,
              title: "Excellence",
              description: "Award-winning construction services with unmatched quality"
            },
            {
              icon: <FaUsers />,
              title: "Expert Team",
              description: "Highly skilled professionals with years of industry experience"
            },
            {
              icon: <FaHandshake />,
              title: "Client Focus",
              description: "Dedicated to exceeding client expectations on every project"
            }
          ].map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-5xl text-primary mb-6 flex justify-center">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;