import React from 'react';
import { Link } from 'react-router-dom';
import Documentation from './Documentation';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <Link to="/" className="logo">
              <i className="fas fa-robot"></i>
              <span>Neon Byte AI</span>
            </Link>
            <p style={{ marginTop: '20px', color: 'rgba(255,255,255,0.7)' }}>Empowering businesses with cutting-edge AI solutions.</p>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Products</h3>
            <ul className="footer-links">
              <li><Link to="/ai-tools">AI Tools</Link></li>
              <li><Link to="/ai-agents">AI Agents</Link></li>
              <li><Link to="/automation">Automation Tools</Link></li>
              <li><Link to="/api-docs">API Documentation</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><Link to="/documentation">Documentation</Link></li>
              <li><Link to="/tutorials">Tutorials</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/community">Community</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Neon Byte AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
