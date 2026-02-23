import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TermsOfService = () => {
  const navigate = useNavigate();
  useScrollAnimation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="page-container">
      {/* Banner */}
      <div className="banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <span className="banner-highlight">IMPORTANT:</span> Please review our Terms of Service carefully before using our platform.
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
            <h1>Terms of Service</h1>
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
                onClick={() => window.print()}
              >
                Print Terms
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="docs-main">
        <div className="container">
          <div className="docs-layout">
            {/* Sidebar Navigation */}
            <div className="docs-sidebar">
              <div className="sidebar-section">
                <h3>Quick Navigation</h3>
                <nav className="sidebar-nav">
                  <button className="sidebar-link active" onClick={() => document.getElementById('acceptance')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-check-circle"></i>
                    Acceptance of Terms
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-cogs"></i>
                    Services Description
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('accounts')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-user"></i>
                    User Accounts
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('usage')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-chart-line"></i>
                    Acceptable Use
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('payments')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-credit-card"></i>
                    Payments & Billing
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('intellectual')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-lightbulb"></i>
                    Intellectual Property
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('privacy')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-shield-alt"></i>
                    Privacy & Data
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('liability')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-balance-scale"></i>
                    Liability
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('termination')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-ban"></i>
                    Termination
                  </button>
                  <button className="sidebar-link" onClick={() => document.getElementById('governing')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-gavel"></i>
                    Governing Law
                  </button>
                </nav>
              </div>

              <div className="sidebar-help">
                <h4>Need Help?</h4>
                <p>If you have questions about these terms, contact our legal team.</p>
                <div className="help-actions">
                  <button 
                    className="btn btn-outline"
                    onClick={() => handleNavigation('/contact')}
                  >
                    Contact Support
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="docs-content">
              <div className="category-content">
                <div className="content-intro">
                  <p>
                    Welcome to Neon Byte AI. These Terms of Service ("Terms") govern your access to and use of 
                    our website, services, and applications (collectively, the "Services"). Please read these 
                    Terms carefully before using our Services.
                  </p>
                </div>

                {/* Section 1: Acceptance of Terms */}
                <section id="acceptance" className="content-section">
                  <h2>1. Acceptance of Terms</h2>
                  <p>
                    By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. 
                    If you disagree with any part of the terms, you may not access our Services.
                  </p>
                  <div className="info-card">
                    <div className="info-icon">
                      <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <div className="info-content">
                      <h4>Important Notice</h4>
                      <p>
                        These terms contain important information about your legal rights, remedies, and obligations. 
                        By using our Services, you acknowledge that you have read, understood, and agree to be bound 
                        by these Terms.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 2: Services Description */}
                <section id="services" className="content-section">
                  <h2>2. Services Description</h2>
                  <p>
                    Neon Byte AI provides artificial intelligence tools and services including but not limited to:
                  </p>
                  <ul>
                    <li>AI Chatbots and conversational agents</li>
                    <li>Autonomous AI agents for task automation</li>
                    <li>AI-powered workflow automation tools</li>
                    <li>Predictive analytics and machine learning models</li>
                    <li>API access to our AI services</li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any part of our Services at any time 
                    without prior notice.
                  </p>
                </section>

                {/* Section 3: User Accounts */}
                <section id="accounts" className="content-section">
                  <h2>3. User Accounts</h2>
                  <h3>3.1 Account Registration</h3>
                  <p>
                    To access certain features of our Services, you must register for an account. You agree to:
                  </p>
                  <ul>
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Maintain the security of your password and accept all risks of unauthorized access</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>

                  <h3>3.2 Account Responsibility</h3>
                  <p>
                    You are responsible for all activities that occur under your account. You may not share your 
                    account credentials with third parties or use another user's account without permission.
                  </p>
                </section>

                {/* Section 4: Acceptable Use */}
                <section id="usage" className="content-section">
                  <h2>4. Acceptable Use Policy</h2>
                  <p>
                    You agree not to use our Services to:
                  </p>
                  <ul>
                    <li>Violate any applicable laws, regulations, or third-party rights</li>
                    <li>Engage in fraudulent, deceptive, or illegal activities</li>
                    <li>Distribute malware, viruses, or other harmful code</li>
                    <li>Spam, phish, or engage in other unsolicited communications</li>
                    <li>Interfere with or disrupt the integrity or performance of our Services</li>
                    <li>Attempt to gain unauthorized access to our systems or networks</li>
                    <li>Use our Services to create or distribute harmful, abusive, or offensive content</li>
                  </ul>

                  <div className="info-card">
                    <div className="info-icon">
                      <i className="fas fa-ban"></i>
                    </div>
                    <div className="info-content">
                      <h4>Prohibited Activities</h4>
                      <p>
                        We reserve the right to investigate and take appropriate legal action against anyone who, 
                        in our sole discretion, violates this provision, including without limitation, removing 
                        the offending content, suspending or terminating the account of such violators, and 
                        reporting you to law enforcement authorities.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5: Payments and Billing */}
                <section id="payments" className="content-section">
                  <h2>5. Payments and Billing</h2>
                  <h3>5.1 Subscription Fees</h3>
                  <p>
                    Certain Services may require payment of fees. You agree to pay all applicable fees as 
                    described on our pricing page when you subscribe to such Services.
                  </p>

                  <h3>5.2 Billing Cycle</h3>
                  <p>
                    Subscription fees will be billed on a recurring basis (monthly or annually) depending on 
                    the plan you select. Fees are non-refundable except as required by law or as otherwise 
                    specified in these Terms.
                  </p>

                  <h3>5.3 Price Changes</h3>
                  <p>
                    We reserve the right to change our subscription fees at any time. We will provide you with 
                    at least 30 days' notice of any fee changes affecting your subscription.
                  </p>
                </section>

                {/* Section 6: Intellectual Property */}
                <section id="intellectual" className="content-section">
                  <h2>6. Intellectual Property Rights</h2>
                  <h3>6.1 Our Intellectual Property</h3>
                  <p>
                    The Services and their original content, features, and functionality are owned by Neon Byte AI 
                    and are protected by international copyright, trademark, patent, trade secret, and other 
                    intellectual property laws.
                  </p>

                  <h3>6.2 Your Content</h3>
                  <p>
                    You retain ownership of any content you submit, post, or display on or through our Services. 
                    By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, 
                    reproduce, modify, and display such content solely for the purpose of providing the Services.
                  </p>

                  <h3>6.3 AI-Generated Content</h3>
                  <p>
                    Content generated by our AI tools is provided for your use, but we make no warranties 
                    regarding the ownership or intellectual property rights of AI-generated content. You are 
                    responsible for ensuring your use of AI-generated content complies with applicable laws.
                  </p>
                </section>

                {/* Section 7: Privacy and Data */}
                <section id="privacy" className="content-section">
                  <h2>7. Privacy and Data Protection</h2>
                  <p>
                    Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect 
                    your personal information. By using our Services, you agree to the collection and use of 
                    information in accordance with our Privacy Policy.
                  </p>

                  <h3>7.1 Data Processing</h3>
                  <p>
                    We process data in accordance with applicable data protection laws. For users in the European 
                    Economic Area, we comply with the GDPR. For California residents, we comply with the CCPA.
                  </p>

                  <h3>7.2 Security</h3>
                  <p>
                    We implement appropriate technical and organizational measures to protect your data. However, 
                    no method of transmission over the Internet or electronic storage is 100% secure.
                  </p>
                </section>

                {/* Section 8: Limitation of Liability */}
                <section id="liability" className="content-section">
                  <h2>8. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by law, Neon Byte AI shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
                    whether incurred directly or indirectly, or any loss of data, use, goodwill, or other 
                    intangible losses resulting from:
                  </p>
                  <ul>
                    <li>Your access to or use of or inability to access or use the Services</li>
                    <li>Any conduct or content of any third party on the Services</li>
                    <li>Any content obtained from the Services</li>
                    <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                  </ul>

                  <div className="info-card">
                    <div className="info-icon">
                      <i className="fas fa-balance-scale"></i>
                    </div>
                    <div className="info-content">
                      <h4>Liability Cap</h4>
                      <p>
                        In no event shall Neon Byte AI's aggregate liability exceed the greater of one hundred 
                        U.S. dollars (U.S. $100.00) or the amount you paid Neon Byte AI, if any, in the past 
                        six months for the Services giving rise to the claim.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 9: Termination */}
                <section id="termination" className="content-section">
                  <h2>9. Termination</h2>
                  <p>
                    These Terms will remain in full force and effect while you use our Services. We may suspend 
                    or terminate your account or cease providing you with all or part of the Services at any time 
                    for any reason, including, but not limited to, if we reasonably believe:
                  </p>
                  <ul>
                    <li>You have violated these Terms</li>
                    <li>You create risk or possible legal exposure for us</li>
                    <li>Our provision of the Services to you is no longer commercially viable</li>
                  </ul>
                  <p>
                    Upon termination, all licenses and other rights granted to you in these Terms will immediately cease.
                  </p>
                </section>

                {/* Section 10: Governing Law */}
                <section id="governing" className="content-section">
                  <h2>10. Governing Law and Dispute Resolution</h2>
                  <h3>10.1 Governing Law</h3>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of 
                    Delaware, without regard to its conflict of law provisions.
                  </p>

                  <h3>10.2 Dispute Resolution</h3>
                  <p>
                    Any dispute arising from these Terms or your use of the Services shall be resolved through 
                    binding arbitration in accordance with the American Arbitration Association's commercial 
                    arbitration rules.
                  </p>

                  <h3>10.3 Class Action Waiver</h3>
                  <p>
                    You agree that any arbitration or proceeding shall be limited to the dispute between us 
                    individually. There is no right or authority for any dispute to be arbitrated or resolved 
                    on a class-action basis.
                  </p>
                </section>

                {/* Section 11: Miscellaneous */}
                <section id="miscellaneous" className="content-section">
                  <h2>11. Miscellaneous</h2>
                  <h3>11.1 Entire Agreement</h3>
                  <p>
                    These Terms constitute the entire agreement between you and Neon Byte AI regarding our Services 
                    and supersede all prior agreements and understandings.
                  </p>

                  <h3>11.2 Changes to Terms</h3>
                  <p>
                    We reserve the right to modify these Terms at any time. If we make changes, we will provide 
                    notice by posting the updated Terms on our website and updating the "Last Updated" date. 
                    Your continued use of our Services after any changes constitutes your acceptance of the new Terms.
                  </p>

                  <h3>11.3 Severability</h3>
                  <p>
                    If any provision of these Terms is held to be invalid or unenforceable, the remaining 
                    provisions will remain in full force and effect.
                  </p>

                  <h3>11.4 Contact Information</h3>
                  <p>
                    If you have any questions about these Terms, please contact us at:
                    <br />
                    <strong>Email:</strong> legal@nexusai.com
                    <br />
                    <strong>Address:</strong> 123 AI Innovation Drive, Tech Valley, CA 94025
                  </p>
                </section>

                {/* Agreement Confirmation */}
                <div className="cta-section">
                  <h3>Understanding Your Agreement</h3>
                  <p>
                    By using Neon Byte AI Services, you acknowledge that you have read, understood, and agree to be 
                    bound by these Terms of Service.
                  </p>
                  <div className="hero-buttons">
                    <button 
                      className="btn btn-primary" 
                      onClick={handleBackToHome}
                    >
                      I Understand
                    </button>
                    <button 
                      className="btn btn-outline" 
                      onClick={() => handleNavigation('/contact')}
                    >
                      Ask Questions
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

export default TermsOfService;
