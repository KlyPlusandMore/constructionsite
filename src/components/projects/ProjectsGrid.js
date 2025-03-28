import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectsGrid = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Modern Office Complex",
      category: "commercial",
      location: "Libreville, Gabon",
      status: "Completed",
      year: "2023",
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
      description: "A state-of-the-art office complex featuring modern amenities and sustainable design"
    },
    {
      title: "Luxury Residential Tower",
      category: "residential",
      location: "Port-Gentil, Gabon",
      status: "In Progress",
      year: "2024",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      description: "Premium residential apartments with panoramic ocean views"
    },
    {
      title: "Industrial Park",
      category: "industrial",
      location: "Franceville, Gabon",
      status: "Completed",
      year: "2023",
      image: "https://images.pexels.com/photos/259957/pexels-photo-259957.jpeg",
      description: "Modern manufacturing facility with advanced infrastructure"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  {project.status}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-primary text-sm font-medium">{project.category.toUpperCase()}</span>
                  <span className="text-gray-500 text-sm">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;