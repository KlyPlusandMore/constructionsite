import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import House3D from '../components/home/House3D';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import ProjectsSection from '../components/home/ProjectsSection';
import PartnersSection from '../components/home/PartnersSection';

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <House3D />
      <WhyChooseUsSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <PartnersSection />
    </main>
  );
};

export default Home;