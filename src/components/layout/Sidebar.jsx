import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  MdDashboard, MdQueryStats, MdScience, MdWarning,
  MdMenuBook, MdInfo, MdLogout, MdAutoGraph, MdAnalytics
} from 'react-icons/md';
import './Sidebar.css';

const NAV = [
  { to: '/',           icon: <MdDashboard />,   label: 'Dashboard'    },
  { to: '/forecasting',icon: <MdQueryStats />,  label: 'Forecasting'  },
  { to: '/scenarios',  icon: <MdScience />,     label: 'Scenarios'    },
  { to: '/risk',       icon: <MdWarning />,     label: 'Risk & Ethics'},
  { to: '/literature', icon: <MdMenuBook />,    label: 'Literature'   },
  { to: '/analysis',   icon: <MdAnalytics />,   label: 'Full Analysis'},
  { to: '/about',      icon: <MdInfo />,        label: 'About'        },
];

export default function Sidebar({ isOpen, closeSidebar }) {
  const { logout, user } = useAuth();

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon"><MdAutoGraph /></div>
        <div className="sidebar-logo-text">
          <span className="sidebar-logo-title">EconoMind</span>
          <span className="sidebar-logo-sub">AI Dashboard</span>
        </div>
      </div>

      <div className="sidebar-divider" />

      {/* Nav links */}
      <nav className="sidebar-nav">
        {NAV.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            onClick={closeSidebar}
            className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
          >
            <span className="sidebar-link-icon">{icon}</span>
            <span className="sidebar-link-label">{label}</span>
            <span className="sidebar-link-indicator" />
          </NavLink>
        ))}
      </nav>

      {/* User + Logout */}
      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-avatar">{user?.username?.[0]?.toUpperCase()}</div>
          <div className="sidebar-user-info">
            <span className="sidebar-username">{user?.username}</span>
            <span className="sidebar-role">{user?.role}</span>
          </div>
        </div>
        <button className="sidebar-logout" onClick={logout} title="Logout">
          <MdLogout />
        </button>
      </div>
    </aside>
  );
}
