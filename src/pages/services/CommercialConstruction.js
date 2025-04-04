import React from 'react';
import { FaBuilding, FaCheck, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import constructionSiteImage from '../../assets/images/construction.jpg'; // Ensure this path matches your image location
import modernBuildingImage from '../../assets/images/project3.jpg'; // Ensure this path matches your image location

const CommercialConstruction = () => {
  const services = [
    {
      title: "Office Buildings and Complexes",
      description: "Modern workspaces designed for productivity and comfort"
    },
    {
      title: "Retail Centers and Shopping Malls",
      description: "Engaging spaces that attract and retain customers"
    },
    {
      title: "Hotels and Hospitality Structures",
      description: "Luxurious accommodations that exceed expectations"
    },
    {
      title: "Medical Facilities and Healthcare Centers",
      description: "State-of-the-art facilities for optimal patient care"
    },
    {
      title: "Educational Institutions",
      description: "Learning environments that inspire and engage"
    },
    {
      title: "Mixed-use Developments",
      description: "Integrated spaces that combine work, life, and leisure"
    }
  ];

  const benefits = [
    "Expert Project Management with proven track record",
    "Sustainable Building Practices for eco-friendly construction",
    "Advanced Construction Technologies for efficiency",
    "Premium Quality Materials and Expert Workmanship",
    "Timely Project Completion guaranteed",
    "Cost-Effective Solutions without compromising quality"
  ];

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${constructionSiteImage})` }}
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
              Commercial Construction Excellence
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transforming skylines with innovative design and superior craftsmanship
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
            <h2 className="text-4xl font-bold mb-6">Building Tomorrow's Landmarks</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              With decades of experience in commercial construction, we deliver innovative, 
              sustainable, and cost-effective building solutions that exceed expectations 
              and stand the test of time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBuilding className="text-4xl" />,
                title: "Modern Design",
                description: "Cutting-edge architectural solutions"
              },
              // Add two more features
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
            Our Commercial Services
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Services list with enhanced styling */}
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

      {/* Benefits Section with Image */}
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
                src={modernBuildingImage} 
                alt="Modern Building Project" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Vision into Reality?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your commercial construction project and create something extraordinary together.
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

export default CommercialConstruction;