import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Luxury Residential Complex",
      category: "Residential",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      description: "Modern luxury apartments in Libreville"
    },
    {
      title: "Commercial Center",
      category: "Commercial",
      image: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg",
      description: "State-of-the-art shopping complex"
    },
    {
      title: "Industrial Facility",
      category: "Industrial",
      image: "https://images.pexels.com/photos/259957/pexels-photo-259957.jpeg",
      description: "Large-scale manufacturing plant"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Latest Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our recent construction projects that showcase our commitment to excellence
            and innovation in building Gabon's future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-primary font-medium mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;