import { useEffect, useRef, useState } from 'react';
import './KPICard.css';

export default function KPICard({ title, value, unit = '%', icon, change, color = 'var(--color-primary)', loading }) {
  const [displayValue, setDisplayValue] = useState(0);
  const animRef = useRef(null);

  useEffect(() => {
    if (loading || value === undefined || value === null) return;
    const target = parseFloat(value);
    const duration = 1200;
    const start = performance.now();

    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(parseFloat((target * eased).toFixed(1)));
      if (progress < 1) animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [value, loading]);

  const isPositive = change >= 0;

  if (loading) {
    return (
      <div className="kpi-card skeleton-card glass-card">
        <div className="skeleton skeleton-title" />
        <div className="skeleton" style={{ height: '3rem', margin: '0.75rem 0' }} />
        <div className="skeleton skeleton-text" style={{ width: '40%' }} />
      </div>
    );
  }

  return (
    <div className="kpi-card glass-card animate-fade-in-up" style={{ '--kpi-color': color }}>
      {/* Top glow line */}
      <div className="kpi-glow-line" />

      <div className="kpi-header">
        <span className="kpi-title">{title}</span>
        <div className="kpi-icon-wrap">{icon}</div>
      </div>

      <div className="kpi-value-row">
        <span className="kpi-value">{displayValue}</span>
        <span className="kpi-unit">{unit}</span>
      </div>

      {change !== undefined && (
        <div className={`kpi-change ${isPositive ? 'positive' : 'negative'}`}>
          <span className="kpi-change-arrow">{isPositive ? '▲' : '▼'}</span>
          <span>{Math.abs(change).toFixed(1)}% vs last year</span>
        </div>
      )}

      <div className="kpi-bar-bg">
        <div
          className="kpi-bar-fill"
          style={{ width: `${Math.min(100, Math.abs(value) * 5 + 20)}%` }}
        />
      </div>
    </div>
  );
}
