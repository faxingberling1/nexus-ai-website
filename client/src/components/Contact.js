import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: 'fas fa-question-circle' },
    { value: 'sales', label: 'Sales', icon: 'fas fa-chart-line' },
    { value: 'support', label: 'Technical Support', icon: 'fas fa-headset' },
    { value: 'partnership', label: 'Partnership', icon: 'fas fa-handshake' },
    { value: 'enterprise', label: 'Enterprise Solution', icon: 'fas fa-building' }
  ];

  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      description: 'Send us an email anytime',
      contact: 'hello@nexusai.com',
      action: 'mailto:hello@nexusai.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      description: 'Mon-Fri from 9am to 6pm',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: 'fas fa-comments',
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Start Chat',
      action: '#chat'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      description: 'Our headquarters',
      contact: 'San Francisco, CA',
      action: '#map'
    }
  ];

  const faqs = [
    {
      question: 'How quickly do you respond to inquiries?',
      answer: 'We typically respond within 1-2 business hours during our support hours (9 AM - 6 PM PST, Monday-Friday).'
    },
    {
      question: 'Do you offer custom AI solutions?',
      answer: 'Yes! We specialize in custom AI implementations tailored to your specific business needs and workflows.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We work with companies across technology, healthcare, finance, e-commerce, education, and many other industries.'
    },
    {
      question: 'Can I schedule a demo before purchasing?',
      answer: 'Absolutely! We offer personalized demos to show you how Neon Byte AI can solve your specific challenges.'
    }
  ];

  return (
    <div className="contact-page">
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
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Get in Touch</h1>
            <p>Ready to transform your business with AI? Let's start the conversation about how Neon Byte AI can help you achieve your goals.</p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="method-card">
                <div className="method-icon">
                  <i className={method.icon}></i>
                </div>
                <div className="method-content">
                  <h3>{method.title}</h3>
                  <p>{method.description}</p>
                  <a href={method.action} className="method-link">
                    {method.contact}
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  <div>
                    <h4>Something went wrong</h4>
                    <p>Please try again or contact us directly via email or phone.</p>
                  </div>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-input"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Inquiry Type</label>
                  <div className="inquiry-types">
                    {inquiryTypes.map((type) => (
                      <label key={type.value} className="inquiry-type-option">
                        <input
                          type="radio"
                          name="inquiryType"
                          value={type.value}
                          checked={formData.inquiryType === type.value}
                          onChange={handleChange}
                        />
                        <div className="inquiry-type-card">
                          <i className={type.icon}></i>
                          <span>{type.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, challenges, or how we can help you..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-large submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="fas fa-paper-plane"></i>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <div className="info-card">
                <h3>Why Choose Neon Byte AI?</h3>
                <div className="benefits-list">
                  <div className="benefit-item">
                    <i className="fas fa-rocket"></i>
                    <div>
                      <h4>Fast Implementation</h4>
                      <p>Get up and running in days, not months</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-shield-alt"></i>
                    <div>
                      <h4>Enterprise Security</h4>
                      <p>SOC 2 compliant with end-to-end encryption</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-users"></i>
                    <div>
                      <h4>Dedicated Support</h4>
                      <p>24/7 technical support and account management</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-sync-alt"></i>
                    <div>
                      <h4>Continuous Updates</h4>
                      <p>Regular feature releases and improvements</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3>Office Hours</h3>
                <div className="office-hours">
                  <div className="hours-item">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM PST</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3>Quick Links</h3>
                <div className="quick-links">
                  <Link to="/documentation" className="quick-link">
                    <i className="fas fa-book"></i>
                    Documentation
                  </Link>
                  <Link to="/pricing" className="quick-link">
                    <i className="fas fa-tag"></i>
                    Pricing
                  </Link>
                  <Link to="/case-studies" className="quick-link">
                    <i className="fas fa-chart-bar"></i>
                    Case Studies
                  </Link>
                  <a href="/support" className="quick-link">
                    <i className="fas fa-life-ring"></i>
                    Support Center
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about working with us</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of companies already using Neon Byte AI to transform their business operations.</p>
            <div className="cta-buttons">
              <Link to="/get-started" className="btn btn-primary btn-large">
                Start Free Trial
              </Link>
              <Link to="/demo" className="btn btn-outline btn-large">
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
