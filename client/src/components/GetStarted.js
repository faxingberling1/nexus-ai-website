// client/src/components/GetStarted.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const [selectedAccountType, setSelectedAccountType] = useState('');
  const [selectedUseCases, setSelectedUseCases] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const accountTypes = [
    {
      id: 'individual',
      title: 'Individual',
      description: 'Perfect for personal projects and learning',
      icon: 'fas fa-user',
      features: ['1 User', 'Basic Tools', 'Community Support']
    },
    {
      id: 'team',
      title: 'Team',
      description: 'Collaborate with your team members',
      icon: 'fas fa-users',
      features: ['Up to 5 Users', 'All Tools', 'Priority Support'],
      badge: 'Popular'
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      description: 'Advanced features for organizations',
      icon: 'fas fa-building',
      features: ['Unlimited Users', 'Advanced Features', 'Dedicated Support']
    }
  ];

  const useCases = [
    'Content Creation',
    'Data Analysis',
    'Code Development',
    'Marketing',
    'Research',
    'Customer Support',
    'Education',
    'Other'
  ];

  const handleAccountTypeSelect = (typeId) => {
    setSelectedAccountType(typeId);
  };

  const handleUseCaseToggle = (useCase) => {
    setSelectedUseCases(prev => 
      prev.includes(useCase) 
        ? prev.filter(uc => uc !== useCase)
        : [...prev, useCase]
    );
  };

  const handleGetStarted = async () => {
    if (!selectedAccountType) return;
    
    setIsLoading(true);
    
    // Store user preferences
    const userPreferences = {
      accountType: selectedAccountType,
      useCases: selectedUseCases
    };
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('User preferences:', userPreferences);
      
      // Redirect to signup page with preferences
      navigate('/signup', { 
        state: { 
          accountType: selectedAccountType,
          useCases: selectedUseCases
        }
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  const isFormValid = selectedAccountType && selectedUseCases.length > 0;

  return (
    <div className="get-started-page">
      {/* Background Decorations */}
      <div className="get-started-decoration">
        <div className="get-started-circle get-started-circle-1"></div>
        <div className="get-started-circle get-started-circle-2"></div>
        <div className="get-started-circle get-started-circle-3"></div>
        <div className="get-started-circle get-started-circle-4"></div>
      </div>

      <div className="get-started-container">
        <div className="get-started-card">
          {/* Progress Indicator */}
          <div className="progress-steps">
            <div className="progress-step active"></div>
            <div className="progress-step"></div>
            <div className="progress-step"></div>
          </div>

          {/* Header */}
          <div className="get-started-header">
            <Link to="/" className="get-started-logo">
              <i className="fas fa-robot"></i>
              <span>Nexus AI</span>
            </Link>
            <h1>Get Started</h1>
            <p>Tell us about yourself to personalize your experience</p>
          </div>

          {/* Account Type Selection */}
          <div className="account-type-section">
            <h3 className="section-title">Choose Your Account Type</h3>
            <div className="account-type-grid">
              {accountTypes.map((type) => (
                <div
                  key={type.id}
                  className={`account-type-card ${
                    selectedAccountType === type.id ? 'selected' : ''
                  }`}
                  onClick={() => handleAccountTypeSelect(type.id)}
                >
                  {type.badge && (
                    <span className="type-badge">{type.badge}</span>
                  )}
                  <div className="type-icon">
                    <i className={type.icon}></i>
                  </div>
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Case Selection */}
          <div className="use-case-section">
            <h3 className="section-title">What will you use Nexus AI for?</h3>
            <div className="use-case-grid">
              {useCases.map((useCase) => (
                <div
                  key={useCase}
                  className={`use-case-chip ${
                    selectedUseCases.includes(useCase) ? 'selected' : ''
                  }`}
                  onClick={() => handleUseCaseToggle(useCase)}
                >
                  {useCase}
                </div>
              ))}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="feature-highlights">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <span>Fast Setup</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <span>Secure</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-infinity"></i>
              </div>
              <span>Flexible</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <span>Support</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="get-started-actions">
            <button
              className={`get-started-btn primary ${isLoading ? 'loading' : ''}`}
              onClick={handleGetStarted}
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Creating Your Account...
                </>
              ) : (
                <>
                  <i className="fas fa-rocket"></i>
                  Create My Account
                </>
              )}
            </button>

            <button
              className="get-started-btn secondary"
              onClick={handleSignIn}
              disabled={isLoading}
            >
              <i className="fas fa-sign-in-alt"></i>
              Sign In to Existing Account
            </button>
          </div>

          {/* Sign In Link */}
          <div className="get-started-signin">
            Already have an account?{' '}
            <Link to="/signin" className="link">
              Sign in here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;