// client/src/components/Signin.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Sign in attempt:', formData);
      // Here you would typically make an API call to your backend
      navigate('/dashboard'); // Redirect on success
    } catch (error) {
      console.error('Sign in failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = (provider) => {
    console.log(`Sign in with ${provider}`);
    // Implement social sign in logic
  };

  return (
    <div className="signin-page">
      {/* Background Decorations */}
      <div className="signin-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>

      <div className="signin-container">
        <div className="signin-card">
          {/* Header */}
          <div className="signin-header">
            <Link to="/" className="signin-logo">
              <i className="fas fa-robot"></i>
              <span>Nexus AI</span>
            </Link>
            <h1>Welcome Back</h1>
            <p>Sign in to your account to continue</p>
          </div>

          {/* Social Sign In Options */}
          <div className="social-signin">
            <button 
              className="social-btn google-btn"
              onClick={() => handleSocialSignIn('google')}
              type="button"
            >
              <i className="fab fa-google"></i>
              Continue with Google
            </button>
            
            <button 
              className="social-btn github-btn"
              onClick={() => handleSocialSignIn('github')}
              type="button"
            >
              <i className="fab fa-github"></i>
              Continue with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="divider">
            <span>Or continue with email</span>
          </div>

          {/* Sign In Form */}
          <form className="signin-form" onSubmit={handleSubmit}>
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
                  placeholder="Enter your password"
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
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
              
              <Link to="/forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            <button 
              type="submit" 
              className={`signin-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="signup-link">
            Don't have an account?{' '}
            <Link to="/signup" className="link">
              Create one here
            </Link>
          </div>

          {/* Demo Account Hint */}
          <div className="demo-hint">
            <p>Demo Account:</p>
            <p>Email: demo@aiworkers.com | Password: demo123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;