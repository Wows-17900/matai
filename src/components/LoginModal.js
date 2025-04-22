import React, { useState } from 'react';
import '../styles/LoginModal.css';

function LoginModal({ isOpen, onClose, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
    setUsername('');
    setPassword('');
    setRememberMe(false);
    onClose();
  };

  const handleForgotPassword = () => {
    alert('Password recovery feature would be implemented here.');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className="modal-container">
        <div className="modal-header">
          <h2>Welcome Back</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <div className="additional-options">
            <div className="remember-me">
              <input 
                type="checkbox" 
                id="remember" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <span 
              className="forgot-password"
              onClick={handleForgotPassword}
            >
              Forgot password?
            </span>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="login-button">Sign In</button>
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
          
          <div className="or-divider">
            <span>or</span>
          </div>
          
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#666', margin: '10px 0' }}>
            Don't have an account? <span style={{ color: '#333', fontWeight: '500', cursor: 'pointer' }}>Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
