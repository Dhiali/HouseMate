import React, { useState } from 'react';
import HouseMateLogo from '../assets/HouseMate logo.png';
import './auth.css';

function AuthPage() {
  const [tab, setTab] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-logo">
          <img src={HouseMateLogo} alt="HouseMate" />
        </div>
        {!showForgot ? (
          <>
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
                  <button
                    type="button"
                    className="auth-link"
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                    onClick={() => setShowForgot(true)}
                  >
                    Forgot password?
                  </button>
                </div>
                <button className="auth-main-btn" type="submit">
                  Sign In to HouseMate
                </button>
              </form>
            ) : (
              <>
               
                <form className="auth-form" style={{ overflowX: 'hidden' }}>
                  <div className="auth-form-row" style={{ minWidth: 0 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <label>First Name</label>
                      <input
                        type="text"
                        className="auth-half-input"
                        placeholder="Enter your first name"
                        required
                        style={{ minWidth: 0, maxWidth: '100%' }}
                      />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="auth-half-input"
                        placeholder="Enter your last name"
                        required
                        style={{ minWidth: 0, maxWidth: '100%' }}
                      />
                    </div>
                  </div>
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
                  <label>Confirm Password</label>
                  <div className="auth-password">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      required
                    />
                    <span
                      className="auth-eye"
                      onClick={() => setShowConfirmPassword(v => !v)}
                      title={showConfirmPassword ? "Hide password" : "Show password"}
                      style={{ userSelect: 'none' }}
                    >
                      {showConfirmPassword ? (
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
                  <div className="auth-agree" style={{ display: 'flex', alignItems: 'center', marginTop: 8, marginBottom: 8 }}>
                    <input type="checkbox" id="agree" required />
                    <label htmlFor="agree" style={{ fontSize: '0.95rem', color: '#888', marginBottom: 0 }}>
                      I agree to the <a href="#" style={{ color: '#7b8fff' }}>Terms of Service</a>
                      and <a href="#" style={{ color: '#7b8fff' }}>Privacy Policy</a>
                    </label>
                  </div>
                  <button className="auth-main-btn" type="submit" style={{
                    marginTop: 10,
                    marginBottom: 0,
                    fontWeight: 600,
                    fontSize: '1.08rem',
                    background: 'linear-gradient(90deg, #7b8fff 0%, #a084ee 100%)',
                    boxShadow: '0 4px 24px 0 rgba(80, 80, 160, 0.10)'
                  }}>
                    Create HouseMate Account
                  </button>
                </form>
              </>
            )}
          </>
        ) : (
          <>
            <h1 className="auth-title" style={{ marginTop: 0, marginBottom: 12, fontSize: '2rem', fontWeight: 700 }}>Forgot Password</h1>
            <p className="auth-desc" style={{ color: '#7d7d8b', fontSize: '1.05rem', marginBottom: 28 }}>
              Enter your email address and we'll send you a link<br />to reset your password
            </p>
            <form className="auth-form">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email address" required />
              <button className="auth-main-btn" type="submit" style={{
                background: 'linear-gradient(90deg, #A084EE 0%, #7B8FFF 100%)',
                color: '#fff',
                opacity: 0.7,
                marginTop: 18,
                marginBottom: 10
              }}>
                Send Reset Link
              </button>
            </form>
            <div style={{ textAlign: 'center', marginTop: 16, fontSize: '1rem', color: '#888' }}>
              Remember your password?{' '}
              <button
                type="button"
                className="auth-link"
                style={{ background: 'none', border: 'none', padding: 0, color: '#7b8fff', cursor: 'pointer' }}
                onClick={() => setShowForgot(false)}
              >
                Sign in here
              </button>
            </div>
          </>
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
