import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <header className="relative min-h-[100svh]">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90" />
        <img
          src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg"
          alt="Construction Site"
          className="w-full h-full object-cover animate-kenburns"
        />
      </div>

      <div className="relative min-h-[100svh] flex flex-col justify-center items-center px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 sm:mb-8 md:mb-10"
          >
            <div className="inline-block backdrop-blur-md bg-black/40 p-3 sm:p-4 md:p-5 rounded-lg shadow-lg">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight tracking-wide text-white drop-shadow-lg">
                KRATOS <span className="text-primary inline-block">CONSTRUCTION</span>
              </h1>
              <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-0.5 bg-gradient-to-r from-primary via-primary/80 to-primary/50 mx-auto" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl mx-auto backdrop-blur-md bg-black/30 py-2 sm:py-3 px-4 rounded-lg shadow-lg">
              Constructeur de Confiance et d'Avenir
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <button className="w-full sm:w-auto group bg-gradient-to-r from-primary to-primary/90 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 hover:gap-3 hover:shadow-lg hover:shadow-primary/30">
              Get a Free Quote
              <FaArrowRight className="text-sm sm:text-base transition-all duration-300 group-hover:translate-x-1" />
            </button>
            <button className="w-full sm:w-auto group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg">
              <FaPhone className="text-sm sm:text-base animate-bounce" />
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;