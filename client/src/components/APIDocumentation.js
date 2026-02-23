import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const APIDocumentation = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [activeEndpoint, setActiveEndpoint] = useState('chat-completions');

  const apiSections = [
    { id: 'getting-started', name: 'Getting Started', icon: 'fas fa-rocket' },
    { id: 'authentication', name: 'Authentication', icon: 'fas fa-key' },
    { id: 'endpoints', name: 'Endpoints', icon: 'fas fa-code' },
    { id: 'sdks', name: 'SDKs & Libraries', icon: 'fas fa-cube' },
    { id: 'examples', name: 'Examples', icon: 'fas fa-laptop-code' },
    { id: 'rate-limits', name: 'Rate Limits', icon: 'fas fa-tachometer-alt' },
    { id: 'error-codes', name: 'Error Codes', icon: 'fas fa-exclamation-triangle' }
  ];

  const endpoints = [
    {
      id: 'chat-completions',
      name: 'Chat Completions',
      method: 'POST',
      path: '/v1/chat/completions',
      description: 'Generate conversational responses using AI models'
    },
    {
      id: 'agents-create',
      name: 'Create Agent',
      method: 'POST',
      path: '/v1/agents',
      description: 'Create a new AI agent with specific capabilities'
    },
    {
      id: 'agents-list',
      name: 'List Agents',
      method: 'GET',
      path: '/v1/agents',
      description: 'Retrieve a list of all your AI agents'
    },
    {
      id: 'workflows-execute',
      name: 'Execute Workflow',
      method: 'POST',
      path: '/v1/workflows/execute',
      description: 'Run a predefined automation workflow'
    },
    {
      id: 'files-upload',
      name: 'Upload File',
      method: 'POST',
      path: '/v1/files',
      description: 'Upload files for AI processing and analysis'
    }
  ];

  const codeExamples = {
    'chat-completions': `// JavaScript Example
const response = await fetch('https://api.nexus-ai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    model: 'nexus-pro',
    messages: [
      { role: 'user', content: 'Hello, how can you help me?' }
    ],
    temperature: 0.7,
    max_tokens: 500
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);`,

    'agents-create': `// Python Example
import requests

url = "https://api.nexus-ai.com/v1/agents"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "name": "Customer Support Agent",
    "type": "support",
    "capabilities": ["answer_questions", "ticket_routing"],
    "config": {
        "temperature": 0.3,
        "max_tokens": 1000
    }
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <div className="api-content">
            <h2>Getting Started with Neon Byte AI API</h2>
            <p>Welcome to the Neon Byte AI API documentation. Our API provides programmatic access to powerful AI capabilities including chatbots, autonomous agents, and workflow automation.</p>
            
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Get Your API Key</h3>
                <p>Sign up for an account and generate your API key from the dashboard.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Make Your First Request</h3>
                <p>Use the API key to authenticate and make requests to our endpoints.</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Integrate & Scale</h3>
                <p>Build your application and scale with our reliable infrastructure.</p>
              </div>
            </div>

            <div className="code-block">
              <div className="code-header">
                <span>Quick Start Example</span>
                <button className="btn-copy">Copy</button>
              </div>
              <pre><code>{`curl -X POST https://api.nexus-ai.com/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "nexus-pro",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`}</code></pre>
            </div>
          </div>
        );

      case 'authentication':
        return (
          <div className="api-content">
            <h2>Authentication</h2>
            <p>All API requests require authentication using your API key. Include the key in the Authorization header of your requests.</p>
            
            <div className="auth-methods">
              <div className="auth-method">
                <h3>Bearer Token Authentication</h3>
                <p>Use your API key as a Bearer token in the Authorization header:</p>
                <div className="code-block">
                  <pre><code>{`Authorization: Bearer YOUR_API_KEY_HERE`}</code></pre>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="info-content">
                <h4>Security Best Practices</h4>
                <ul>
                  <li>Never commit API keys to version control</li>
                  <li>Use environment variables for API keys</li>
                  <li>Rotate your API keys regularly</li>
                  <li>Use the appropriate scope for your API keys</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'endpoints':
        return (
          <div className="api-content">
            <h2>API Endpoints</h2>
            <p>Explore available endpoints to integrate Neon Byte AI capabilities into your applications.</p>
            
            <div className="endpoints-list">
              {endpoints.map(endpoint => (
                <div 
                  key={endpoint.id}
                  className={`endpoint-item ${activeEndpoint === endpoint.id ? 'active' : ''}`}
                  onClick={() => setActiveEndpoint(endpoint.id)}
                >
                  <div className="endpoint-method">{endpoint.method}</div>
                  <div className="endpoint-info">
                    <h4>{endpoint.name}</h4>
                    <p>{endpoint.description}</p>
                    <code>{endpoint.path}</code>
                  </div>
                </div>
              ))}
            </div>

            {activeEndpoint && (
              <div className="endpoint-detail">
                <h3>{endpoints.find(e => e.id === activeEndpoint)?.name}</h3>
                <div className="endpoint-spec">
                  <div className="spec-item">
                    <strong>Method:</strong> 
                    <span className={`method-${endpoints.find(e => e.id === activeEndpoint)?.method.toLowerCase()}`}>
                      {endpoints.find(e => e.id === activeEndpoint)?.method}
                    </span>
                  </div>
                  <div className="spec-item">
                    <strong>Path:</strong> 
                    <code>{endpoints.find(e => e.id === activeEndpoint)?.path}</code>
                  </div>
                </div>

                {codeExamples[activeEndpoint] && (
                  <div className="code-block">
                    <div className="code-header">
                      <span>Code Example</span>
                      <button className="btn-copy">Copy</button>
                    </div>
                    <pre><code>{codeExamples[activeEndpoint]}</code></pre>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case 'sdks':
        return (
          <div className="api-content">
            <h2>SDKs & Libraries</h2>
            <p>Official and community-maintained libraries to help you get started quickly.</p>
            
            <div className="sdks-grid">
              <div className="sdk-card">
                <div className="sdk-icon">
                  <i className="fab fa-js"></i>
                </div>
                <h3>JavaScript/Node.js</h3>
                <p>Official Node.js SDK with TypeScript support</p>
                <code>npm install nexus-ai-sdk</code>
                <a href="#" className="btn btn-outline">View Documentation</a>
              </div>
              
              <div className="sdk-card">
                <div className="sdk-icon">
                  <i className="fab fa-python"></i>
                </div>
                <h3>Python</h3>
                <p>Python client with async support</p>
                <code>pip install nexus-ai</code>
                <a href="#" className="btn btn-outline">View Documentation</a>
              </div>
              
              <div className="sdk-card">
                <div className="sdk-icon">
                  <i className="fab fa-java"></i>
                </div>
                <h3>Java</h3>
                <p>Java client for enterprise applications</p>
                <code>implementation 'ai.nexus:client:1.0.0'</code>
                <a href="#" className="btn btn-outline">View Documentation</a>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="api-content">
            <h2>{apiSections.find(s => s.id === activeSection)?.name}</h2>
            <p>Detailed documentation for this section is coming soon. In the meantime, check out our getting started guide or explore the available endpoints.</p>
          </div>
        );
    }
  };

  return (
    <div className="api-documentation-page">
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
      <section className="api-hero">
        <div className="container">
          <div className="hero-content">
            <h1>API Documentation</h1>
            <p>Complete reference for integrating Neon Byte AI capabilities into your applications with our powerful REST API.</p>
            <div className="hero-buttons">
              <Link to="/get-started" className="btn btn-primary">
                Get API Key
              </Link>
              <a href="#quick-start" className="btn btn-outline">
                Quick Start Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="api-main">
        <div className="container">
          <div className="api-layout">
            {/* Sidebar Navigation */}
            <div className="api-sidebar">
              <div className="sidebar-section">
                <h3>Documentation</h3>
                <ul className="sidebar-nav">
                  {apiSections.map(section => (
                    <li key={section.id}>
                      <button
                        className={`sidebar-link ${activeSection === section.id ? 'active' : ''}`}
                        onClick={() => setActiveSection(section.id)}
                      >
                        <i className={section.icon}></i>
                        {section.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="sidebar-help">
                <h4>Need Help?</h4>
                <p>Our team is here to assist you with integration and troubleshooting.</p>
                <div className="help-links">
                  <a href="#" className="help-link">
                    <i className="fas fa-comments"></i>
                    Community Forum
                  </a>
                  <a href="#" className="help-link">
                    <i className="fas fa-envelope"></i>
                    Support Email
                  </a>
                  <a href="#" className="help-link">
                    <i className="fab fa-github"></i>
                    GitHub Issues
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="api-content-area">
              {renderContent()}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APIDocumentation;
