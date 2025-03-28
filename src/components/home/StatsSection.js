import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { number: "150+", text: "Projects Completed" },
    { number: "20+", text: "Years Experience" },
    { number: "50+", text: "Professional Team" },
    { number: "100%", text: "Client Satisfaction" }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                {stat.number}
              </h3>
              <p className="text-gray-600 text-lg">
                {stat.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;