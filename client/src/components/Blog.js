import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogCategories = [
    { id: 'all', name: 'All Articles', count: 24 },
    { id: 'tutorials', name: 'Tutorials', count: 8 },
    { id: 'industry', name: 'Industry Insights', count: 6 },
    { id: 'updates', name: 'Product Updates', count: 5 },
    { id: 'case-studies', name: 'Case Studies', count: 3 },
    { id: 'technology', name: 'AI Technology', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with AI Chatbots: A Complete Guide',
      excerpt: 'Learn how to implement and optimize AI chatbots for customer service, lead generation, and user engagement.',
      category: 'tutorials',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'The Future of Work: How AI Agents Are Transforming Businesses',
      excerpt: 'Explore how autonomous AI agents are revolutionizing business operations and creating new opportunities.',
      category: 'industry',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '12 min read',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 3,
      title: 'Introducing Neon Byte AI Pro: Advanced Multi-Agent Workflows',
      excerpt: 'Announcing our most powerful AI platform yet with collaborative multi-agent systems and enhanced automation.',
      category: 'updates',
      author: 'Neon Byte AI Team',
      date: '2024-01-10',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'How TechSolutions Increased Efficiency by 85% with Automation',
      excerpt: 'Case study on how TechSolutions implemented our automation tools to streamline their workflow processes.',
      category: 'case-studies',
      author: 'Emily Watson',
      date: '2024-01-08',
      readTime: '10 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Understanding Transformer Models in Modern AI Systems',
      excerpt: 'Deep dive into transformer architecture and how it powers today\'s most advanced AI applications.',
      category: 'technology',
      author: 'Dr. James Kim',
      date: '2024-01-05',
      readTime: '15 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: '5 Workflow Automation Strategies That Save 10+ Hours Weekly',
      excerpt: 'Practical automation strategies you can implement today to reclaim valuable time and boost productivity.',
      category: 'tutorials',
      author: 'Lisa Thompson',
      date: '2024-01-03',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 7,
      title: 'AI in Healthcare: Revolutionizing Patient Care and Diagnostics',
      excerpt: 'How AI technologies are transforming healthcare delivery and improving patient outcomes worldwide.',
      category: 'industry',
      author: 'Dr. Amanda Foster',
      date: '2023-12-28',
      readTime: '11 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 8,
      title: 'New Integration: Connect Neon Byte AI with Your Favorite Tools',
      excerpt: 'We\'ve added 15 new integrations to help you connect Neon Byte AI with your existing workflow tools.',
      category: 'updates',
      author: 'Neon Byte AI Team',
      date: '2023-12-25',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getCategoryColor = (category) => {
    const colors = {
      tutorials: '#4CAF50',
      industry: '#2196F3',
      updates: '#FF9800',
      'case-studies': '#9C27B0',
      technology: '#F44336'
    };
    return colors[category] || 'var(--primary)';
  };

  return (
    <div className="blog-page">
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
      
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Neon Byte AI Blog</h1>
            <p>Insights, tutorials, and updates on AI technology, automation, and the future of intelligent business solutions.</p>
            
            <div className="search-container">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="featured-posts">
          <div className="container">
            <h2 className="section-title">Featured Articles</h2>
            <div className="featured-grid">
              {featuredPosts.map(post => (
                <article key={post.id} className="featured-card">
                  <div className="post-image">
                    <div 
                      className="image-placeholder"
                      style={{ 
                        background: `linear-gradient(135deg, ${getCategoryColor(post.category)}20, var(--primary)20)`
                      }}
                    >
                      <i className="fas fa-newspaper"></i>
                    </div>
                    <div 
                      className="category-tag"
                      style={{ backgroundColor: getCategoryColor(post.category) }}
                    >
                      {blogCategories.find(cat => cat.id === post.category)?.name}
                    </div>
                  </div>
                  <div className="post-content">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="post-meta">
                      <div className="author">
                        <div className="author-avatar">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="author-info">
                          <span className="author-name">{post.author}</span>
                          <span className="post-date">{formatDate(post.date)}</span>
                        </div>
                      </div>
                      <span className="read-time">{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="read-more">
                      Read Article <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="blog-main">
        <div className="container">
          <div className="blog-layout">
            {/* Sidebar */}
            <div className="blog-sidebar">
              <div className="sidebar-section">
                <h3>Categories</h3>
                <div className="category-filters">
                  {blogCategories.map(category => (
                    <button
                      key={category.id}
                      className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <span className="category-name">{category.name}</span>
                      <span className="post-count">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Popular Tags</h3>
                <div className="tags-cloud">
                  {['AI Chatbots', 'Automation', 'Machine Learning', 'Productivity', 'Workflow', 'Integration', 'AI Agents', 'Business Intelligence'].map(tag => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Subscribe</h3>
                <p>Get the latest AI insights and updates delivered to your inbox.</p>
                <div className="subscribe-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="subscribe-input"
                  />
                  <button className="btn btn-primary btn-small">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="blog-content">
              <div className="posts-header">
                <h2>
                  {activeCategory === 'all' ? 'All Articles' : blogCategories.find(cat => cat.id === activeCategory)?.name}
                  <span className="posts-count"> ({filteredPosts.length})</span>
                </h2>
              </div>

              <div className="posts-grid">
                {filteredPosts.map(post => (
                  <article key={post.id} className="post-card">
                    <div className="post-image">
                      <div 
                        className="image-placeholder"
                        style={{ 
                          background: `linear-gradient(135deg, ${getCategoryColor(post.category)}20, var(--primary)20)`
                        }}
                      >
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <div 
                        className="category-tag"
                        style={{ backgroundColor: getCategoryColor(post.category) }}
                      >
                        {blogCategories.find(cat => cat.id === post.category)?.name}
                      </div>
                    </div>
                    <div className="post-content">
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <div className="post-meta">
                        <div className="author">
                          <div className="author-avatar">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="author-info">
                            <span className="author-name">{post.author}</span>
                            <span className="post-date">{formatDate(post.date)}</span>
                          </div>
                        </div>
                        <span className="read-time">{post.readTime}</span>
                      </div>
                      <Link to={`/blog/${post.id}`} className="read-more">
                        Read Article <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="no-posts">
                  <i className="fas fa-search"></i>
                  <h3>No posts found</h3>
                  <p>Try adjusting your search or category filter</p>
                </div>
              )}

              {/* Load More */}
              {filteredPosts.length > 0 && (
                <div className="load-more">
                  <button className="btn btn-outline">
                    Load More Articles
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
