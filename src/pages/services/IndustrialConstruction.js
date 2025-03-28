import React from 'react';
import { FaIndustry, FaCheck, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import industrialHero from '../../assets/images/indus.jpg';
import factoryImage from '../../assets/images/images (10).jpeg';

const IndustrialConstruction = () => {
  const services = [
    {
      title: "Manufacturing Plants",
      description: "State-of-the-art facilities for efficient production processes"
    },
    {
      title: "Warehouses & Distribution",
      description: "Strategic storage and logistics facilities"
    },
    {
      title: "Processing Facilities",
      description: "Advanced industrial processing and production centers"
    },
    {
      title: "Industrial Parks",
      description: "Integrated industrial complexes with modern infrastructure"
    },
    {
      title: "Factory Installations",
      description: "Specialized manufacturing and assembly facilities"
    },
    {
      title: "Storage Complexes",
      description: "Secure and efficient industrial storage solutions"
    }
  ];

  const benefits = [
    "ISO Certified Construction Standards",
    "Comprehensive Safety Compliance",
    "Environmental Sustainability Focus",
    "Advanced Quality Control Systems",
    "Industrial-Grade Materials",
    "Specialized Equipment Integration"
  ];

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${industrialHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industrial Construction Excellence
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Building the foundation of industrial progress with precision and innovation
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              Start Your Project
              <FaArrowRight className="ml-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Industrial Infrastructure Excellence</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Delivering cutting-edge industrial facilities that combine efficiency, 
              safety, and sustainability to power your business operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaIndustry className="text-4xl" />,
                title: "Advanced Design",
                description: "Industrial-grade architectural solutions"
              },
              {
                icon: <FaIndustry className="text-4xl" />,
                title: "Safety First",
                description: "Comprehensive safety protocols"
              },
              {
                icon: <FaIndustry className="text-4xl" />,
                title: "Efficiency Focus",
                description: "Optimized operational flow"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Industrial Services
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <FaCheck className="text-primary text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Why Choose Us</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheck className="text-primary mr-4" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={factoryImage} 
                alt="Industrial Facility" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Industrial Facility?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your industrial construction needs and create a facility that drives your success.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Schedule a Consultation
              <FaArrowRight className="ml-3" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default IndustrialConstruction;