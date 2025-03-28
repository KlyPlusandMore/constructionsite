
import React from 'react';
import { motion } from 'framer-motion';

const CompanyHistory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Journey</h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-32 flex-shrink-0 text-primary font-bold">2003</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Foundation</h3>
                <p className="text-gray-600">Established in Libreville with a vision to transform Gabon's construction landscape.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-32 flex-shrink-0 text-primary font-bold">2010</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Major Expansion</h3>
                <p className="text-gray-600">Expanded operations across multiple regions in Gabon.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-32 flex-shrink-0 text-primary font-bold">2023</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Industry Leader</h3>
                <p className="text-gray-600">Recognized as one of Gabon's premier construction companies.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyHistory;