import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook,FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>KRATOS CONSTRUCTION</h3>
          <p>Building Gabon's future with precision and excellence. Your trusted partner in construction and development.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=100069012528008"><FaFacebook /></a>
            
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <Link to="/services">Residential Construction</Link>
          <Link to="/services">Commercial Development</Link>
          <Link to="/services">Industrial Projects</Link>
          <Link to="/services">Renovation</Link>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p><FaPhone /> +241 74 123 456</p>
            <p><FaEnvelope /> info@kratosconstruction.com</p>
            <p><FaMapMarkerAlt /> 123 Boulevard Triomphal, Libreville, Gabon</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kratos Construction. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;