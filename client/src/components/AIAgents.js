import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AIAgents = () => {
  const navigate = useNavigate();
  useScrollAnimation();

  const agents = [
    {
      id: 1,
      icon: 'fas fa-robot',
      title: 'Customer Support Agent',
      description: 'Autonomous AI agent that handles customer inquiries, provides support, and resolves issues 24/7.',
      capabilities: ['Natural Conversations', 'Issue Resolution', 'Ticket Management', 'Sentiment Analysis'],
      complexity: 'Advanced',
      category: 'support',
      status: 'active',
      uptime: '99.9%',
      popular: true
    },
    {
      id: 2,
      icon: 'fas fa-shopping-cart',
      title: 'E-commerce Assistant',
      description: 'Intelligent shopping assistant that helps customers find products and complete purchases.',
      capabilities: ['Product Recommendations', 'Order Management', 'Inventory Tracking', 'Sales Analytics'],
      complexity: 'Intermediate',
      category: 'commerce',
      status: 'active',
      uptime: '99.8%',
      popular: true
    },
    {
      id: 3,
      icon: 'fas fa-chart-line',
      title: 'Data Analysis Agent',
      description: 'Autonomous data scientist that analyzes datasets and generates insights automatically.',
      capabilities: ['Pattern Recognition', 'Predictive Modeling', 'Report Generation', 'Data Visualization'],
      complexity: 'Advanced',
      category: 'analytics',
      status: 'active',
      uptime: '99.7%',
      popular: false
    },
    {
      id: 4,
      icon: 'fas fa-file-alt',
      title: 'Content Creation Agent',
      description: 'AI writer that creates high-quality content for blogs, social media, and marketing materials.',
      capabilities: ['SEO Optimization', 'Tone Adjustment', 'Plagiarism Check', 'Multi-format Output'],
      complexity: 'Intermediate',
      category: 'content',
      status: 'active',
      uptime: '99.9%',
      popular: true
    },
    {
      id: 5,
      icon: 'fas fa-cogs',
      title: 'Workflow Automation Agent',
      description: 'Automates complex business processes and workflows across multiple systems.',
      capabilities: ['Process Automation', 'API Integration', 'Task Scheduling', 'Error Handling'],
      complexity: 'Advanced',
      category: 'automation',
      status: 'active',
      uptime: '99.8%',
      popular: false
    },
    {
      id: 6,
      icon: 'fas fa-shield-alt',
      title: 'Security Monitoring Agent',
      description: 'Continuous security monitoring and threat detection agent for your digital assets.',
      capabilities: ['Threat Detection', 'Vulnerability Scanning', 'Incident Response', 'Compliance Monitoring'],
      complexity: 'Expert',
      category: 'security',
      status: 'active',
      uptime: '99.9%',
      popular: false
    },
    {
      id: 7,
      icon: 'fas fa-users',
      title: 'HR Recruitment Agent',
      description: 'AI recruiter that screens candidates, schedules interviews, and manages hiring processes.',
      capabilities: ['Candidate Screening', 'Interview Scheduling', 'Skill Assessment', 'Onboarding Support'],
      complexity: 'Intermediate',
      category: 'hr',
      status: 'active',
      uptime: '99.7%',
      popular: true
    },
    {
      id: 8,
      icon: 'fas fa-brain',
      title: 'Research Assistant Agent',
      description: 'Autonomous research agent that gathers, analyzes, and synthesizes information from multiple sources.',
      capabilities: ['Web Research', 'Data Synthesis', 'Source Verification', 'Report Writing'],
      complexity: 'Advanced',
      category: 'research',
      status: 'active',
      uptime: '99.6%',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Agents', icon: 'fas fa-th', count: agents.length },
    { id: 'support', name: 'Customer Support', icon: 'fas fa-headset', count: agents.filter(a => a.category === 'support').length },
    { id: 'commerce', name: 'E-commerce', icon: 'fas fa-shopping-cart', count: agents.filter(a => a.category === 'commerce').length },
    { id: 'analytics', name: 'Analytics', icon: 'fas fa-chart-bar', count: agents.filter(a => a.category === 'analytics').length },
    { id: 'content', name: 'Content', icon: 'fas fa-edit', count: agents.filter(a => a.category === 'content').length },
    { id: 'automation', name: 'Automation', icon: 'fas fa-cogs', count: agents.filter(a => a.category === 'automation').length },
    { id: 'security', name: 'Security', icon: 'fas fa-shield-alt', count: agents.filter(a => a.category === 'security').length },
    { id: 'hr', name: 'HR & Recruitment', icon: 'fas fa-users', count: agents.filter(a => a.category === 'hr').length },
    { id: 'research', name: 'Research', icon: 'fas fa-search', count: agents.filter(a => a.category === 'research').length }
  ];

  const complexityLevels = [
    { id: 'all', name: 'All Levels', color: '#6C63FF' },
    { id: 'intermediate', name: 'Intermediate', color: '#4CAF50' },
    { id: 'advanced', name: 'Advanced', color: '#FF9800' },
    { id: 'expert', name: 'Expert', color: '#F44336' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedComplexity, setSelectedComplexity] = React.useState('all');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredAgents = agents.filter(agent => {
    const matchesCategory = selectedCategory === 'all' || agent.category === selectedCategory;
    const matchesComplexity = selectedComplexity === 'all' || agent.complexity.toLowerCase() === selectedComplexity;
    const matchesSearch = agent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesComplexity && matchesSearch;
  });

  const handleDeployAgent = (agentId) => {
    navigate('/get-started', { state: { selectedAgent: agentId } });
  };

  const handleViewDemo = (agentTitle) => {
    alert(`Demo for ${agentTitle} would open here!`);
  };

  return (
    <div className="page-container">
      {/* Top Banner */}
      <div className="banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <span className="banner-highlight">NEW:</span> Autonomous AI Agents with enhanced decision-making capabilities. 
              <span className="banner-highlight"> Deploy your first agent today!</span>
            </div>
          </div>
          <div className="banner-decoration"></div>
        </div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Autonomous AI Agents</h1>
            <p>Deploy intelligent agents that work autonomously to handle complex tasks, make decisions, and learn from interactions.</p>
            <div className="search-bar">
              <div className="search-container">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Search AI agents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-grid">
            {/* Categories */}
            <div className="filter-group">
              <h3>Categories</h3>
              <div className="filter-options">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <i className={category.icon}></i>
                    {category.name}
                    <span className="count-badge">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Complexity Levels */}
            <div className="filter-group">
              <h3>Complexity Level</h3>
              <div className="filter-options">
                {complexityLevels.map(level => (
                  <button
                    key={level.id}
                    className={`filter-btn complexity-${level.id} ${selectedComplexity === level.id ? 'active' : ''}`}
                    onClick={() => setSelectedComplexity(level.id)}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid Section */}
      <section className="agents-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {selectedCategory === 'all' ? 'All AI Agents' : 
               categories.find(c => c.id === selectedCategory)?.name}
              {selectedComplexity !== 'all' && ` • ${complexityLevels.find(l => l.id === selectedComplexity)?.name}`}
            </h2>
            <p className="section-subtitle">
              {filteredAgents.length} {filteredAgents.length === 1 ? 'agent' : 'agents'} available
            </p>
          </div>

          <div className="agents-grid">
            {filteredAgents.map(agent => (
              <div key={agent.id} className="agent-card">
                {/* Single Popular Badge - Only show if popular */}
                {agent.popular && <div className="popular-badge">Most Popular</div>}
                
                <div className="agent-header">
                  <div className="agent-icon">
                    <i className={agent.icon}></i>
                  </div>
                  <div className="agent-meta">
                    {/* Complexity and Status combined in one area */}
                    <div className="agent-stats">
                      <span className={`complexity-badge ${agent.complexity.toLowerCase()}`}>
                        {agent.complexity}
                      </span>
                      <div className="status-indicator">
                        <div className={`status-dot ${agent.status}`}></div>
                        <span>{agent.uptime} Uptime</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="agent-content">
                  <h3>{agent.title}</h3>
                  <p>{agent.description}</p>
                  <div className="capabilities-list">
                    <h4>Key Capabilities:</h4>
                    <ul>
                      {agent.capabilities.map((capability, index) => (
                        <li key={index}>
                          <i className="fas fa-check"></i>
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="agent-actions">
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleDeployAgent(agent.id)}
                  >
                    <i className="fas fa-rocket"></i>
                    Deploy Agent
                  </button>
                  <button 
                    className="btn btn-outline"
                    onClick={() => handleViewDemo(agent.title)}
                  >
                    <i className="fas fa-play"></i>
                    View Demo
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredAgents.length === 0 && (
            <div className="no-results">
              <i className="fas fa-robot fa-3x"></i>
              <h3>No agents found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How Autonomous Agents Work</h2>
            <p className="section-subtitle">Our AI agents operate independently to achieve your business goals</p>
          </div>
          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-number">1</div>
              <div className="step-icon">
                <i className="fas fa-cog"></i>
              </div>
              <h3>Configure</h3>
              <p>Set up your agent with specific goals, parameters, and access permissions</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">2</div>
              <div className="step-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Deploy</h3>
              <p>Launch your agent to start working autonomously on your assigned tasks</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">3</div>
              <div className="step-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Monitor</h3>
              <p>Track performance, view analytics, and receive real-time updates</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">4</div>
              <div className="step-icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h3>Optimize</h3>
              <p>Agents learn and improve over time based on performance data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Benefits of Autonomous AI Agents</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>24/7 Operation</h3>
              <p>Agents work around the clock without breaks, ensuring continuous productivity and instant responses.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Lightning Fast</h3>
              <p>Process information and execute tasks at machine speed, far beyond human capabilities.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Continuous Learning</h3>
              <p>Agents improve over time by learning from interactions and performance data.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-expand-arrows-alt"></i>
              </div>
              <h3>Scalable</h3>
              <p>Easily scale from handling single tasks to managing entire business processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Deploy Your AI Workforce?</h2>
            <p>Start building your team of autonomous AI agents today and transform how you work.</p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/get-started')}
              >
                <i className="fas fa-rocket"></i>
                Start Free Trial
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => navigate('/pricing')}
              >
                <i className="fas fa-dollar-sign"></i>
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAgents;