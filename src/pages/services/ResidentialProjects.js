import React from 'react';
import { FaHome, FaCheck, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import residentialHero from '../../assets/images/construction.jpg';
import luxuryHome from '../../assets/images/Residential.jpg';

const ResidentialProjects = () => {
  const services = [
    {
      title: "Single-Family Homes",
      description: "Custom-built homes tailored to your family's needs and lifestyle"
    },
    {
      title: "Multi-Family Complexes",
      description: "Modern apartment buildings with premium amenities"
    },
    {
      title: "Luxury Apartments",
      description: "High-end residential spaces with exclusive features"
    },
    {
      title: "Gated Communities",
      description: "Secure and prestigious residential developments"
    },
    {
      title: "Custom Home Building",
      description: "Bespoke homes designed to your exact specifications"
    },
    {
      title: "Residential Developments",
      description: "Large-scale housing projects with comprehensive planning"
    }
  ];

  const benefits = [
    "Personalized design consultations",
    "Energy-efficient construction methods",
    "Premium quality materials and finishes",
    "Smart home technology integration",
    "Comprehensive warranty coverage",
    "Expert project management and support"
  ];

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${residentialHero})` }}
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
              Luxury Residential Projects
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Creating exceptional living spaces that reflect your lifestyle
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              Start Your Dream Home
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
            <h2 className="text-4xl font-bold mb-6">Crafting Your Perfect Home</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              From concept to completion, we create distinctive residential spaces 
              that combine luxury, comfort, and innovative design to exceed your expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHome className="text-4xl" />,
                title: "Modern Design",
                description: "Contemporary architectural solutions"
              },
              {
                icon: <FaHome className="text-4xl" />,
                title: "Smart Living",
                description: "Integrated home automation"
              },
              {
                icon: <FaHome className="text-4xl" />,
                title: "Premium Quality",
                description: "Superior materials and finishes"
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
            Our Residential Services
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
                src={luxuryHome} 
                alt="Luxury Home Project" 
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
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create your perfect living space together. Contact us to start your journey.
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

export default ResidentialProjects;