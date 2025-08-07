import React, { useState } from 'react';
import './auth.css';
import HouseMateLogo from '../assets/HouseMate logo.png';

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
              >👁️</span>
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
              >👁️</span>
            </div>
            <button className="auth-main-btn" type="submit">
              Sign Up to HouseMate
            </button>
          </form>
        )}
      
        <div className="auth-policy">
          By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
        </div>
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
