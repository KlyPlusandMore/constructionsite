import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';

const Services = () => {
  return (
    <main className="pt-20">
      <ServicesHero />
      <ServicesList />
    </main>
  );
};

export default Services;