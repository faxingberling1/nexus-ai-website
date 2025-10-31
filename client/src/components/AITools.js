import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AITools = () => {
  const navigate = useNavigate();
  useScrollAnimation();

  const tools = [
    {
      id: 1,
      icon: 'fas fa-robot',
      title: 'AI Chat Assistant',
      description: 'Advanced conversational AI that understands context and provides intelligent responses.',
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Custom Training'],
      price: 'Free',
      category: 'chat',
      popular: true
    },
    {
      id: 2,
      icon: 'fas fa-image',
      title: 'Image Generator',
      description: 'Create stunning images from text descriptions using state-of-the-art AI models.',
      features: ['Text-to-Image Generation', 'Style Transfer', 'Image Editing', 'High Resolution'],
      price: 'Premium',
      category: 'creative',
      popular: false
    },
    {
      id: 3,
      icon: 'fas fa-code',
      title: 'Code Assistant',
      description: 'AI-powered coding companion that helps you write better code faster.',
      features: ['Code Completion', 'Bug Detection', 'Code Explanation', 'Multi-language Support'],
      price: 'Free',
      category: 'development',
      popular: true
    },
    {
      id: 4,
      icon: 'fas fa-chart-bar',
      title: 'Data Analyzer',
      description: 'Automated data analysis and visualization tools powered by machine learning.',
      features: ['Pattern Recognition', 'Predictive Analytics', 'Data Visualization', 'Automated Reports'],
      price: 'Premium',
      category: 'analytics',
      popular: false
    },
    {
      id: 5,
      icon: 'fas fa-file-alt',
      title: 'Content Writer',
      description: 'Generate high-quality content for blogs, social media, and marketing materials.',
      features: ['SEO Optimization', 'Tone Adjustment', 'Plagiarism Check', 'Multiple Formats'],
      price: 'Free',
      category: 'content',
      popular: true
    },
    {
      id: 6,
      icon: 'fas fa-video',
      title: 'Video Generator',
      description: 'Create engaging videos from text scripts with AI-powered voice and animation.',
      features: ['Text-to-Video', 'Voice Synthesis', 'Auto-editing', 'Multiple Styles'],
      price: 'Premium',
      category: 'creative',
      popular: false
    },
    {
      id: 7,
      icon: 'fas fa-music',
      title: 'Audio Studio',
      description: 'AI-powered audio processing, music generation, and voice enhancement tools.',
      features: ['Music Composition', 'Voice Cloning', 'Audio Enhancement', 'Noise Removal'],
      price: 'Premium',
      category: 'audio',
      popular: false
    },
    {
      id: 8,
      icon: 'fas fa-language',
      title: 'Language Translator',
      description: 'Real-time translation across 100+ languages with context preservation.',
      features: ['Real-time Translation', 'Context Awareness', 'Document Translation', 'Voice Translation'],
      price: 'Free',
      category: 'language',
      popular: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', icon: 'fas fa-th', count: tools.length },
    { id: 'chat', name: 'Chat & Conversation', icon: 'fas fa-comments', count: tools.filter(t => t.category === 'chat').length },
    { id: 'creative', name: 'Creative', icon: 'fas fa-palette', count: tools.filter(t => t.category === 'creative').length },
    { id: 'development', name: 'Development', icon: 'fas fa-code', count: tools.filter(t => t.category === 'development').length },
    { id: 'analytics', name: 'Analytics', icon: 'fas fa-chart-line', count: tools.filter(t => t.category === 'analytics').length },
    { id: 'content', name: 'Content', icon: 'fas fa-edit', count: tools.filter(t => t.category === 'content').length },
    { id: 'audio', name: 'Audio', icon: 'fas fa-music', count: tools.filter(t => t.category === 'audio').length },
    { id: 'language', name: 'Language', icon: 'fas fa-globe', count: tools.filter(t => t.category === 'language').length }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTryTool = (toolId) => {
    navigate('/get-started', { state: { selectedTool: toolId } });
  };

  return (
    <div className="page-container">
      {/* Top Banner */}
      <div className="banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <span className="banner-highlight">NEW:</span> Advanced AI Tools with enhanced capabilities and faster processing. 
              <span className="banner-highlight"> Try them free for 14 days!</span>
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
            <h1>AI Tools & Solutions</h1>
            <p>Discover our comprehensive suite of AI tools designed to transform your workflow and boost productivity.</p>
            <div className="search-bar">
              <div className="search-container">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Search AI tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <div className="categories-grid">
            {categories.map(category => (
              <div
                key={category.id}
                className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <span>{category.count} tools</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="tools-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {selectedCategory === 'all' ? 'All AI Tools' : 
               categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="section-subtitle">
              {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'} available
            </p>
          </div>

          <div className="tools-grid">
            {filteredTools.map(tool => (
              <div key={tool.id} className="tool-card">
                <div className="tool-badges">
                  {tool.popular && <div className="popular-badge">Most Popular</div>}
                  <span className={`price-tag ${tool.price.toLowerCase()}`}>
                    {tool.price}
                  </span>
                </div>
                <div className="tool-header">
                  <div className="tool-icon">
                    <i className={tool.icon}></i>
                  </div>
                </div>
                <div className="tool-content">
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                  <div className="tool-features">
                    {tool.features.map((feature, index) => (
                      <span key={index} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="tool-actions">
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleTryTool(tool.id)}
                  >
                    Try Now
                  </button>
                  <button className="btn btn-outline">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="no-results">
              <i className="fas fa-search fa-3x"></i>
              <h3>No tools found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our AI Tools?</h2>
            <p className="section-subtitle">Built with cutting-edge technology and designed for real-world applications</p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Lightning Fast</h3>
              <p>Process complex tasks in seconds with our optimized AI models and infrastructure.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Enterprise Security</h3>
              <p>Your data is protected with bank-level security and privacy-first architecture.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h3>Continuous Updates</h3>
              <p>Always have access to the latest AI models and features with automatic updates.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>24/7 Support</h3>
              <p>Get help whenever you need it with our dedicated support team and documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Supercharge Your Workflow?</h2>
            <p>Join thousands of professionals already using our AI tools to achieve remarkable results.</p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/get-started')}
              >
                Start Free Trial
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => navigate('/pricing')}
              >
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

export default AITools;