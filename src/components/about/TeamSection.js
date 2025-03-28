
import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const team = [
    {
      name: "John Smith",
      position: "CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      name: "Sarah Johnson",
      position: "Chief Engineer",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg"
    },
    {
      name: "Mike Wilson",
      position: "Project Director",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Meet the experts behind Kratos Construction's success.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-primary">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;