import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import WhatsAppButton from './components/common/WhatsAppButton';
import CommercialConstruction from './pages/services/CommercialConstruction';
import InfrastructureDevelopment from './pages/services/InfrastructureDevelopment';
import IndustrialConstruction from './pages/services/IndustrialConstruction';
import ResidentialProjects from './pages/services/ResidentialProjects';
import RenovationServices from './pages/services/RenovationServices';
import DesignAndPlanning from './pages/services/DesignAndPlanning';
import { BrowserRouter } from 'react-router-dom';
import { useScrollToTop } from './hooks/useScrollToTop';

const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/commercial-construction" element={<CommercialConstruction />} />
            <Route path="/services/infrastructure-development" element={<InfrastructureDevelopment />} />
            <Route path="/services/industrial-construction" element={<IndustrialConstruction />} />
            <Route path="/services/residential-projects" element={<ResidentialProjects />} />
            <Route path="/services/renovation-services" element={<RenovationServices />} />
            <Route path="/services/design-and-planning" element={<DesignAndPlanning />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;