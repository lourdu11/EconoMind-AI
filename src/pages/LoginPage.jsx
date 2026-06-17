import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { MdAutoGraph, MdLock, MdPerson, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import './LoginPage.css';

export default function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!username || !password) { setError('Please enter username and password.'); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 800)); // Simulate auth delay
    const result = login(username.trim(), password);
    setLoading(false);
    if (!result.success) setError(result.error);
  };

  return (
    <div className="login-page">
      {/* Animated background particles */}
      <div className="login-bg">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="login-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
          }} />
        ))}
      </div>

      {/* Card */}
      <div className="login-card animate-scale-in">
        {/* Logo */}
        <div className="login-logo">
          <div className="login-logo-icon"><MdAutoGraph /></div>
          <div>
            <h1 className="login-logo-title">EconoMind AI</h1>
            <p className="login-logo-sub">Intelligent Economic Forecasting System</p>
          </div>
        </div>

        <div className="login-divider" />

        <h2 className="login-heading">Welcome Back</h2>
        <p className="login-desc">Sign in to access the dashboard</p>

        <form className="login-form" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="login-field">
            <label className="login-label">Username</label>
            <div className="login-input-wrap">
              <MdPerson className="login-input-icon" />
              <input
                type="text"
                className="login-input"
                placeholder="Enter your username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>
          </div>

          {/* Password */}
          <div className="login-field">
            <label className="login-label">Password</label>
            <div className="login-input-wrap">
              <MdLock className="login-input-icon" />
              <input
                type={showPass ? 'text' : 'password'}
                className="login-input"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button type="button" className="login-eye" onClick={() => setShowPass(v => !v)}>
                {showPass ? <MdVisibilityOff /> : <MdVisibility />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && <div className="login-error">⚠️ {error}</div>}

          {/* Submit */}
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? <span className="login-spinner" /> : '🚀 Sign In to Dashboard'}
          </button>
        </form>

        {/* Demo credentials */}
        <div className="login-demo">
          <p className="login-demo-title">Demo Credentials</p>
          <div className="login-demo-creds">
            <div className="login-demo-row">
              <span className="login-demo-label">Admin:</span>
              <code>admin</code> / <code>economimd2025</code>
            </div>
            <div className="login-demo-row">
              <span className="login-demo-label">Guest:</span>
              <code>guest</code> / <code>guest123</code>
            </div>
          </div>
        </div>

        <div className="login-footer">
          <p>EconoMind AI Dashboard · Research by <strong>B. Roshan</strong></p>
          <p>Based on World Bank Open API · All data is real-time</p>
        </div>
      </div>
    </div>
  );
}
