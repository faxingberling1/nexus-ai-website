// client/src/components/SignUp.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    strength: '',
    score: 0
  });
  const [signupSuccess, setSignupSuccess] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get account type from GetStarted page
  const accountType = location.state?.accountType || 'individual';
  const useCases = location.state?.useCases || [];

  const accountTypes = {
    individual: {
      title: 'Individual Account',
      description: 'Perfect for personal projects',
      icon: 'fas fa-user'
    },
    team: {
      title: 'Team Account',
      description: 'Collaborate with your team',
      icon: 'fas fa-users'
    },
    enterprise: {
      title: 'Enterprise Account',
      description: 'Advanced features for organizations',
      icon: 'fas fa-building'
    }
  };

  useEffect(() => {
    // Check password strength
    const calculatePasswordStrength = (password) => {
      let score = 0;
      if (password.length >= 8) score += 1;
      if (/[A-Z]/.test(password)) score += 1;
      if (/[a-z]/.test(password)) score += 1;
      if (/[0-9]/.test(password)) score += 1;
      if (/[^A-Za-z0-9]/.test(password)) score += 1;

      let strength = '';
      if (score <= 2) strength = 'weak';
      else if (score <= 4) strength = 'medium';
      else strength = 'strong';

      return { strength, score };
    };

    setPasswordStrength(calculatePasswordStrength(formData.password));
  }, [formData.password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!acceptTerms) {
      alert('Please accept the Terms of Service and Privacy Policy');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const userData = {
        ...formData,
        accountType,
        useCases,
        createdAt: new Date().toISOString()
      };
      
      console.log('User signed up:', userData);
      
      // Show success message
      setSignupSuccess(true);
      
      // Redirect to dashboard after delay
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
      
    } catch (error) {
      console.error('Sign up failed:', error);
      alert('Sign up failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignUp = (provider) => {
    console.log(`Sign up with ${provider}`);
    // Implement social sign up logic
  };

  const getPasswordStrengthText = () => {
    switch (passwordStrength.strength) {
      case 'weak': return 'Weak password';
      case 'medium': return 'Medium strength';
      case 'strong': return 'Strong password';
      default: return 'Enter a password';
    }
  };

  if (signupSuccess) {
    return (
      <div className="signup-page">
        <div className="signup-decoration">
          <div className="signup-circle signup-circle-1"></div>
          <div className="signup-circle signup-circle-2"></div>
          <div className="signup-circle signup-circle-3"></div>
        </div>

        <div className="signup-container">
          <div className="signup-card">
            <div className="success-message">
              <div className="success-icon">
                <i className="fas fa-check"></i>
              </div>
              <h3>Welcome to Neon Byte AI!</h3>
              <p>Your account has been created successfully. Redirecting to your dashboard...</p>
              <div className="spinner" style={{ margin: '0 auto' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-page">
      {/* Background Decorations */}
      <div className="signup-decoration">
        <div className="signup-circle signup-circle-1"></div>
        <div className="signup-circle signup-circle-2"></div>
        <div className="signup-circle signup-circle-3"></div>
      </div>

      <div className="signup-container">
        <div className="signup-card">
          {/* Header */}
          <div className="signup-header">
            <Link to="/" className="signup-logo">
              <i className="fas fa-robot"></i>
              <span>Neon Byte AI</span>
            </Link>
            <h1>Create Account</h1>
            <p>Join thousands of AI-powered creators</p>
          </div>

          {/* Account Type Preview */}
          <div className="account-preview">
            <div className="account-preview-icon">
              <i className={accountTypes[accountType].icon}></i>
            </div>
            <div className="account-preview-info">
              <h4>{accountTypes[accountType].title}</h4>
              <p>{accountTypes[accountType].description}</p>
            </div>
            <Link to="/get-started" className="change-account-link">
              Change
            </Link>
          </div>

          {/* Social Sign Up Options */}
          <div className="social-signup">
            <button 
              className="social-btn google-btn"
              onClick={() => handleSocialSignUp('google')}
              type="button"
            >
              <i className="fab fa-google"></i>
              Continue with Google
            </button>
            
            <button 
              className="social-btn github-btn"
              onClick={() => handleSocialSignUp('github')}
              type="button"
            >
              <i className="fab fa-github"></i>
              Continue with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="divider">
            <span>Or sign up with email</span>
          </div>

          {/* Sign Up Form */}
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <div className="input-wrapper">
                  <i className="fas fa-user input-icon"></i>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your first name"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <div className="input-wrapper">
                  <i className="fas fa-user input-icon"></i>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your last name"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="input-wrapper">
                <i className="fas fa-envelope input-icon"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-wrapper">
                <i className="fas fa-lock input-icon"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Create a password"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
              {formData.password && (
                <div className="password-strength">
                  <div className="strength-bar">
                    <div className={`strength-fill ${passwordStrength.strength}`}></div>
                  </div>
                  <div className="strength-text">
                    {getPasswordStrengthText()}
                  </div>
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <div className="input-wrapper">
                <i className="fas fa-lock input-icon"></i>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Confirm your password"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={isLoading}
                >
                  <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <div className="strength-text" style={{ color: '#f44336' }}>
                  Passwords do not match
                </div>
              )}
            </div>

            <div className="terms-group">
              <label className="terms-label">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  disabled={isLoading}
                />
                <span className="terms-checkmark"></span>
                <span className="terms-text">
                  I agree to the{' '}
                  <Link to="/terms" className="terms-link">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="terms-link">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              className={`signup-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading || !acceptTerms || formData.password !== formData.confirmPassword}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          {/* Sign In Link */}
          <div className="signin-link">
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

export default SignUp;
