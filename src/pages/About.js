import React from 'react';
import AboutHero from '../components/about/AboutHero';
import VisionMission from '../components/about/VisionMission';
import CompanyHistory from '../components/about/CompanyHistory';
import StatsSection from '../components/about/StatsSection';
import TeamSection from '../components/about/TeamSection';

const About = () => {
  return (
    <main>
      <AboutHero />
      <VisionMission />
      <StatsSection />
      <CompanyHistory />
      <TeamSection />
    </main>
  );
};

export default About;