import React from 'react';
import { FaPencilRuler, FaCheck, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import designHero from '../../assets/images/plan_de_construction_maison.jpg';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera, Environment } from '@react-three/drei';

// Add this after the imports and before the DesignAndPlanning component
function Model() {
  const { scene } = useGLTF('/models/construction_buidling.glb');
  return <primitive object={scene} scale={[0.6, 0.6, 0.6]} position={[0, 2, 0]} rotation={[0, Math.PI / 2, 0]} />;
}

// Update the preload at the bottom of the file
useGLTF.preload('/models/house_under_construction3_fbx.glb');

const DesignAndPlanning = () => {
  const services = [
    {
      title: "Architectural Design",
      description: "Innovative and functional architectural solutions"
    },
    {
      title: "3D Visualization",
      description: "Realistic project visualization and modeling"
    },
    {
      title: "Interior Design",
      description: "Creative and ergonomic interior spaces"
    },
    {
      title: "Site Planning",
      description: "Strategic site analysis and development plans"
    },
    {
      title: "Sustainable Design",
      description: "Eco-friendly and energy-efficient solutions"
    },
    {
      title: "Project Documentation",
      description: "Comprehensive construction documentation"
    }
  ];

  const benefits = [
    "Expert Design Consultation",
    "Innovative Design Solutions",
    "Sustainable Approach",
    "Detailed Project Planning",
    "Cost-Effective Strategies",
    "Regulatory Compliance"
  ];

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${designHero})` }}
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
              Design & Planning Excellence
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transforming visions into detailed plans with creativity and precision
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              Start Your Design
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
            <h2 className="text-4xl font-bold mb-6">Creative Design Solutions</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We combine artistic vision with technical expertise to create 
              designs that inspire and plans that deliver results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaPencilRuler className="text-4xl" />,
                title: "Creative Design",
                description: "Innovative architectural solutions"
              },
              {
                icon: <FaPencilRuler className="text-4xl" />,
                title: "Detailed Planning",
                description: "Comprehensive project strategies"
              },
              {
                icon: <FaPencilRuler className="text-4xl" />,
                title: "3D Visualization",
                description: "Realistic project previews"
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
            Our Design Services
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
              className="relative h-[400px] w-full"
            >
              <Canvas>
                <PerspectiveCamera 
                  makeDefault
                  position={[2, 4, 2]} 
                  fov={25} 
                  near={0.1} 
                  far={1000}
                />
                <Environment preset="sunset" />
                <ambientLight intensity={1} />
                <directionalLight position={[5, 11, 5]} intensity={1.5} castShadow />
                <Model />
                <OrbitControls 
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 1.8}
                  minPolarAngle={Math.PI / 4}
                  autoRotate
                  autoRotateSpeed={0.5}
                  target={[0, 2, 0]}
                  enablePan={true}
                  panSpeed={0.5}
                  enableDamping
                  dampingFactor={0.05}
                />
              </Canvas>
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
              Ready to Start Your Design Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's collaborate to bring your vision to life with expert design and planning.
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

export default DesignAndPlanning;

// Add this at the bottom of the file
useGLTF.preload('/models/construction_building.glb');