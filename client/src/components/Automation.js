import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Automation = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const automationCategories = [
    { id: 'all', name: 'All Tools', count: 12 },
    { id: 'marketing', name: 'Marketing', count: 4 },
    { id: 'sales', name: 'Sales', count: 3 },
    { id: 'support', name: 'Customer Support', count: 2 },
    { id: 'development', name: 'Development', count: 3 }
  ];

  const automationTools = [
    {
      id: 1,
      name: 'Email Marketing Automator',
      description: 'Automate your email campaigns with AI-powered personalization and scheduling',
      category: 'marketing',
      icon: 'fas fa-envelope',
      features: ['AI Personalization', 'Smart Scheduling', 'A/B Testing', 'Analytics'],
      complexity: 'Intermediate',
      integration: ['Gmail', 'Outlook', 'HubSpot'],
      price: 'Premium'
    },
    {
      id: 2,
      name: 'Social Media Scheduler',
      description: 'Schedule and optimize social media posts across multiple platforms automatically',
      category: 'marketing',
      icon: 'fas fa-share-alt',
      features: ['Multi-platform', 'Optimal Timing', 'Content Suggestions', 'Performance Tracking'],
      complexity: 'Beginner',
      integration: ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'],
      price: 'Free'
    },
    {
      id: 3,
      name: 'Lead Qualification Bot',
      description: 'Automatically qualify and score leads based on engagement and behavior',
      category: 'sales',
      icon: 'fas fa-bullseye',
      features: ['Lead Scoring', 'Behavior Tracking', 'CRM Integration', 'Follow-up Automation'],
      complexity: 'Advanced',
      integration: ['Salesforce', 'HubSpot', 'Zapier'],
      price: 'Premium'
    },
    {
      id: 4,
      name: 'Customer Support Assistant',
      description: 'AI-powered support ticket routing and initial response automation',
      category: 'support',
      icon: 'fas fa-headset',
      features: ['Ticket Routing', 'Instant Responses', 'Sentiment Analysis', 'Escalation Management'],
      complexity: 'Intermediate',
      integration: ['Zendesk', 'Intercom', 'Slack'],
      price: 'Premium'
    },
    {
      id: 5,
      name: 'Code Review Assistant',
      description: 'Automate code reviews and identify potential issues before deployment',
      category: 'development',
      icon: 'fas fa-code',
      features: ['Code Analysis', 'Security Checks', 'Best Practices', 'CI/CD Integration'],
      complexity: 'Advanced',
      integration: ['GitHub', 'GitLab', 'Bitbucket', 'Jenkins'],
      price: 'Premium'
    },
    {
      id: 6,
      name: 'Data Processing Pipeline',
      description: 'Automate data extraction, transformation, and loading processes',
      category: 'development',
      icon: 'fas fa-database',
      features: ['ETL Automation', 'Data Validation', 'Error Handling', 'Real-time Processing'],
      complexity: 'Advanced',
      integration: ['AWS', 'Google Cloud', 'MySQL', 'MongoDB'],
      price: 'Premium'
    },
    {
      id: 7,
      name: 'Content Calendar Manager',
      description: 'Automate content planning, creation, and distribution workflows',
      category: 'marketing',
      icon: 'fas fa-calendar-alt',
      features: ['Content Planning', 'Team Collaboration', 'Approval Workflows', 'Multi-channel Publishing'],
      complexity: 'Intermediate',
      integration: ['WordPress', 'Medium', 'Social Platforms'],
      price: 'Free'
    },
    {
      id: 8,
      name: 'Invoice & Billing Automator',
      description: 'Automate invoice generation, payment tracking, and billing reminders',
      category: 'sales',
      icon: 'fas fa-file-invoice-dollar',
      features: ['Auto-invoicing', 'Payment Tracking', 'Late Payment Alerts', 'Tax Calculation'],
      complexity: 'Beginner',
      integration: ['QuickBooks', 'Stripe', 'PayPal'],
      price: 'Free'
    }
  ];

  const filteredTools = automationTools.filter(tool => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle Try Demo click
  const handleTryDemo = (toolName) => {
    // You can customize this based on your demo system
    // For now, navigate to get-started with tool info
    navigate('/get-started', { 
      state: { 
        selectedTool: toolName,
        action: 'demo'
      }
    });
  };

  // Handle Get Started click
  const handleGetStarted = (toolName) => {
    navigate('/get-started', { 
      state: { 
        selectedTool: toolName,
        action: 'get-started'
      }
    });
  };

  // Handle general demo click (for the main CTA)
  const handleWatchDemo = () => {
    // You can replace this with actual demo video functionality
    alert('Demo video would play here! In a real implementation, this would open a modal or navigate to a demo page.');
  };

  return (
    <div className="automation-page">
      {/* Banner - Same as Home page */}
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
      <section className="automation-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Automation Tools</h1>
            <p>Streamline your workflows with intelligent automation solutions that save time and boost productivity</p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">85%</div>
                <div className="stat-label">Time Saved</div>
              </div>
              <div className="stat">
                <div className="stat-number">200+</div>
                <div className="stat-label">Integrations</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Automation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-header">
            <h2>Browse by Category</h2>
            <p>Find the perfect automation tool for your specific needs</p>
          </div>
          <div className="categories-grid">
            {automationCategories.map(category => (
              <button
                key={category.id}
                className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <span className="tool-count">{category.count} tools</span>
                </div>
                <div className="category-arrow">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="tools-section">
        <div className="container">
          <div className="tools-header">
            <div className="search-container">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search automation tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="results-count">
              {filteredTools.length} tools found
            </div>
          </div>

          <div className="automation-grid">
            {filteredTools.map(tool => (
              <div key={tool.id} className="automation-card">
                <div className="card-header">
                  <div className="tool-icon">
                    <i className={tool.icon}></i>
                  </div>
                  <div className="tool-meta">
                    <span className={`price-tag ${tool.price.toLowerCase()}`}>
                      {tool.price}
                    </span>
                    <span className={`complexity-badge ${tool.complexity.toLowerCase()}`}>
                      {tool.complexity}
                    </span>
                  </div>
                </div>

                <div className="card-content">
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  
                  <div className="features-list">
                    <h4>Key Features</h4>
                    <div className="features-grid">
                      {tool.features.map((feature, index) => (
                        <span key={index} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="integrations">
                    <h4>Integrations</h4>
                    <div className="integration-tags">
                      {tool.integration.map((app, index) => (
                        <span key={index} className="integration-tag">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card-actions">
                  <button 
                    className="btn btn-outline"
                    onClick={() => handleTryDemo(tool.name)}
                  >
                    <i className="fas fa-play-circle"></i>
                    Try Demo
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleGetStarted(tool.name)}
                  >
                    <i className="fas fa-rocket"></i>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <h3>No tools found</h3>
              <p>Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="automation-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Automate Your Workflow?</h2>
            <p>Join thousands of businesses already saving time with Nexus AI automation tools</p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary btn-large"
                onClick={() => navigate('/get-started')}
              >
                Start Automating Today
              </button>
              <button 
                className="btn btn-outline btn-large"
                onClick={handleWatchDemo}
              >
                <i className="fas fa-play-circle"></i>
                Watch Full Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Nexus AI Automation?</h2>
            <p>Experience the power of intelligent automation</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Save Time</h3>
              <p>Automate repetitive tasks and focus on what matters most</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Increase Efficiency</h3>
              <p>Streamline workflows and boost team productivity</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3>AI-Powered</h3>
              <p>Intelligent automation that learns and improves over time</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-plug"></i>
              </div>
              <h3>Easy Integration</h3>
              <p>Connect with your favorite tools and platforms seamlessly</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Automation;