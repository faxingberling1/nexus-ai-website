import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Tutorials = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDifficulty, setActiveDifficulty] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const tutorialCategories = [
    { id: 'all', name: 'All Tutorials', icon: 'fas fa-graduation-cap', count: 18 },
    { id: 'getting-started', name: 'Getting Started', icon: 'fas fa-rocket', count: 5 },
    { id: 'ai-chatbots', name: 'AI Chatbots', icon: 'fas fa-comment-dots', count: 4 },
    { id: 'ai-agents', name: 'AI Agents', icon: 'fas fa-robot', count: 3 },
    { id: 'automation', name: 'Automation', icon: 'fas fa-cogs', count: 4 },
    { id: 'integrations', name: 'Integrations', icon: 'fas fa-plug', count: 2 }
  ];

  const difficultyLevels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with Nexus AI: First Steps',
      description: 'Complete beginner guide to setting up your account and making your first API call.',
      category: 'getting-started',
      difficulty: 'beginner',
      duration: '15 min',
      lessons: 5,
      progress: 0,
      image: '/api/placeholder/400/250',
      featured: true,
      new: true
    },
    {
      id: 2,
      title: 'Building Your First AI Chatbot',
      description: 'Learn how to create, train, and deploy an intelligent chatbot for customer service.',
      category: 'ai-chatbots',
      difficulty: 'beginner',
      duration: '45 min',
      lessons: 8,
      progress: 0,
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 3,
      title: 'Advanced AI Agent Architecture',
      description: 'Deep dive into building complex multi-agent systems with autonomous decision making.',
      category: 'ai-agents',
      difficulty: 'advanced',
      duration: '2 hours',
      lessons: 12,
      progress: 0,
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 4,
      title: 'Workflow Automation Masterclass',
      description: 'Automate complex business processes with intelligent workflow builders.',
      category: 'automation',
      difficulty: 'intermediate',
      duration: '1 hour',
      lessons: 6,
      progress: 0,
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'API Integration Guide',
      description: 'Learn how to integrate Nexus AI with popular platforms and services.',
      category: 'integrations',
      difficulty: 'intermediate',
      duration: '30 min',
      lessons: 4,
      progress: 0,
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Natural Language Processing Basics',
      description: 'Understand how NLP works and how to leverage it in your applications.',
      category: 'ai-chatbots',
      difficulty: 'beginner',
      duration: '25 min',
      lessons: 3,
      progress: 0,
      image: '/api/placeholder/400/250'
    },
    {
      id: 7,
      title: 'Custom Agent Training',
      description: 'Train custom AI agents for specific business use cases and domains.',
      category: 'ai-agents',
      difficulty: 'intermediate',
      duration: '1.5 hours',
      lessons: 7,
      progress: 0,
      image: '/api/placeholder/400/250'
    },
    {
      id: 8,
      title: 'Advanced Automation Patterns',
      description: 'Learn sophisticated automation patterns for enterprise-level workflows.',
      category: 'automation',
      difficulty: 'advanced',
      duration: '2.5 hours',
      lessons: 10,
      progress: 0,
      image: '/api/placeholder/400/250'
    },
    {
      id: 9,
      title: 'Webhook Integration Tutorial',
      description: 'Set up real-time webhook integrations for instant notifications and data sync.',
      category: 'integrations',
      difficulty: 'intermediate',
      duration: '20 min',
      lessons: 2,
      progress: 0,
      image: '/api/placeholder/400/250'
    }
  ];

  const learningPaths = [
    {
      id: 1,
      title: 'AI Chatbot Developer Path',
      description: 'Become proficient in building and deploying AI chatbots',
      category: 'ai-chatbots',
      duration: '8 hours',
      courses: 6,
      level: 'Beginner to Advanced',
      color: '#4CAF50'
    },
    {
      id: 2,
      title: 'Automation Specialist Path',
      description: 'Master workflow automation and process optimization',
      category: 'automation',
      duration: '10 hours',
      courses: 8,
      level: 'Intermediate to Advanced',
      color: '#2196F3'
    },
    {
      id: 3,
      title: 'AI Agent Architect Path',
      description: 'Learn to design and implement complex AI agent systems',
      category: 'ai-agents',
      duration: '12 hours',
      courses: 10,
      level: 'Advanced',
      color: '#9C27B0'
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesCategory = activeCategory === 'all' || tutorial.category === activeCategory;
    const matchesDifficulty = activeDifficulty === 'all' || tutorial.difficulty === activeDifficulty;
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    const colors = {
      beginner: '#4CAF50',
      intermediate: '#FF9800',
      advanced: '#F44336'
    };
    return colors[difficulty] || 'var(--primary)';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'getting-started': 'var(--primary)',
      'ai-chatbots': '#4CAF50',
      'ai-agents': '#9C27B0',
      'automation': '#2196F3',
      'integrations': '#FF9800'
    };
    return colors[category] || 'var(--primary)';
  };

  const ProgressBar = ({ progress }) => (
    <div className="progress-container">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="progress-text">{progress}% Complete</span>
    </div>
  );

  return (
    <div className="tutorials-page">
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
      <section className="tutorials-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Learn Nexus AI</h1>
            <p>Master AI tools and automation with our comprehensive tutorials and learning paths. From beginner to expert level.</p>
            
            <div className="search-container">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search tutorials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="learning-paths">
        <div className="container">
          <h2 className="section-title">Structured Learning Paths</h2>
          <p className="section-subtitle">Follow curated paths to master specific skills and technologies</p>
          
          <div className="paths-grid">
            {learningPaths.map(path => (
              <div key={path.id} className="path-card">
                <div 
                  className="path-header"
                  style={{ backgroundColor: path.color }}
                >
                  <h3>{path.title}</h3>
                  <div className="path-duration">{path.duration}</div>
                </div>
                <div className="path-content">
                  <p>{path.description}</p>
                  <div className="path-meta">
                    <div className="meta-item">
                      <i className="fas fa-book"></i>
                      <span>{path.courses} Courses</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-signal"></i>
                      <span>{path.level}</span>
                    </div>
                  </div>
                  <div className="path-actions">
                    <button className="btn btn-primary btn-small">
                      Start Path
                    </button>
                    <button className="btn btn-outline btn-small">
                      View Courses
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="featured-tutorials">
        <div className="container">
          <h2 className="section-title">Featured Tutorials</h2>
          <div className="featured-grid">
            {tutorials.filter(t => t.featured).map(tutorial => (
              <div key={tutorial.id} className="featured-tutorial-card">
                <div className="tutorial-image">
                  <div 
                    className="image-placeholder"
                    style={{ 
                      background: `linear-gradient(135deg, ${getCategoryColor(tutorial.category)}20, var(--primary)20)`
                    }}
                  >
                    <i className="fas fa-play-circle"></i>
                  </div>
                  <div className="tutorial-badges">
                    {tutorial.new && <span className="badge new">New</span>}
                    <span 
                      className="badge difficulty"
                      style={{ backgroundColor: getDifficultyColor(tutorial.difficulty) }}
                    >
                      {tutorial.difficulty}
                    </span>
                  </div>
                </div>
                <div className="tutorial-content">
                  <div className="category-tag" style={{ color: getCategoryColor(tutorial.category) }}>
                    {tutorialCategories.find(cat => cat.id === tutorial.category)?.name}
                  </div>
                  <h3>{tutorial.title}</h3>
                  <p>{tutorial.description}</p>
                  <div className="tutorial-meta">
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-list-ol"></i>
                      <span>{tutorial.lessons} lessons</span>
                    </div>
                  </div>
                  {tutorial.progress > 0 ? (
                    <ProgressBar progress={tutorial.progress} />
                  ) : (
                    <Link to={`/tutorials/${tutorial.id}`} className="btn btn-primary">
                      Start Learning
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Tutorials Grid */}
      <section className="tutorials-main">
        <div className="container">
          <div className="tutorials-header">
            <h2>All Tutorials</h2>
            <div className="filters">
              <div className="filter-group">
                <label>Category:</label>
                <select 
                  value={activeCategory} 
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="filter-select"
                >
                  {tutorialCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter-group">
                <label>Difficulty:</label>
                <select 
                  value={activeDifficulty} 
                  onChange={(e) => setActiveDifficulty(e.target.value)}
                  className="filter-select"
                >
                  {difficultyLevels.map(level => (
                    <option key={level.id} value={level.id}>
                      {level.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="tutorials-grid">
            {filteredTutorials.map(tutorial => (
              <div key={tutorial.id} className="tutorial-card">
                <div className="tutorial-image">
                  <div 
                    className="image-placeholder"
                    style={{ 
                      background: `linear-gradient(135deg, ${getCategoryColor(tutorial.category)}20, var(--primary)20)`
                    }}
                  >
                    <i className="fas fa-play-circle"></i>
                  </div>
                  <div className="tutorial-badges">
                    {tutorial.new && <span className="badge new">New</span>}
                    <span 
                      className="badge difficulty"
                      style={{ backgroundColor: getDifficultyColor(tutorial.difficulty) }}
                    >
                      {tutorial.difficulty}
                    </span>
                  </div>
                </div>
                <div className="tutorial-content">
                  <div className="category-tag" style={{ color: getCategoryColor(tutorial.category) }}>
                    {tutorialCategories.find(cat => cat.id === tutorial.category)?.name}
                  </div>
                  <h3>{tutorial.title}</h3>
                  <p>{tutorial.description}</p>
                  <div className="tutorial-meta">
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-list-ol"></i>
                      <span>{tutorial.lessons} lessons</span>
                    </div>
                  </div>
                  {tutorial.progress > 0 ? (
                    <ProgressBar progress={tutorial.progress} />
                  ) : (
                    <Link to={`/tutorials/${tutorial.id}`} className="btn btn-outline btn-small">
                      Start Tutorial
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredTutorials.length === 0 && (
            <div className="no-tutorials">
              <i className="fas fa-search"></i>
              <h3>No tutorials found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="tutorials-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Learning?</h2>
            <p>Join thousands of developers and businesses mastering AI with our comprehensive tutorials.</p>
            <div className="cta-buttons">
              <Link to="/get-started" className="btn btn-primary btn-large">
                Get Started Free
              </Link>
              <Link to="/documentation" className="btn btn-outline btn-large">
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tutorials;