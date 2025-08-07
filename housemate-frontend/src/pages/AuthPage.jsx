import React, { useState } from 'react';
import HouseMateLogo from '../assets/HouseMate logo.png';
import './auth.css';

function AuthPage() {
  const [tab, setTab] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-logo">
          <img src={HouseMateLogo} alt="HouseMate" />
        </div>
        <h1 className="auth-title">HouseMate</h1>
        <p className="auth-desc">
          Manage chores, bills and responsibilities with your housemates in a fair and organized way.
        </p>
        <div className="auth-tabs">
          <button
            className={tab === 'signin' ? 'active' : ''}
            onClick={() => setTab('signin')}
          >
            Sign In
          </button>
          <button
            className={tab === 'signup' ? 'active' : ''}
            onClick={() => setTab('signup')}
          >
            Sign Up
          </button>
        </div>
        {tab === 'signin' ? (
          <form className="auth-form">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
            <label>Password</label>
            <div className="auth-password">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                required
              />
              <span
                className="auth-eye"
                onClick={() => setShowPassword(v => !v)}
                title={showPassword ? "Hide password" : "Show password"}
                style={{ userSelect: 'none' }}
              >
                {showPassword ? (
                  // Open eye SVG
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <ellipse cx="10" cy="10" rx="7" ry="4" stroke="#888" strokeWidth="1.5" fill="none"/>
                    <circle cx="10" cy="10" r="1.8" fill="#888"/>
                  </svg>
                ) : (
                  // Closed eye SVG
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <ellipse cx="10" cy="10" rx="7" ry="4" stroke="#888" strokeWidth="1.5" fill="none"/>
                    <line x1="5" y1="15" x2="15" y2="5" stroke="#888" strokeWidth="1.5"/>
                  </svg>
                )}
              </span>
            </div>
            <div className="auth-row">
              <label className="auth-remember">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="auth-link">Forgot password?</a>
            </div>
            <button className="auth-main-btn" type="submit">
              Sign In to HouseMate
            </button>
          </form>
        ) : (
          <form className="auth-form">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" required />
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
            <label>Password</label>
            <div className="auth-password">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                required
              />
              <span
                className="auth-eye"
                onClick={() => setShowPassword(v => !v)}
                title={showPassword ? "Hide password" : "Show password"}
                style={{ userSelect: 'none' }}
              >
                {showPassword ? (
                  // Open eye SVG
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <ellipse cx="10" cy="10" rx="7" ry="4" stroke="#888" strokeWidth="1.5" fill="none"/>
                    <circle cx="10" cy="10" r="1.8" fill="#888"/>
                  </svg>
                ) : (
                  // Closed eye SVG
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <ellipse cx="10" cy="10" rx="7" ry="4" stroke="#888" strokeWidth="1.5" fill="none"/>
                    <line x1="5" y1="15" x2="15" y2="5" stroke="#888" strokeWidth="1.5"/>
                  </svg>
                )}
              </span>
            </div>
            <button className="auth-main-btn" type="submit">
              Sign Up to HouseMate
            </button>
          </form>
        )}
      
    
      </div>
      <div className="auth-footer">
        By continuing, you agree to our
        <a href="#">Terms of Service</a>
        and
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
}

export default AuthPage;
