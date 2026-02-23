import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in a real app, this would come from an API
  const caseStudy = {
    id: 1,
    title: 'TechSolutions Inc: 85% Efficiency Boost with AI Automation',
    company: 'TechSolutions Inc',
    industry: 'technology',
    solutions: ['automation', 'ai-agents'],
    excerpt: 'How a leading tech company automated their customer support and internal processes, saving 200+ hours monthly.',
    fullContent: `
      <h2>Executive Summary</h2>
      <p>TechSolutions Inc, a rapidly growing technology consulting firm, was facing significant challenges in scaling their customer support operations while maintaining quality. With a client base expanding by 40% annually, their manual processes were becoming unsustainable.</p>
      
      <h2>The Challenge</h2>
      <p>Before implementing Neon Byte AI, TechSolutions struggled with:</p>
      <ul>
        <li>High response times during peak hours</li>
        <li>Inconsistent support quality across team members</li>
        <li>Difficulty scaling operations without proportional cost increases</li>
        <li>Limited ability to provide 24/7 support</li>
      </ul>

      <h2>The Solution</h2>
      <p>We implemented a comprehensive AI automation strategy including:</p>
      
      <h3>AI-Powered Customer Support</h3>
      <p>Intelligent chatbots that could handle 80% of common inquiries, with seamless escalation to human agents when needed.</p>
      
      <h3>Workflow Automation</h3>
      <p>Automated internal processes including ticket routing, follow-up scheduling, and knowledge base updates.</p>
      
      <h3>Multi-Agent System</h3>
      <p>Collaborative AI agents that work together to resolve complex customer issues efficiently.</p>

      <h2>Implementation Timeline</h2>
      <p>The project was completed in three phases over three months:</p>
      <ul>
        <li><strong>Month 1:</strong> Requirements analysis and custom AI agent training</li>
        <li><strong>Month 2:</strong> Integration with existing systems and testing</li>
        <li><strong>Month 3:</strong> Full deployment and team training</li>
      </ul>

      <h2>Results & Impact</h2>
      <p>The implementation delivered transformative results across multiple dimensions of their business.</p>
    `,
    results: [
      { metric: '85%', description: 'Increase in operational efficiency' },
      { metric: '200+', description: 'Hours saved per month' },
      { metric: '40%', description: 'Reduction in response time' },
      { metric: '99%', description: 'Customer satisfaction rate' },
      { metric: '50%', description: 'Reduction in operational costs' },
      { metric: '24/7', description: 'Support availability' }
    ],
    duration: '3 months',
    teamSize: '5-person implementation team',
    technologies: ['Neon Byte AI Pro', 'Custom AI Agents', 'Workflow Automation', 'API Integration'],
    image: '/api/placeholder/800/400',
    featured: true,
    logo: 'TS',
    testimonial: {
      text: "Neon Byte AI transformed our customer support operations. We're now handling twice the volume with higher satisfaction scores and significantly lower costs. The ROI was evident within the first month.",
      author: "Sarah Johnson",
      position: "Chief Operations Officer",
      company: "TechSolutions Inc",
      avatar: "SJ"
    },
    nextCaseStudy: {
      id: 2,
      title: 'MediCare Plus: Transforming Patient Care with AI Chatbots',
      industry: 'healthcare'
    }
  };

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

  return (
    <div className="case-study-detail-page">
      {/* Banner */}
      <div className="banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <span className="banner-highlight">NEW:</span> Introducing Neon Byte AI Pro with advanced multi-agent workflows. 
              <span className="banner-highlight"> Try it free for 14 days!</span>
            </div>
          </div>
          <div className="banner-decoration"></div>
        </div>
      </div>

      <Header />
      
      {/* Breadcrumb */}
      <section className="case-study-breadcrumb">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <Link to="/case-studies">Case Studies</Link>
            <span className="separator">/</span>
            <span className="current">{caseStudy.company}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="case-study-hero">
        <div className="container">
          <div className="hero-content">
            <div className="case-study-meta">
              <span 
                className="industry-tag"
                style={{ backgroundColor: getIndustryColor(caseStudy.industry) }}
              >
                {caseStudy.industry.charAt(0).toUpperCase() + caseStudy.industry.slice(1)}
              </span>
              <span className="read-time">8 min read</span>
            </div>
            <h1>{caseStudy.title}</h1>
            <div className="company-info">
              <div className="company-logo-large">
                {caseStudy.logo}
              </div>
              <div className="company-details">
                <h2>{caseStudy.company}</h2>
                <div className="implementation-details">
                  <span className="duration">
                    <i className="fas fa-clock"></i>
                    {caseStudy.duration} implementation
                  </span>
                  <span className="team-size">
                    <i className="fas fa-users"></i>
                    {caseStudy.teamSize}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results Banner */}
      <section className="key-results-banner">
        <div className="container">
          <div className="results-grid">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="result-item-large">
                <div className="result-metric-large">{result.metric}</div>
                <div className="result-description-large">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="case-study-content">
        <div className="container">
          <div className="content-layout">
            {/* Main Article */}
            <article className="case-study-article">
              <div className="article-header">
                <h2>Case Study Overview</h2>
                <p className="lead">{caseStudy.excerpt}</p>
              </div>

              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: caseStudy.fullContent }}
              />

              {/* Technologies Used */}
              <div className="technologies-section">
                <h3>Technologies & Solutions</h3>
                <div className="technologies-grid">
                  {caseStudy.technologies.map((tech, index) => (
                    <div key={index} className="technology-card">
                      <div className="tech-icon">
                        <i className="fas fa-cube"></i>
                      </div>
                      <span className="tech-name">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions Implemented */}
              <div className="solutions-section">
                <h3>AI Solutions Implemented</h3>
                <div className="solutions-list">
                  {caseStudy.solutions.map(solution => (
                    <div 
                      key={solution}
                      className="solution-item"
                      style={{ borderLeftColor: getSolutionColor(solution) }}
                    >
                      <div className="solution-icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="solution-content">
                        <h4>
                          {solution === 'ai-chatbots' && 'AI Chatbots'}
                          {solution === 'automation' && 'Workflow Automation'}
                          {solution === 'ai-agents' && 'AI Agents'}
                          {solution === 'analytics' && 'AI Analytics'}
                        </h4>
                        <p>
                          {solution === 'ai-chatbots' && 'Intelligent conversational agents for customer support and engagement'}
                          {solution === 'automation' && 'Automated business processes and workflow optimization'}
                          {solution === 'ai-agents' && 'Autonomous agents for complex task execution and decision making'}
                          {solution === 'analytics' && 'Advanced data analysis and insights generation'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="case-study-sidebar">
              {/* Download Case Study */}
              <div className="sidebar-widget">
                <h3>Download Case Study</h3>
                <p>Get the complete case study in PDF format for offline reading and sharing.</p>
                <button className="btn btn-primary btn-full">
                  <i className="fas fa-download"></i>
                  Download PDF
                </button>
              </div>

              {/* Testimonial */}
              <div className="sidebar-widget testimonial-widget">
                <h3>Client Testimonial</h3>
                <div className="testimonial-content">
                  <div className="testimonial-text">
                    "{caseStudy.testimonial.text}"
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {caseStudy.testimonial.avatar}
                    </div>
                    <div className="author-info">
                      <div className="author-name">{caseStudy.testimonial.author}</div>
                      <div className="author-position">{caseStudy.testimonial.position}</div>
                      <div className="author-company">{caseStudy.testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="sidebar-widget cta-widget">
                <h3>Ready to Get Started?</h3>
                <p>See how Neon Byte AI can transform your business operations.</p>
                <div className="cta-actions">
                  <Link to="/get-started" className="btn btn-primary btn-full">
                    Start Free Trial
                  </Link>
                  <Link to="/contact" className="btn btn-outline btn-full">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="next-case-study">
        <div className="container">
          <div className="next-case-study-content">
            <h3>Next Case Study</h3>
            <div className="next-case-study-card">
              <div className="next-study-info">
                <span 
                  className="industry-tag"
                  style={{ backgroundColor: getIndustryColor(caseStudy.nextCaseStudy.industry) }}
                >
                  {caseStudy.nextCaseStudy.industry}
                </span>
                <h4>{caseStudy.nextCaseStudy.title}</h4>
                <Link 
                  to={`/case-studies/${caseStudy.nextCaseStudy.id}`}
                  className="btn btn-outline"
                >
                  Read Next Case Study
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
