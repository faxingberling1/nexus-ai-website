import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
            <i className="fas fa-robot"></i>
            <span>Nexus AI</span>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/ai-tools">AI Tools</Link>
            <Link to="/ai-agents">AI Agents</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="nav-buttons">
            <button className="btn btn-outline" onClick={handleSignIn}>
              Sign In
            </button>
            <button className="btn btn-primary" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;