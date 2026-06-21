import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { EconomicProvider } from './context/EconomicContext';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/layout/Sidebar';
import Header  from './components/layout/Header';
import LoginPage   from './pages/LoginPage';
import Dashboard   from './pages/Dashboard';
import Forecasting from './pages/Forecasting';
import Scenarios   from './pages/Scenarios';
import RiskEthics  from './pages/RiskEthics';
import Literature  from './pages/Literature';
import About       from './pages/About';
import FullAnalysis from './pages/FullAnalysis';

function ProtectedLayout() {
  const { isAuthenticated, loading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  if (loading) return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'100vh', background:'#0A0E1A' }}>
      <div style={{ textAlign:'center' }}>
        <div style={{ width:48, height:48, border:'3px solid rgba(99,102,241,0.2)', borderTopColor:'#6366F1', borderRadius:'50%', animation:'spin 0.8s linear infinite', margin:'0 auto 16px' }} />
        <p style={{ color:'#6B7280', fontSize:'14px' }}>Loading EconoMind AI...</p>
      </div>
    </div>
  );
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <EconomicProvider>
      <div className="app-layout">
        <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
        {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar} />}
        <div className="main-content">
          <Header toggleSidebar={toggleSidebar} />
          <Routes>
            <Route path="/"           element={<Dashboard />} />
            <Route path="/forecasting"element={<Forecasting />} />
            <Route path="/scenarios"  element={<Scenarios />} />
            <Route path="/risk"       element={<RiskEthics />} />
            <Route path="/literature" element={<Literature />} />
            <Route path="/analysis"   element={<FullAnalysis />} />
            <Route path="/about"      element={<About />} />
            <Route path="*"           element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </EconomicProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPageWrapper />} />
            <Route path="/*"     element={<ProtectedLayout />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

function LoginPageWrapper() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Navigate to="/" replace />;
  return <LoginPage />;
}
