import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  useScrollAnimation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleDataRequest = () => {
    // This would typically open a form or modal for data requests
    alert('Please email privacy@nexusai.com with your data request. We will respond within 30 days.');
  };

  return (
    <div className="page-container">
      {/* Banner */}
      <div className="banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <span className="banner-highlight">PRIVACY FIRST:</span> We are committed to protecting your data and privacy.
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
            <h1>Privacy Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary" 
                onClick={handleBackToHome}
              >
                Back to Home
              </button>
              <button 
                className="btn btn-outline" 
                onClick={handleDataRequest}
              >
                Data Request
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="docs-main">
        <div className="container">
          <div className="docs-layout">
            {/* Sidebar Navigation */}
            <div className="docs-sidebar">
              <div className="sidebar-section">
                <h3>Quick Navigation</h3>
                <nav className="sidebar-nav">
                  <button className="sidebar-link active" onClick={() => document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-info-circle"></i>
                    Introduction
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('information')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-database"></i>
                    Information We Collect
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('usage')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-cogs"></i>
                    How We Use Information
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('sharing')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-share-alt"></i>
                    Information Sharing
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('cookies')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-cookie"></i>
                    Cookies & Tracking
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('security')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-shield-alt"></i>
                    Data Security
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('rights')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-user-check"></i>
                    Your Rights
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('retention')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-clock"></i>
                    Data Retention
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('international')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-globe"></i>
                    International Transfers
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('children')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-child"></i>
                    Children's Privacy
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('changes')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-sync-alt"></i>
                    Policy Changes
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-envelope"></i>
                    Contact Us
                  </button>
                </nav>
              </div>

              <div className="sidebar-help">
                <h4>Privacy Controls</h4>
                <p>Manage your privacy settings and data preferences.</p>
                <div className="help-actions">
                  <button 
                    className="btn btn-outline"
                    onClick={handleDataRequest}
                  >
                    Data Request
                  </button>
                  <button 
                    className="btn btn-outline"
                    onClick={() => handleNavigation('/settings')}
                  >
                    Privacy Settings
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="docs-content">
              <div className="category-content">
                <div className="content-intro">
                  <p>
                    At Nexus AI, we take your privacy seriously. This Privacy Policy explains how we collect, 
                    use, disclose, and safeguard your information when you use our AI-powered services and platform.
                  </p>
                </div>

                {/* Section 1: Introduction */}
                <section id="introduction" className="content-section">
                  <h2>1. Introduction</h2>
                  <p>
                    Nexus AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                    applies to all users of our Services, including visitors to our website, users of our AI tools, 
                    and customers of our platform.
                  </p>
                  
                  <div className="info-card">
                    <div className="info-icon">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="info-content">
                      <h4>Our Commitment</h4>
                      <p>
                        We are dedicated to maintaining the trust and confidence of our users. We want you to 
                        understand how we handle your information and the measures we take to protect your privacy.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 2: Information We Collect */}
                <section id="information" className="content-section">
                  <h2>2. Information We Collect</h2>
                  
                  <h3>2.1 Information You Provide Directly</h3>
                  <p>We collect information you provide when you:</p>
                  <ul>
                    <li>Create an account or register for our Services</li>
                    <li>Use our AI tools and services</li>
                    <li>Contact our support team</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Participate in surveys or feedback sessions</li>
                    <li>Make purchases or transactions</li>
                  </ul>
                  <p>This may include:</p>
                  <ul>
                    <li><strong>Personal Information:</strong> Name, email address, phone number, billing information</li>
                    <li><strong>Account Information:</strong> Username, password, profile information</li>
                    <li><strong>Content:</strong> Input data, prompts, and outputs from AI interactions</li>
                    <li><strong>Communications:</strong> Messages, feedback, and support requests</li>
                  </ul>

                  <h3>2.2 Information Collected Automatically</h3>
                  <p>When you use our Services, we automatically collect:</p>
                  <ul>
                    <li><strong>Usage Data:</strong> How you interact with our Services, features used, time spent</li>
                    <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
                    <li><strong>Log Data:</strong> Server logs, error reports, performance data</li>
                    <li><strong>Location Information:</strong> General location based on IP address</li>
                  </ul>

                  <h3>2.3 AI-Specific Data Collection</h3>
                  <p>As an AI platform, we may collect:</p>
                  <ul>
                    <li>Input prompts and queries submitted to our AI models</li>
                    <li>AI-generated responses and outputs</li>
                    <li>Model performance and improvement data</li>
                    <li>User interaction patterns with AI features</li>
                  </ul>
                </section>

                {/* Section 3: How We Use Information */}
                <section id="usage" className="content-section">
                  <h2>3. How We Use Your Information</h2>
                  
                  <div className="usage-grid">
                    <div className="usage-card">
                      <div className="usage-icon">
                        <i className="fas fa-cogs"></i>
                      </div>
                      <h4>Service Operation</h4>
                      <p>Provide, maintain, and improve our AI Services</p>
                    </div>
                    <div className="usage-card">
                      <div className="usage-icon">
                        <i className="fas fa-user-cog"></i>
                      </div>
                      <h4>Personalization</h4>
                      <p>Customize your experience and AI responses</p>
                    </div>
                    <div className="usage-card">
                      <div className="usage-icon">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <h4>Analytics</h4>
                      <p>Analyze usage patterns and improve our models</p>
                    </div>
                    <div className="usage-card">
                      <div className="usage-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <h4>Security</h4>
                      <p>Protect against fraud and ensure platform security</p>
                    </div>
                  </div>

                  <h3>3.1 Specific Purposes</h3>
                  <ul>
                    <li>Process transactions and send transaction notifications</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Send technical notices, updates, and security alerts</li>
                    <li>Monitor and analyze trends and usage of our Services</li>
                    <li>Train and improve our AI models (with appropriate safeguards)</li>
                    <li>Develop new products, services, and features</li>
                  </ul>

                  <h3>3.2 Legal Bases for Processing (GDPR)</h3>
                  <p>For users in the European Economic Area, we process your information based on:</p>
                  <ul>
                    <li><strong>Consent:</strong> When you have given clear consent</li>
                    <li><strong>Contract:</strong> To fulfill our contractual obligations</li>
                    <li><strong>Legal Obligation:</strong> To comply with legal requirements</li>
                    <li><strong>Legitimate Interests:</strong> For our legitimate business interests</li>
                  </ul>
                </section>

                {/* Section 4: Information Sharing */}
                <section id="sharing" className="content-section">
                  <h2>4. How We Share Information</h2>
                  <p>We do not sell your personal information to third parties. We may share information in the following circumstances:</p>

                  <h3>4.1 Service Providers</h3>
                  <p>We may share information with third-party vendors who help us operate our Services, including:</p>
                  <ul>
                    <li>Cloud hosting providers (AWS, Google Cloud)</li>
                    <li>Payment processors (Stripe, PayPal)</li>
                    <li>Customer support platforms</li>
                    <li>Analytics and monitoring services</li>
                  </ul>

                  <h3>4.2 Legal Requirements</h3>
                  <p>We may disclose information if required to do so by law or in response to:</p>
                  <ul>
                    <li>Valid legal process (subpoenas, court orders)</li>
                    <li>Government requests</li>
                    <li>To protect our rights, privacy, safety, or property</li>
                    <li>To investigate fraud or security issues</li>
                  </ul>

                  <h3>4.3 Business Transfers</h3>
                  <p>In connection with any merger, sale of company assets, or acquisition, we may transfer your information to the new owner.</p>

                  <div className="info-card">
                    <div className="info-icon">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <div className="info-content">
                      <h4>Data Protection Agreements</h4>
                      <p>
                        All third-party service providers are bound by contractual obligations to keep personal 
                        information confidential and use it only for the purposes for which we disclose it to them.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5: Cookies and Tracking */}
                <section id="cookies" className="content-section">
                  <h2>5. Cookies and Tracking Technologies</h2>
                  
                  <h3>5.1 Types of Cookies We Use</h3>
                  <div className="cookies-grid">
                    <div className="cookie-type">
                      <h4>Essential Cookies</h4>
                      <p>Required for basic site functionality and security</p>
                    </div>
                    <div className="cookie-type">
                      <h4>Performance Cookies</h4>
                      <p>Help us understand how visitors interact with our site</p>
                    </div>
                    <div className="cookie-type">
                      <h4>Functional Cookies</h4>
                      <p>Enable enhanced functionality and personalization</p>
                    </div>
                    <div className="cookie-type">
                      <h4>Analytics Cookies</h4>
                      <p>Help us improve our services and user experience</p>
                    </div>
                  </div>

                  <h3>5.2 Your Cookie Choices</h3>
                  <p>
                    You can control cookies through your browser settings. However, disabling cookies may 
                    affect your ability to use certain features of our Services.
                  </p>

                  <h3>5.3 Do Not Track Signals</h3>
                  <p>
                    We do not currently respond to "Do Not Track" signals as there is no standard for how 
                    online services should respond to such signals.
                  </p>
                </section>

                {/* Section 6: Data Security */}
                <section id="security" className="content-section">
                  <h2>6. Data Security</h2>
                  
                  <div className="security-features">
                    <div className="security-item">
                      <i className="fas fa-lock"></i>
                      <span>Encryption in transit and at rest</span>
                    </div>
                    <div className="security-item">
                      <i className="fas fa-user-shield"></i>
                      <span>Access controls and authentication</span>
                    </div>
                    <div className="security-item">
                      <i className="fas fa-network-wired"></i>
                      <span>Network security and monitoring</span>
                    </div>
                    <div className="security-item">
                      <i className="fas fa-clipboard-check"></i>
                      <span>Regular security assessments</span>
                    </div>
                  </div>

                  <p>
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction.
                  </p>

                  <div className="info-card">
                    <div className="info-icon">
                      <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <div className="info-content">
                      <h4>Security Notice</h4>
                      <p>
                        While we implement robust security measures, no method of transmission over the Internet 
                        or electronic storage is 100% secure. We cannot guarantee absolute security of your information.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 7: Your Rights */}
                <section id="rights" className="content-section">
                  <h2>7. Your Privacy Rights</h2>
                  
                  <p>Depending on your location, you may have the following rights regarding your personal information:</p>

                  <div className="rights-grid">
                    <div className="right-card">
                      <div className="right-icon">
                        <i className="fas fa-eye"></i>
                      </div>
                      <h4>Right to Access</h4>
                      <p>Request copies of your personal information</p>
                    </div>
                    <div className="right-card">
                      <div className="right-icon">
                        <i className="fas fa-edit"></i>
                      </div>
                      <h4>Right to Rectification</h4>
                      <p>Request correction of inaccurate information</p>
                    </div>
                    <div className="right-card">
                      <div className="right-icon">
                        <i className="fas fa-trash-alt"></i>
                      </div>
                      <h4>Right to Erasure</h4>
                      <p>Request deletion of your personal information</p>
                    </div>
                    <div className="right-card">
                      <div className="right-icon">
                        <i className="fas fa-pause-circle"></i>
                      </div>
                      <h4>Right to Restrict</h4>
                      <p>Request limitation of processing</p>
                    </div>
                    <div className="right-card">
                      <div className="right-icon">
                        <i className="fas fa-download"></i>
                      </div>
                      <h4>Right to Portability</h4>
                      <p>Request transfer of your data</p>
                    </div>
                    <div className="right-card">
                      <div className="right-icon">
                        <i className="fas fa-times-circle"></i>
                      </div>
                      <h4>Right to Object</h4>
                      <p>Object to certain processing activities</p>
                    </div>
                  </div>

                  <h3>7.1 Exercising Your Rights</h3>
                  <p>
                    To exercise any of these rights, please contact us using the information in the "Contact Us" 
                    section. We will respond to your request within 30 days.
                  </p>

                  <h3>7.2 California Privacy Rights</h3>
                  <p>
                    California residents have additional rights under the CCPA/CPRA, including the right to 
                    know what personal information is collected and the right to opt-out of the sale of personal information.
                  </p>
                </section>

                {/* Section 8: Data Retention */}
                <section id="retention" className="content-section">
                  <h2>8. Data Retention</h2>
                  
                  <p>We retain your personal information only for as long as necessary to:</p>
                  <ul>
                    <li>Provide the Services you have requested</li>
                    <li>Comply with our legal obligations</li>
                    <li>Resolve disputes and enforce our agreements</li>
                    <li>Maintain business records as required by law</li>
                  </ul>

                  <h3>8.1 Retention Periods</h3>
                  <ul>
                    <li><strong>Account Information:</strong> Retained while your account is active and for 3 years after deletion</li>
                    <li><strong>Transaction Data:</strong> 7 years for tax and accounting purposes</li>
                    <li><strong>AI Training Data:</strong> Anonymized and retained for model improvement</li>
                    <li><strong>Marketing Data:</strong> Until you unsubscribe or withdraw consent</li>
                  </ul>
                </section>

                {/* Section 9: International Transfers */}
                <section id="international" className="content-section">
                  <h2>9. International Data Transfers</h2>
                  
                  <p>
                    Your information may be transferred to and processed in countries other than your country 
                    of residence. These countries may have data protection laws that are different from your country.
                  </p>

                  <h3>9.1 Transfer Safeguards</h3>
                  <p>We use appropriate safeguards for international data transfers, including:</p>
                  <ul>
                    <li>EU Standard Contractual Clauses</li>
                    <li>Adequacy decisions where applicable</li>
                    <li>Binding corporate rules</li>
                    <li>Other legally approved mechanisms</li>
                  </ul>
                </section>

                {/* Section 10: Children's Privacy */}
                <section id="children" className="content-section">
                  <h2>10. Children's Privacy</h2>
                  
                  <p>
                    Our Services are not directed to individuals under the age of 16. We do not knowingly 
                    collect personal information from children under 16.
                  </p>

                  <div className="info-card">
                    <div className="info-icon">
                      <i className="fas fa-child"></i>
                    </div>
                    <div className="info-content">
                      <h4>Parental Controls</h4>
                      <p>
                        If you are a parent or guardian and believe your child has provided us with personal 
                        information, please contact us immediately. We will take steps to remove such information.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 11: Policy Changes */}
                <section id="changes" className="content-section">
                  <h2>11. Changes to This Privacy Policy</h2>
                  
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by 
                    posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>

                  <h3>11.1 Notification of Changes</h3>
                  <p>For material changes, we may also provide:</p>
                  <ul>
                    <li>Email notifications to registered users</li>
                    <li>In-app notifications and banners</li>
                    <li>Advance notice for significant changes</li>
                  </ul>

                  <p>
                    We encourage you to review this Privacy Policy periodically for any changes. Your continued 
                    use of our Services after any modification constitutes acceptance of the updated policy.
                  </p>
                </section>

                {/* Section 12: Contact Us */}
                <section id="contact" className="content-section">
                  <h2>12. Contact Us</h2>
                  
                  <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>

                  <div className="contact-methods">
                    <div className="contact-method">
                      <i className="fas fa-envelope"></i>
                      <div>
                        <strong>Email:</strong> privacy@nexusai.com
                      </div>
                    </div>
                    <div className="contact-method">
                      <i className="fas fa-phone"></i>
                      <div>
                        <strong>Phone:</strong> +1 (555) 123-4567
                      </div>
                    </div>
                    <div className="contact-method">
                      <i className="fas fa-map-marker-alt"></i>
                      <div>
                        <strong>Address:</strong><br />
                        123 AI Innovation Drive<br />
                        Tech Valley, CA 94025<br />
                        United States
                      </div>
                    </div>
                  </div>

                  <h3>12.1 Data Protection Officer</h3>
                  <p>
                    For users in the European Economic Area, you may contact our Data Protection Officer at:
                    <br />
                    <strong>DPO Email:</strong> dpo@nexusai.com
                  </p>
                </section>

                {/* Privacy Commitment */}
                <div className="cta-section">
                  <h3>Your Privacy Matters</h3>
                  <p>
                    We are committed to protecting your privacy and being transparent about our data practices. 
                    If you have any questions or concerns, please don't hesitate to contact us.
                  </p>
                  <div className="hero-buttons">
                    <button 
                      className="btn btn-primary" 
                      onClick={handleDataRequest}
                    >
                      Submit Data Request
                    </button>
                    <button 
                      className="btn btn-outline" 
                      onClick={() => handleNavigation('/contact')}
                    >
                      Contact Privacy Team
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;