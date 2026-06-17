import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('economimd_user');
    if (stored) {
      try { setUser(JSON.parse(stored)); } catch { localStorage.removeItem('economimd_user'); }
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    const VALID = { admin: 'economimd2025', roshan: 'roshan2025', guest: 'guest123' };
    if (VALID[username] && VALID[username] === password) {
      const userData = { username, role: username === 'guest' ? 'viewer' : 'admin', loginTime: new Date().toISOString() };
      setUser(userData);
      localStorage.setItem('economimd_user', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, error: 'Invalid username or password.' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('economimd_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
