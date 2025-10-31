import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Documentation = () => {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [searchTerm, setSearchTerm] = useState('');

  const documentationCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: 'fas fa-rocket',
      description: 'Begin your journey with Nexus AI',
      color: 'var(--primary)'
    },
    {
      id: 'ai-tools',
      name: 'AI Tools',
      icon: 'fas fa-wrench',
      description: 'Comprehensive guides for all AI tools',
      color: '#FF6B8B'
    },
    {
      id: 'ai-agents',
      name: 'AI Agents',
      icon: 'fas fa-robot',
      description: 'Build and deploy intelligent agents',
      color: '#4CAF50'
    },
    {
      id: 'automation',
      name: 'Automation',
      icon: 'fas fa-cogs',
      description: 'Workflow automation and integration',
      color: '#FF9800'
    },
    {
      id: 'api',
      name: 'API Reference',
      icon: 'fas fa-code',
      description: 'Complete API documentation',
      color: '#9C27B0'
    },
    {
      id: 'tutorials',
      name: 'Tutorials',
      icon: 'fas fa-graduation-cap',
      description: 'Step-by-step learning guides',
      color: '#2196F3'
    }
  ];

  const popularGuides = [
    {
      title: 'Getting Started with AI Chatbots',
      description: 'Learn how to set up and configure your first AI chatbot',
      category: 'ai-tools',
      duration: '15 min read',
      level: 'Beginner',
      link: '/docs/ai-chatbots-getting-started'
    },
    {
      title: 'Building Custom AI Agents',
      description: 'Create autonomous agents for specific business tasks',
      category: 'ai-agents',
      duration: '25 min read',
      level: 'Intermediate',
      link: '/docs/building-custom-agents'
    },
    {
      title: 'API Authentication Guide',
      description: 'Learn how to authenticate and make API requests',
      category: 'api',
      duration: '10 min read',
      level: 'Beginner',
      link: '/api-docs'
    },
    {
      title: 'Workflow Automation Basics',
      description: 'Automate repetitive tasks with intelligent workflows',
      category: 'automation',
      duration: '20 min read',
      level: 'Beginner',
      link: '/docs/workflow-automation'
    }
  ];

  const quickLinks = [
    {
      title: 'API Documentation',
      description: 'Complete API reference with examples',
      icon: 'fas fa-code',
      link: '/api-docs',
      color: 'var(--primary)'
    },
    {
      title: 'SDK Libraries',
      description: 'Client libraries for various programming languages',
      icon: 'fas fa-cube',
      link: '/docs/sdks',
      color: '#FF6B8B'
    },
    {
      title: 'Best Practices',
      description: 'Recommended patterns and security guidelines',
      icon: 'fas fa-shield-alt',
      link: '/docs/best-practices',
      color: '#4CAF50'
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and their solutions',
      icon: 'fas fa-life-ring',
      link: '/docs/troubleshooting',
      color: '#FF9800'
    }
  ];

  const renderCategoryContent = () => {
    switch (activeCategory) {
      case 'getting-started':
        return (
          <div className="category-content">
            <h2>Getting Started with Nexus AI</h2>
            <p className="content-description">
              Welcome to Nexus AI! This guide will help you get up and running quickly with our platform.
            </p>
            
            <div className="content-grid">
              <div className="guide-card">
                <div className="guide-icon">
                  <i className="fas fa-user-plus"></i>
                </div>
                <h3>Create Your Account</h3>
                <p>Sign up and verify your email to get started with Nexus AI.</p>
                <Link to="/get-started" className="btn btn-outline">Get Started</Link>
              </div>
              
              <div className="guide-card">
                <div className="guide-icon">
                  <i className="fas fa-key"></i>
                </div>
                <h3>Get API Keys</h3>
                <p>Generate your API keys to start integrating with our platform.</p>
                <Link to="/dashboard" className="btn btn-outline">Dashboard</Link>
              </div>
              
              <div className="guide-card">
                <div className="guide-icon">
                  <i className="fas fa-play-circle"></i>
                </div>
                <h3>First Integration</h3>
                <p>Follow our quick start guide to make your first API call.</p>
                <Link to="/api-docs" className="btn btn-outline">API Docs</Link>
              </div>
            </div>

            <div className="video-section">
              <h3>Quick Start Video</h3>
              <div className="video-placeholder">
                <div className="video-thumbnail">
                  <i className="fas fa-play"></i>
                  <p>Getting Started with Nexus AI - 5 Minute Overview</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'api':
        return (
          <div className="category-content">
            <h2>API Reference</h2>
            <p className="content-description">
              Complete API documentation with examples, authentication, and best practices.
            </p>
            
            <div className="api-highlights">
              <div className="api-feature">
                <h3>REST API</h3>
                <p>Standard RESTful API with JSON responses</p>
                <ul>
                  <li>HTTP-based communication</li>
                  <li>JSON request/response format</li>
                  <li>Standard status codes</li>
                </ul>
              </div>
              
              <div className="api-feature">
                <h3>Authentication</h3>
                <p>Bearer token authentication for secure access</p>
                <ul>
                  <li>API key-based authentication</li>
                  <li>JWT token support</li>
                  <li>Role-based access control</li>
                </ul>
              </div>
            </div>

            <div className="cta-section">
              <h3>Ready to dive deeper?</h3>
              <p>Explore our complete API documentation with detailed examples and SDK integrations.</p>
              <Link to="/api-docs" className="btn btn-primary">
                View Full API Documentation
              </Link>
            </div>
          </div>
        );

      default:
        return (
          <div className="category-content">
            <h2>{documentationCategories.find(cat => cat.id === activeCategory)?.name}</h2>
            <p className="content-description">
              Comprehensive documentation and guides for {documentationCategories.find(cat => cat.id === activeCategory)?.name.toLowerCase()}.
            </p>
            
            <div className="coming-soon">
              <div className="coming-soon-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Documentation Coming Soon</h3>
              <p>We're working hard to create comprehensive documentation for this section. In the meantime, check out our getting started guide or explore the API documentation.</p>
              <div className="coming-soon-actions">
                <button 
                  className="btn btn-primary"
                  onClick={() => setActiveCategory('getting-started')}
                >
                  Getting Started
                </button>
                <Link to="/api-docs" className="btn btn-outline">
                  API Documentation
                </Link>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="documentation-page">
      {/* Banner */}
      <div className="banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <span className="banner-highlight">NEW:</span> Introducing Nexus AI Pro with advanced multi-agent workflows. 
              <span className="banner-highlight"> Try it free for 14 days!</span>
            </div>
          </div>
          <div className="banner-decoration"></div>
        </div>
      </div>

      <Header />
      
      {/* Hero Section */}
      <section className="docs-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Documentation</h1>
            <p>Comprehensive guides, tutorials, and references to help you build amazing AI-powered applications.</p>
            
            <div className="search-container">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="docs-main">
        <div className="container">
          <div className="docs-layout">
            {/* Sidebar */}
            <div className="docs-sidebar">
              <div className="sidebar-section">
                <h3>Categories</h3>
                <div className="category-list">
                  {documentationCategories.map(category => (
                    <button
                      key={category.id}
                      className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <div 
                        className="category-icon"
                        style={{ backgroundColor: category.color }}
                      >
                        <i className={category.icon}></i>
                      </div>
                      <div className="category-info">
                        <h4>{category.name}</h4>
                        <p>{category.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="sidebar-help">
                <h4>Need Help?</h4>
                <p>Can't find what you're looking for? Our support team is here to help.</p>
                <div className="help-actions">
                  <Link to="/contact" className="btn btn-outline btn-small">
                    Contact Support
                  </Link>
                  <a href="mailto:support@nexus-ai.com" className="btn btn-outline btn-small">
                    Email Us
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="docs-content">
              {renderCategoryContent()}

              {/* Quick Links Section */}
              <div className="quick-links-section">
                <h3>Quick Links</h3>
                <div className="quick-links-grid">
                  {quickLinks.map((link, index) => (
                    <Link key={index} to={link.link} className="quick-link-card">
                      <div 
                        className="link-icon"
                        style={{ backgroundColor: link.color }}
                      >
                        <i className={link.icon}></i>
                      </div>
                      <div className="link-content">
                        <h4>{link.title}</h4>
                        <p>{link.description}</p>
                      </div>
                      <div className="link-arrow">
                        <i className="fas fa-chevron-right"></i>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Guides */}
              <div className="popular-guides">
                <h3>Popular Guides</h3>
                <div className="guides-grid">
                  {popularGuides.map((guide, index) => (
                    <div key={index} className="guide-item">
                      <div className="guide-header">
                        <h4>{guide.title}</h4>
                        <span className={`level-badge ${guide.level.toLowerCase()}`}>
                          {guide.level}
                        </span>
                      </div>
                      <p>{guide.description}</p>
                      <div className="guide-meta">
                        <span className="duration">{guide.duration}</span>
                        <span className="category">{guide.category}</span>
                      </div>
                      <Link to={guide.link} className="guide-link">
                        Read Guide <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documentation;