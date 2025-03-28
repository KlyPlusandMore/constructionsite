import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    {
      name: "Ministry of Infrastructure",
      logo: "https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg",
      type: "Government",
      description: "Official partner for major infrastructure projects"
    },
    {
      name: "Port Authority Gabon",
      logo: "https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg",
      type: "Maritime",
      description: "Collaboration on port development projects"
    },
    {
      name: "Gabon Energy Corporation",
      logo: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
      type: "Energy",
      description: "Partner in power infrastructure development"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Trusted Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collaborating with leading organizations to build a stronger Gabon through innovative construction solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="h-40 mb-6 overflow-hidden rounded-lg">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <span className="text-primary font-medium">{partner.type}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;