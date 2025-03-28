import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaRoad, FaIndustry, FaHome, FaTools, FaPencilRuler } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesList = () => {
  // Inside your services array, add link property to each service
  const services = [
    {
      icon: <FaBuilding className="text-4xl" />,
      title: "Commercial Construction",
      description: "State-of-the-art commercial buildings and office complexes",
      link: "/services/commercial-construction"  // Updated link path
    },
    {
      icon: <FaRoad className="text-4xl" />,
      title: "Infrastructure Development",
      description: "Roads, bridges, and critical infrastructure projects",
      link: "/services/infrastructure-development"
    },
    {
      icon: <FaIndustry className="text-4xl" />,
      title: "Industrial Construction",
      description: "Manufacturing facilities and industrial complexes",
      link: "/services/industrial-construction"
    },
    {
      icon: <FaHome className="text-4xl" />,
      title: "Residential Projects",
      description: "High-quality residential buildings and complexes",
      link: "/services/residential-projects"
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: "Renovation Services",
      description: "Modernization and renovation of existing structures",
      link: "/services/renovation-services"
    },
    {
      icon: <FaPencilRuler className="text-4xl" />,
      title: "Design & Planning",
      description: "Comprehensive construction planning and design services",
      link: "/services/design-and-planning"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="no-underline">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;