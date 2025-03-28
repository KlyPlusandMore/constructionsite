import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaIndustry } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaHome size={40} />,
      title: "Residential Construction",
      description: "Luxury homes and residential complexes built to perfection in Gabon"
    },
    {
      icon: <FaBuilding size={40} />,
      title: "Commercial Development",
      description: "Modern commercial spaces designed for success"
    },
    {
      icon: <FaIndustry size={40} />,
      title: "Industrial Projects",
      description: "Large-scale industrial facilities and infrastructure"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 mb-16"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;