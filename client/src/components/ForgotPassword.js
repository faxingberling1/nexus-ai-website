// client/src/components/ResetPassword.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    strength: '',
    score: 0
  });
  const [resetSuccess, setResetSuccess] = useState(false);
  
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

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

    if (passwordStrength.strength === 'weak') {
      alert('Please choose a stronger password');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Password reset with token:', token);
      console.log('New password set');
      
      // Show success message
      setResetSuccess(true);
      
      // Redirect to sign in after delay
      setTimeout(() => {
        navigate('/signin');
      }, 3000);
      
    } catch (error) {
      console.error('Password reset failed:', error);
      alert('Failed to reset password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrengthText = () => {
    switch (passwordStrength.strength) {
      case 'weak': return 'Weak password';
      case 'medium': return 'Medium strength';
      case 'strong': return 'Strong password';
      default: return 'Enter a password';
    }
  };

  const checkPasswordRequirement = (requirement) => {
    switch (requirement) {
      case 'length':
        return formData.password.length >= 8;
      case 'uppercase':
        return /[A-Z]/.test(formData.password);
      case 'lowercase':
        return /[a-z]/.test(formData.password);
      case 'number':
        return /[0-9]/.test(formData.password);
      case 'special':
        return /[^A-Za-z0-9]/.test(formData.password);
      default:
        return false;
    }
  };

  if (resetSuccess) {
    return (
      <div className="forgot-password-page">
        <div className="forgot-password-container">
          <div className="forgot-password-card">
            <div className="success-message">
              <div className="success-icon">
                <i className="fas fa-check"></i>
              </div>
              <h3>Password Reset Successfully!</h3>
              <p>Your password has been updated. Redirecting to sign in...</p>
              <div className="spinner" style={{ margin: '0 auto' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <div className="forgot-password-card">
          {/* Header */}
          <div className="forgot-password-header">
            <Link to="/" className="forgot-password-logo">
              <i className="fas fa-robot"></i>
              <span>Neon Byte AI</span>
            </Link>
            <h1>Create New Password</h1>
            <p>Choose a strong password for your account</p>
          </div>

          {/* Password Requirements */}
          <div className="password-requirements">
            <h4>
              <i className="fas fa-shield-alt"></i>
              Password Requirements
            </h4>
            <ul>
              <li className={checkPasswordRequirement('length') ? 'requirement-met' : ''}>
                At least 8 characters long
              </li>
              <li className={checkPasswordRequirement('uppercase') ? 'requirement-met' : ''}>
                One uppercase letter (A-Z)
              </li>
              <li className={checkPasswordRequirement('lowercase') ? 'requirement-met' : ''}>
                One lowercase letter (a-z)
              </li>
              <li className={checkPasswordRequirement('number') ? 'requirement-met' : ''}>
                One number (0-9)
              </li>
              <li className={checkPasswordRequirement('special') ? 'requirement-met' : ''}>
                One special character (!@#$% etc.)
              </li>
            </ul>
          </div>

          {/* Reset Password Form */}
          <form className="forgot-password-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                New Password
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
                  placeholder="Enter new password"
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
                Confirm New Password
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
                  placeholder="Confirm new password"
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

            <button 
              type="submit" 
              className={`reset-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading || formData.password !== formData.confirmPassword || passwordStrength.strength === 'weak'}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Resetting Password...
                </>
              ) : (
                'Reset Password'
              )}
            </button>
          </form>

          {/* Back to Sign In */}
          <div className="back-to-signin">
            <Link to="/signin" className="link">
              ← Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
