import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Pricing = () => {
  const navigate = useNavigate();
  useScrollAnimation();
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [activeTab, setActiveTab] = useState('all-tools');

  const toolCategories = [
    { id: 'all-tools', name: 'All Tools', icon: 'fas fa-th' },
    { id: 'chat-agents', name: 'Chat & Agents', icon: 'fas fa-robot' },
    { id: 'creative', name: 'Creative AI', icon: 'fas fa-palette' },
    { id: 'development', name: 'Development', icon: 'fas fa-code' },
    { id: 'analytics', name: 'Analytics', icon: 'fas fa-chart-bar' },
    { id: 'content', name: 'Content', icon: 'fas fa-edit' }
  ];

  const bundlePlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for individuals and small projects',
      monthlyPrice: 29,
      yearlyPrice: 290,
      savings: 2,
      popular: false,
      features: [
        '10 AI Tools Access',
        '5 Autonomous Agents',
        '1000 API Calls/Month',
        'Basic Support',
        'Community Access',
        'Standard Processing',
        '1 User Account',
        'Email Support'
      ],
      limitations: [
        'Limited to 5 concurrent tasks',
        'No priority processing',
        'Basic analytics only'
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'outline'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      monthlyPrice: 79,
      yearlyPrice: 790,
      savings: 5,
      popular: true,
      features: [
        'Unlimited AI Tools',
        '20 Autonomous Agents',
        '10,000 API Calls/Month',
        'Priority Support',
        'Advanced Analytics',
        'Priority Processing',
        '5 User Accounts',
        'Phone & Email Support',
        'Custom Workflows',
        'API Access'
      ],
      limitations: [
        'No dedicated account manager',
        'Standard SLA'
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'primary'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with custom needs',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      savings: 10,
      popular: false,
      features: [
        'Unlimited Everything',
        'Unlimited Agents',
        'Unlimited API Calls',
        '24/7 Premium Support',
        'Advanced Analytics Dashboard',
        'Highest Priority Processing',
        'Unlimited User Accounts',
        'Dedicated Account Manager',
        'Custom AI Model Training',
        'SLA Guarantee',
        'On-premise Deployment',
        'Custom Integration'
      ],
      limitations: [],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline'
    }
  ];

  const individualTools = {
    'chat-agents': [
      {
        id: 'ai-chat',
        name: 'AI Chat Assistant',
        description: 'Advanced conversational AI for customer support and engagement',
        icon: 'fas fa-comments',
        plans: [
          {
            name: 'Free',
            price: '$0',
            period: 'forever',
            features: ['100 messages/month', 'Basic responses', 'Email support'],
            limitations: ['Limited context memory', 'Standard response time'],
            buttonText: 'Get Started',
            buttonVariant: 'outline'
          },
          {
            name: 'Pro',
            price: '$19',
            period: '/month',
            popular: true,
            features: ['Unlimited messages', 'Advanced context', 'Priority support', 'Custom training'],
            limitations: [],
            buttonText: 'Start Trial',
            buttonVariant: 'primary'
          },
          {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            features: ['Dedicated instance', 'Custom model training', 'SLA guarantee', '24/7 support'],
            limitations: [],
            buttonText: 'Contact Sales',
            buttonVariant: 'outline'
          }
        ]
      },
      {
        id: 'autonomous-agent',
        name: 'Autonomous Agent',
        description: 'AI agents that work autonomously to complete complex tasks',
        icon: 'fas fa-robot',
        plans: [
          {
            name: 'Free',
            price: '$0',
            period: 'forever',
            features: ['1 agent', 'Basic tasks', '100 tasks/month'],
            limitations: ['Limited capabilities', 'No API access'],
            buttonText: 'Get Started',
            buttonVariant: 'outline'
          },
          {
            name: 'Pro',
            price: '$29',
            period: '/month',
            popular: true,
            features: ['5 agents', 'Advanced tasks', 'Unlimited tasks', 'API access'],
            limitations: [],
            buttonText: 'Start Trial',
            buttonVariant: 'primary'
          },
          {
            name: 'Enterprise',
            price: '$99',
            period: '/month',
            features: ['Unlimited agents', 'Custom workflows', 'Priority processing', 'Dedicated support'],
            limitations: [],
            buttonText: 'Contact Sales',
            buttonVariant: 'outline'
          }
        ]
      }
    ],
    'creative': [
      {
        id: 'image-generator',
        name: 'AI Image Generator',
        description: 'Create stunning images from text descriptions',
        icon: 'fas fa-image',
        plans: [
          {
            name: 'Free',
            price: '$0',
            period: 'forever',
            features: ['50 images/month', 'Standard resolution', 'Basic styles'],
            limitations: ['Watermarked', 'No commercial use'],
            buttonText: 'Get Started',
            buttonVariant: 'outline'
          },
          {
            name: 'Pro',
            price: '$15',
            period: '/month',
            popular: true,
            features: ['500 images/month', 'HD resolution', 'All styles', 'Commercial license'],
            limitations: [],
            buttonText: 'Start Trial',
            buttonVariant: 'primary'
          },
          {
            name: 'Enterprise',
            price: '$49',
            period: '/month',
            features: ['Unlimited images', '4K resolution', 'Custom styles', 'Priority generation'],
            limitations: [],
            buttonText: 'Contact Sales',
            buttonVariant: 'outline'
          }
        ]
      },
      {
        id: 'video-generator',
        name: 'AI Video Generator',
        description: 'Create engaging videos with AI-powered animation',
        icon: 'fas fa-video',
        plans: [
          {
            name: 'Free',
            price: '$0',
            period: 'forever',
            features: ['5 minutes/month', '720p resolution', 'Basic templates'],
            limitations: ['Watermarked', 'Limited styles'],
            buttonText: 'Get Started',
            buttonVariant: 'outline'
          },
          {
            name: 'Pro',
            price: '$39',
            period: '/month',
            popular: true,
            features: ['60 minutes/month', '1080p resolution', 'All templates', 'Custom branding'],
            limitations: [],
            buttonText: 'Start Trial',
            buttonVariant: 'primary'
          },
          {
            name: 'Enterprise',
            price: '$129',
            period: '/month',
            features: ['Unlimited minutes', '4K resolution', 'Custom templates', 'Priority rendering'],
            limitations: [],
            buttonText: 'Contact Sales',
            buttonVariant: 'outline'
          }
        ]
      }
    ],
    'development': [
      {
        id: 'code-assistant',
        name: 'AI Code Assistant',
        description: 'Intelligent coding companion for developers',
        icon: 'fas fa-code',
        plans: [
          {
            name: 'Free',
            price: '$0',
            period: 'forever',
            features: ['Basic code completion', '10 languages', 'Community support'],
            limitations: ['Limited suggestions', 'No IDE integration'],
            buttonText: 'Get Started',
            buttonVariant: 'outline'
          },
          {
            name: 'Pro',
            price: '$25',
            period: '/month',
            popular: true,
            features: ['Advanced completion', '50+ languages', 'IDE integration', 'Priority support'],
            limitations: [],
            buttonText: 'Start Trial',
            buttonVariant: 'primary'
          },
          {
            name: 'Enterprise',
            price: '$79',
            period: '/month',
            features: ['Full context understanding', 'All languages', 'Custom training', 'Dedicated support'],
            limitations: [],
            buttonText: 'Contact Sales',
            buttonVariant: 'outline'
          }
        ]
      }
    ],
    'analytics': [
      {
        id: 'data-analyzer',
        name: 'AI Data Analyzer',
        description: 'Automated data analysis and insights generation',
        icon: 'fas fa-chart-bar',
        plans: [
          {
            name: 'Free',
            price: '$0',
            period: 'forever',
            features: ['Basic analysis', 'CSV files only', 'Standard reports'],
            limitations: ['Limited datasets', 'Basic visualizations'],
            buttonText: 'Get Started',
            buttonVariant: 'outline'
          },
          {
            name: 'Pro',
            price: '$35',
            period: '/month',
            popular: true,
            features: ['Advanced analysis', 'Multiple formats', 'Custom reports', 'API access'],
            limitations: [],
            buttonText: 'Start Trial',
            buttonVariant: 'primary'
          },
          {
            name: 'Enterprise',
            price: '$119',
            period: '/month',
            features: ['Predictive analytics', 'Real-time processing', 'Custom models', 'Dedicated instance'],
            limitations: [],
            buttonText: 'Contact Sales',
            buttonVariant: 'outline'
          }
        ]
      }
    ],
    'content': [
      {
        id: 'content-writer',
        name: 'AI Content Writer',
        description: 'Generate high-quality content for various purposes',
        icon: 'fas fa-edit',
        plans: [
          {
            name: 'Free',
            price: '$0',
            period: 'forever',
            features: ['1000 words/month', 'Basic templates', 'Standard quality'],
            limitations: ['No SEO optimization', 'Limited formats'],
            buttonText: 'Get Started',
            buttonVariant: 'outline'
          },
          {
            name: 'Pro',
            price: '$22',
            period: '/month',
            popular: true,
            features: ['10,000 words/month', 'All templates', 'SEO optimization', 'Tone adjustment'],
            limitations: [],
            buttonText: 'Start Trial',
            buttonVariant: 'primary'
          },
          {
            name: 'Enterprise',
            price: '$69',
            period: '/month',
            features: ['Unlimited words', 'Custom templates', 'Brand voice training', 'Priority generation'],
            limitations: [],
            buttonText: 'Contact Sales',
            buttonVariant: 'outline'
          }
        ]
      }
    ]
  };

  const handleGetStarted = (planId) => {
    if (planId === 'enterprise') {
      navigate('/contact');
    } else {
      navigate('/get-started', { state: { selectedPlan: planId } });
    }
  };

  const handleToolSubscription = (toolId, planName) => {
    navigate('/get-started', { state: { selectedTool: toolId, plan: planName } });
  };

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly');
  };

  const renderBundlePricing = () => (
    <div className="pricing-section">
      <div className="section-header">
        <h2 className="section-title">Complete AI Suite Bundles</h2>
        <p className="section-subtitle">Get access to all our AI tools with significant savings</p>
      </div>

      <div className="billing-toggle-container">
        <div className="billing-toggle">
          <span className={billingPeriod === 'monthly' ? 'active' : ''}>Monthly</span>
          <div className="toggle-switch" onClick={toggleBillingPeriod}>
            <div className={`toggle-slider ${billingPeriod === 'yearly' ? 'yearly' : ''}`}></div>
          </div>
          <span className={billingPeriod === 'yearly' ? 'active' : ''}>
            Yearly <span className="save-badge">Save up to 17%</span>
          </span>
        </div>
      </div>

      <div className="plans-grid">
        {bundlePlans.map((plan) => (
          <div key={plan.id} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">Most Popular</div>}

            <div className="plan-header">
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>

              <div className="price">
                <span className="currency">$</span>
                <span className="amount">
                  {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span className="period">
                  /{billingPeriod === 'monthly' ? 'month' : 'year'}
                </span>
              </div>

              {billingPeriod === 'yearly' && (
                <div className="savings">
                  Save ${plan.savings} monthly
                </div>
              )}
            </div>

            <div className="plan-features">
              <h4>What's included:</h4>
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.limitations.length > 0 && (
                <div className="limitations">
                  <h5>Limitations:</h5>
                  <ul>
                    {plan.limitations.map((limitation, index) => (
                      <li key={index}>
                        <i className="fas fa-info-circle"></i>
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="plan-actions">
              <button
                className={`btn btn-${plan.buttonVariant} btn-large`}
                onClick={() => handleGetStarted(plan.id)}
              >
                {plan.buttonText}
              </button>
              <p className="trial-note">14-day free trial • No credit card required</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderIndividualToolPricing = () => {
    const tools = individualTools[activeTab] || [];

    return (
      <div className="pricing-section">
        <div className="section-header">
          <h2 className="section-title">Individual Tool Pricing</h2>
          <p className="section-subtitle">Choose specific tools that fit your needs</p>
        </div>

        <div className="individual-tools-grid">
          {tools.map((tool) => (
            <div key={tool.id} className="tool-pricing-card">
              <div className="tool-header">
                <div className="tool-icon">
                  <i className={tool.icon}></i>
                </div>
                <div className="tool-info">
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                </div>
              </div>

              <div className="pricing-tiers">
                {tool.plans.map((plan, index) => (
                  <div key={index} className={`pricing-tier ${plan.popular ? 'popular' : ''}`}>
                    {plan.popular && <div className="popular-badge">Popular</div>}

                    <div className="tier-header">
                      <h4>{plan.name}</h4>
                      <div className="tier-price">
                        {plan.price}
                        <span className="period">{plan.period}</span>
                      </div>
                    </div>

                    <div className="tier-features">
                      <ul>
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>
                            <i className="fas fa-check"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {plan.limitations && plan.limitations.length > 0 && (
                        <div className="tier-limitations">
                          <ul>
                            {plan.limitations.map((limitation, limitationIndex) => (
                              <li key={limitationIndex}>
                                <i className="fas fa-info-circle"></i>
                                {limitation}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <button
                      className={`btn btn-${plan.buttonVariant}`}
                      onClick={() => handleToolSubscription(tool.id, plan.name)}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="page-container">
      {/* Top Banner */}
      <div className="banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <span className="banner-highlight">SPECIAL OFFER:</span> Get 2 months free with annual billing.
              <span className="banner-highlight"> Save up to 17%!</span>
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
            <h1>Flexible Pricing for Every Need</h1>
            <p>Choose from individual tools or save with our bundle plans. All paid plans include a 14-day free trial.</p>
          </div>
        </div>
      </section>

      {/* Tool Categories Tabs */}
      <section className="pricing-tabs">
        <div className="container">
          <div className="tabs-container">
            {toolCategories.map((category) => (
              <button
                key={category.id}
                className={`tab-btn ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                <i className={category.icon}></i>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="pricing-content">
        <div className="container">
          {activeTab === 'all-tools' ? renderBundlePricing() : renderIndividualToolPricing()}
        </div>
      </section>

      {/* Bundle Comparison - Show when viewing individual tools */}
      {activeTab !== 'all-tools' && (
        <section className="bundle-comparison">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Save More with Bundle Plans</h2>
              <p className="section-subtitle">Get access to all tools at a discounted rate</p>
            </div>

            <div className="bundle-cards">
              <div className="bundle-card">
                <h3>Professional Bundle</h3>
                <div className="bundle-price">$79<span>/month</span></div>
                <p>Includes all AI tools + 20 autonomous agents</p>
                <ul>
                  <li><i className="fas fa-check"></i> Unlimited AI Tools</li>
                  <li><i className="fas fa-check"></i> 20 Autonomous Agents</li>
                  <li><i className="fas fa-check"></i> 10,000 API Calls/Month</li>
                  <li><i className="fas fa-check"></i> Priority Support</li>
                </ul>
                <button
                  className="btn btn-primary"
                  onClick={() => setActiveTab('all-tools')}
                >
                  View Bundle Plans
                </button>
              </div>

              <div className="bundle-card popular">
                <div className="popular-badge">Best Value</div>
                <h3>Save 40%+</h3>
                <p>Compared to individual tool subscriptions</p>
                <div className="savings-breakdown">
                  <div className="savings-item">
                    <span>Individual Tools:</span>
                    <span className="old-price">$130+/month</span>
                  </div>
                  <div className="savings-item">
                    <span>Bundle Price:</span>
                    <span className="new-price">$79/month</span>
                  </div>
                  <div className="savings-total">
                    <span>You Save:</span>
                    <span className="save-amount">$51+/month</span>
                  </div>
                </div>
                <button
                  className="btn btn-outline"
                  onClick={() => setActiveTab('all-tools')}
                >
                  Compare All Plans
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="pricing-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of businesses using Neon Byte AI to transform their workflows.</p>
            <div className="cta-buttons">
              <button
                className="btn btn-primary btn-large"
                onClick={() => navigate('/get-started')}
              >
                Start Free Trial
              </button>
              <button className="btn btn-outline">
                Schedule a Demo
              </button>
            </div>
            <p className="cta-note">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
