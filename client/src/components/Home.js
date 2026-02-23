import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home = () => {
  const navigate = useNavigate();
  useScrollAnimation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleCTAClick = () => {
    navigate('/get-started');
  };

  const handleWatchDemo = () => {
    // You can replace this with actual demo video functionality
    alert('Demo video would play here!');
  };

  return (
    <div className="home-page">
      {/* Banner */}
      <div className="banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <span className="banner-highlight">NEW:</span> Introducing Neon Byte AI Pro with advanced multi-agent workflows.
              <span className="banner-highlight">Experience the future today!</span>
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
            <h1>Accelerate Your Evolution with Neon Byte AI</h1>
            <p>Deploy the next generation of high-fidelity AI chatbots, autonomous agents, and neural automation tools.</p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => handleNavigation('/ai-tools')}
              >
                Explore AI Tools
              </button>
              <button
                className="btn btn-outline"
                onClick={handleWatchDemo}
              >
                Watch Demo
              </button>
            </div>
            <div className="floating-cards">
              <div className="card floating">
                <div className="card-icon">
                  <i className="fas fa-comment-dots"></i>
                </div>
                <h3>AI Chatbots</h3>
                <p>Intelligent conversational agents for customer support, sales, and engagement.</p>
              </div>
              <div className="card floating delay-1">
                <div className="card-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3>AI Agents</h3>
                <p>Autonomous agents that can perform complex tasks and workflows.</p>
              </div>
              <div className="card floating delay-2">
                <div className="card-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h3>AI Automation</h3>
                <p>Streamline repetitive tasks with intelligent automation solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="showcase">
        <div className="container">
          <div className="showcase-content">
            <div className="showcase-text">
              <h2 className="section-title">Visualize Your AI-Powered Future</h2>
              <p className="section-subtitle">Our platform provides intuitive interfaces to manage and interact with your AI tools. See real-time analytics, configure workflows, and monitor performance all in one place.</p>
              <div className="hero-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() => handleNavigation('/dashboard')}
                >
                  View Dashboard
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() => handleNavigation('/ai-tools')}
                >
                  See Examples
                </button>
              </div>
            </div>
            <div className="showcase-visual">
              <div className="visual-container">
                <div className="visual-item visual-1 floating">
                  <div className="visual-icon">
                    <i className="fas fa-chart-bar"></i>
                  </div>
                  <span>AI Analytics Dashboard</span>
                </div>
                <div className="visual-item visual-2 floating delay-1">
                  <div className="visual-icon">
                    <i className="fas fa-project-diagram"></i>
                  </div>
                  <span>Workflow Builder</span>
                </div>
                <div className="visual-item visual-3 floating delay-2">
                  <div className="visual-icon">
                    <i className="fas fa-users-cog"></i>
                  </div>
                  <span>Agent Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Powerful AI Capabilities</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
            Unlock the full potential of artificial intelligence with our comprehensive suite of tools and features.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-language"></i>
              </div>
              <h3>Natural Language Processing</h3>
              <p>Advanced NLP models that understand context, sentiment, and intent for more human-like interactions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Predictive Analytics</h3>
              <p>Leverage machine learning to forecast trends, behaviors, and outcomes with remarkable accuracy.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3>Autonomous Agents</h3>
              <p>AI agents that can independently execute tasks, make decisions, and learn from outcomes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Enterprise Security</h3>
              <p>Bank-grade security protocols to ensure your data and AI operations remain protected.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h3>Seamless Integration</h3>
              <p>Easy integration with your existing tools and workflows through flexible APIs and connectors.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-expand-arrows-alt"></i>
              </div>
              <h3>Scalable Infrastructure</h3>
              <p>Our platform grows with your needs, handling from small tasks to enterprise-level operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Hear from businesses that have transformed their operations with our AI solutions.</p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>The AI chatbots we implemented have reduced our customer support response time by 80% while maintaining high satisfaction ratings.</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">SJ</div>
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <p>CTO, TechSolutions Inc.</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>Neon Byte AI's predictive analytics helped us identify new market opportunities we had completely overlooked. Our revenue increased by 35% in just 6 months.</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">MR</div>
                <div className="author-info">
                  <h4>Michael Rodriguez</h4>
                  <p>CEO, GrowthLabs</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>The autonomous agents have automated our most time-consuming workflows, freeing up our team to focus on strategic initiatives. It's been a game-changer.</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">EC</div>
                <div className="author-info">
                  <h4>Emily Chen</h4>
                  <p>Operations Director, InnovateCo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content pulse">
            <h2>Ready to Transform Your Business with AI?</h2>
            <p>Join thousands of forward-thinking companies leveraging our AI tools to drive innovation and efficiency.</p>
            <button className="btn btn-primary" onClick={handleCTAClick}>
              Start Free Trial
            </button>
            <p style={{ marginTop: '20px', fontSize: '0.9rem', opacity: '0.8' }}>
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
