import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useEconomic } from '../../context/EconomicContext';
import { useTheme } from '../../context/ThemeContext';
import { MdRefresh, MdNotificationsNone, MdAccessTime, MdLightMode, MdDarkMode, MdMenu } from 'react-icons/md';
import './Header.css';

const PAGE_TITLES = {
  '/':           { title: 'Dashboard',      sub: 'Economic Overview & Real-Time KPIs' },
  '/forecasting':{ title: 'AI Forecasting', sub: 'ML-Powered Economic Prediction Engine' },
  '/scenarios':  { title: 'Scenario Simulator', sub: 'What-If Analysis & Policy Simulation' },
  '/risk':       { title: 'Risk & Ethics',  sub: 'Risk Assessment & Ethical AI Framework' },
  '/literature': { title: 'Literature Review', sub: 'Research Studies & Methodology' },
  '/about':      { title: 'About Project', sub: 'EconoMind AI — Research Paper Summary' },
};

export default function Header({ toggleSidebar }) {
  const location = useLocation();
  const { country, countries, setCountry, refresh, loading, riskLevel } = useEconomic();
  const { theme, toggleTheme } = useTheme();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const page = PAGE_TITLES[location.pathname] || PAGE_TITLES['/'];

  return (
    <header className="app-header">
      <div className="header-left">
        <button className="header-icon-btn mobile-menu-btn" onClick={toggleSidebar} title="Menu">
          <MdMenu />
        </button>
        <div>
          <h1 className="header-title">{page.title}</h1>
          <p className="header-sub">{page.sub}</p>
        </div>
      </div>

      <div className="header-right">
        {/* Risk level badge */}
        <div className="header-risk-badge" style={{ '--risk-color': riskLevel.color }}>
          {riskLevel.label}
        </div>

        {/* Country selector */}
        <select
          className="header-country-select"
          value={country}
          onChange={e => setCountry(e.target.value)}
        >
          {countries.map(c => (
            <option key={c.code} value={c.code}>{c.flag} {c.name}</option>
          ))}
        </select>

        {/* Live clock */}
        <div className="header-clock">
          <MdAccessTime className="header-clock-icon" />
          <span>{time.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
        </div>

        {/* Refresh */}
        <button className="header-icon-btn" onClick={refresh} disabled={loading} title="Refresh Data">
          <MdRefresh className={loading ? 'spin' : ''} />
        </button>

        {/* Theme Toggle */}
        <button className="header-icon-btn" onClick={toggleTheme} title="Toggle Theme">
          {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
        </button>

        {/* Notifications */}
        <button className="header-icon-btn" title="Notifications">
          <MdNotificationsNone />
          <span className="header-notif-dot" />
        </button>

        {/* Live indicator */}
        <div className="header-live">
          <span className="live-dot" />
          <span>LIVE</span>
        </div>
      </div>
    </header>
  );
}
