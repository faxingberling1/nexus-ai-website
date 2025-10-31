import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedSolution, setSelectedSolution] = useState('all');
  const [caseStudies] = useState([
    {
      id: 1,
      title: 'TechSolutions Inc: 85% Efficiency Boost with AI Automation',
      company: 'TechSolutions Inc',
      industry: 'technology',
      solutions: ['automation', 'ai-agents'],
      excerpt: 'How a leading tech company automated their customer support and internal processes, saving 200+ hours monthly.',
      duration: '3 months',
      results: [
        { metric: '85%', description: 'Increase in operational efficiency' },
        { metric: '200+', description: 'Hours saved per month' },
        { metric: '40%', description: 'Reduction in response time' }
      ],
      featured: true,
      logo: 'TS'
    },
    {
      id: 2,
      title: 'MediCare Plus: Transforming Patient Care with AI Chatbots',
      company: 'MediCare Plus',
      industry: 'healthcare',
      solutions: ['ai-chatbots', 'automation'],
      excerpt: 'Revolutionizing patient engagement and administrative efficiency in healthcare through intelligent AI solutions.',
      duration: '4 months',
      results: [
        { metric: '60%', description: 'Faster patient response' },
        { metric: '45%', description: 'Reduced admin workload' },
        { metric: '95%', description: 'Patient satisfaction' }
      ],
      featured: true,
      logo: 'MP'
    },
    {
      id: 3,
      title: 'Global Finance Corp: AI-Powered Risk Assessment',
      company: 'Global Finance Corp',
      industry: 'finance',
      solutions: ['ai-agents', 'analytics'],
      excerpt: 'Implementing advanced AI agents for real-time risk analysis and financial decision making.',
      duration: '5 months',
      results: [
        { metric: '75%', description: 'Faster risk assessment' },
        { metric: '30%', description: 'Better accuracy' },
        { metric: '50%', description: 'Cost reduction' }
      ],
      featured: false,
      logo: 'GF'
    },
    {
      id: 4,
      title: 'EcoRetail: Personalized Shopping with AI',
      company: 'EcoRetail',
      industry: 'ecommerce',
      solutions: ['ai-chatbots', 'analytics'],
      excerpt: 'Creating personalized shopping experiences and boosting sales through AI-driven recommendations.',
      duration: '2 months',
      results: [
        { metric: '35%', description: 'Increase in sales' },
        { metric: '80%', description: 'Customer engagement' },
        { metric: '25%', description: 'Higher conversion' }
      ],
      featured: false,
      logo: 'ER'
    },
    {
      id: 5,
      title: 'EduTech Innovations: AI Learning Assistants',
      company: 'EduTech Innovations',
      industry: 'education',
      solutions: ['ai-agents', 'automation'],
      excerpt: 'Transforming education with AI-powered learning assistants and automated administrative tasks.',
      duration: '6 months',
      results: [
        { metric: '90%', description: 'Student engagement' },
        { metric: '50%', description: 'Time saved' },
        { metric: '40%', description: 'Improved outcomes' }
      ],
      featured: false,
      logo: 'EI'
    },
    {
      id: 6,
      title: 'LogiChain Pro: Supply Chain Optimization',
      company: 'LogiChain Pro',
      industry: 'technology',
      solutions: ['automation', 'analytics'],
      excerpt: 'Optimizing supply chain operations with AI-driven automation and predictive analytics.',
      duration: '4 months',
      results: [
        { metric: '70%', description: 'Faster delivery' },
        { metric: '45%', description: 'Cost savings' },
        { metric: '85%', description: 'Efficiency gain' }
      ],
      featured: false,
      logo: 'LP'
    }
  ]);

  const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudies);

  const industries = ['all', 'technology', 'healthcare', 'finance', 'ecommerce', 'education'];
  const solutions = ['all', 'ai-chatbots', 'automation', 'ai-agents', 'analytics'];

  useEffect(() => {
    const filtered = caseStudies.filter(study => {
      const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          study.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
      const matchesSolution = selectedSolution === 'all' || study.solutions.includes(selectedSolution);
      
      return matchesSearch && matchesIndustry && matchesSolution;
    });
    
    setFilteredCaseStudies(filtered);
  }, [searchTerm, selectedIndustry, selectedSolution, caseStudies]);

  const getIndustryColor = (industry) => {
    const colors = {
      technology: 'var(--primary)',
      healthcare: '#4CAF50',
      finance: '#FF9800',
      ecommerce: '#9C27B0',
      education: '#2196F3'
    };
    return colors[industry] || 'var(--primary)';
  };

  const getSolutionColor = (solution) => {
    const colors = {
      'ai-chatbots': '#4CAF50',
      'automation': '#2196F3',
      'ai-agents': '#9C27B0',
      'analytics': '#FF9800'
    };
    return colors[solution] || 'var(--primary)';
  };

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  return (
    <div className="case-studies-listing-page">
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
      <section className="case-studies-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Case Studies</h1>
            <p>Discover how leading companies are transforming their businesses with Nexus AI solutions</p>
            
            <div className="search-container">
              <i className="fas fa-search"></i>
              <input
                type="text"
                className="search-input"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="case-studies-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stats-item">
              <div className="stats-number">85%</div>
              <div className="stats-label">Average Efficiency Gain</div>
            </div>
            <div className="stats-item">
              <div className="stats-number">200+</div>
              <div className="stats-label">Hours Saved Monthly</div>
            </div>
            <div className="stats-item">
              <div className="stats-number">50%</div>
              <div className="stats-label">Cost Reduction</div>
            </div>
            <div className="stats-item">
              <div className="stats-number">95%</div>
              <div className="stats-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="featured-case-studies">
        <div className="container">
          <div className="section-header">
            <h2 className="listing-section-title">Featured Success Stories</h2>
            <p className="listing-section-subtitle">
              Explore our most impactful implementations that delivered exceptional results
            </p>
          </div>

          <div className="featured-grid">
            {featuredCaseStudies.map(study => (
              <div key={study.id} className="featured-case-card">
                <div className="case-listing-image">
                  <div className="case-image-placeholder">
                    <div className="case-company-logo">
                      {study.logo}
                    </div>
                  </div>
                  <div className="case-listing-badges">
                    <span 
                      className="listing-badge industry"
                      style={{ backgroundColor: getIndustryColor(study.industry) }}
                    >
                      {study.industry}
                    </span>
                    {study.featured && (
                      <span className="listing-badge featured">Featured</span>
                    )}
                  </div>
                </div>

                <div className="case-listing-content">
                  <h3>{study.title}</h3>
                  
                  <div className="listing-company-info">
                    <span className="listing-company-name">{study.company}</span>
                    <span className="listing-duration">
                      <i className="fas fa-clock"></i>
                      {study.duration}
                    </span>
                  </div>

                  <p>{study.excerpt}</p>

                  <div className="listing-results-preview">
                    {study.results.slice(0, 3).map((result, index) => (
                      <div key={index} className="listing-result-preview">
                        <div className="listing-result-metric">{result.metric}</div>
                        <div className="listing-result-label">{result.description}</div>
                      </div>
                    ))}
                  </div>

                  <div className="listing-solutions-tags">
                    {study.solutions.map(solution => (
                      <span 
                        key={solution}
                        className="listing-solution-tag"
                        style={{ borderLeftColor: getSolutionColor(solution) }}
                      >
                        {solution === 'ai-chatbots' && 'AI Chatbots'}
                        {solution === 'automation' && 'Automation'}
                        {solution === 'ai-agents' && 'AI Agents'}
                        {solution === 'analytics' && 'Analytics'}
                      </span>
                    ))}
                  </div>

                  {/* ADDED BUTTON FOR FEATURED CASE STUDIES */}
                  <div className="case-listing-actions">
                    <Link 
                      to={`/case-studies/${study.id}`}
                      className="listing-read-more"
                    >
                      Read Full Case Study
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="all-case-studies">
        <div className="container">
          <div className="listing-header">
            <h2>All Case Studies</h2>
            <div className="listing-filters">
              <div className="listing-filter-group">
                <label htmlFor="industry-filter">Industry:</label>
                <select 
                  id="industry-filter"
                  className="listing-filter-select"
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>
                      {industry === 'all' ? 'All Industries' : industry.charAt(0).toUpperCase() + industry.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="listing-filter-group">
                <label htmlFor="solution-filter">Solution:</label>
                <select 
                  id="solution-filter"
                  className="listing-filter-select"
                  value={selectedSolution}
                  onChange={(e) => setSelectedSolution(e.target.value)}
                >
                  {solutions.map(solution => (
                    <option key={solution} value={solution}>
                      {solution === 'all' ? 'All Solutions' : 
                       solution === 'ai-chatbots' ? 'AI Chatbots' :
                       solution === 'ai-agents' ? 'AI Agents' :
                       solution.charAt(0).toUpperCase() + solution.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {filteredCaseStudies.length === 0 ? (
            <div className="listing-no-results">
              <i className="fas fa-search"></i>
              <h3>No case studies found</h3>
              <p>Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className="case-studies-grid">
              {filteredCaseStudies.map(study => (
                <div key={study.id} className="case-listing-card">
                  <div className="case-listing-image">
                    <div className="case-image-placeholder">
                      <div className="case-company-logo">
                        {study.logo}
                      </div>
                    </div>
                    <div className="case-listing-badges">
                      <span 
                        className="listing-badge industry"
                        style={{ backgroundColor: getIndustryColor(study.industry) }}
                      >
                        {study.industry}
                      </span>
                      {study.featured && (
                        <span className="listing-badge featured">Featured</span>
                      )}
                    </div>
                  </div>

                  <div className="case-listing-content">
                    <h3>{study.title}</h3>
                    
                    <div className="listing-company-info">
                      <span className="listing-company-name">{study.company}</span>
                      <span className="listing-duration">
                        <i className="fas fa-clock"></i>
                        {study.duration}
                      </span>
                    </div>

                    <p>{study.excerpt}</p>

                    <div className="listing-results-preview">
                      {study.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="listing-result-preview">
                          <div className="listing-result-metric">{result.metric}</div>
                          <div className="listing-result-label">{result.description}</div>
                        </div>
                      ))}
                    </div>

                    <div className="listing-solutions-tags">
                      {study.solutions.slice(0, 2).map(solution => (
                        <span 
                          key={solution}
                          className="listing-solution-tag"
                          style={{ borderLeftColor: getSolutionColor(solution) }}
                        >
                          {solution === 'ai-chatbots' && 'AI Chatbots'}
                          {solution === 'automation' && 'Automation'}
                          {solution === 'ai-agents' && 'AI Agents'}
                          {solution === 'analytics' && 'Analytics'}
                        </span>
                      ))}
                      {study.solutions.length > 2 && (
                        <span className="listing-solution-tag">
                          +{study.solutions.length - 2} more
                        </span>
                      )}
                    </div>

                    <div className="case-listing-actions">
                      <Link 
                        to={`/case-studies/${study.id}`}
                        className="listing-read-more"
                      >
                        Read Case Study
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="listing-cta">
        <div className="container">
          <div className="listing-cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Join the growing list of companies achieving remarkable results with Nexus AI. 
              Let's discuss how we can help you achieve similar success.
            </p>
            <div className="listing-cta-buttons">
              <Link to="/get-started" className="btn btn-primary btn-large">
                Start Free Trial
              </Link>
              <Link to="/contact" className="btn btn-outline btn-large">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;