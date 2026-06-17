import { useEffect, useRef, useState } from 'react';
import './HealthScoreCard.css';

export default function HealthScoreCard({ score = 0, loading }) {
  const [display, setDisplay] = useState(0);
  const animRef = useRef(null);

  useEffect(() => {
    if (loading) return;
    const duration = 1500;
    const start = performance.now();
    const animate = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(score * e));
      if (p < 1) animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [score, loading]);

  const getColor = (s) => s >= 70 ? '#10B981' : s >= 45 ? '#F59E0B' : '#EF4444';
  const getLabel = (s) => s >= 70 ? 'Excellent' : s >= 45 ? 'Moderate' : 'Critical';
  const circumference = 2 * Math.PI * 54;
  const strokeDash = circumference - (display / 100) * circumference;
  const color = getColor(display);

  if (loading) return <div className="health-card glass-card skeleton-card" />;

  return (
    <div className="health-card glass-card animate-fade-in-up">
      <div className="health-glow-line" style={{ background: color }} />
      <div className="health-header">
        <span className="health-title">Economic Health Score</span>
        <span className="health-ai-badge">🤖 AI Generated</span>
      </div>
      <div className="health-body">
        <div className="health-gauge-wrap">
          <svg width="130" height="130" viewBox="0 0 130 130">
            <circle cx="65" cy="65" r="54" fill="none" stroke="var(--border-glass)" strokeWidth="10"/>
            <circle
              cx="65" cy="65" r="54" fill="none"
              stroke={color} strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDash}
              transform="rotate(-90 65 65)"
              style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4,0,0.2,1)' }}
            />
            <text x="65" y="60" textAnchor="middle" fill="var(--text-primary)" fontSize="26" fontWeight="700">{display}</text>
            <text x="65" y="78" textAnchor="middle" fill="var(--text-muted)" fontSize="11">/100</text>
          </svg>
          <div className="health-gauge-label" style={{ color }}>{getLabel(display)}</div>
        </div>
        <div className="health-metrics">
          {[
            { label: 'GDP Signal',    val: Math.min(100, score + 10), color: '#6366F1' },
            { label: 'Inflation',     val: Math.max(20, 100 - score), color: '#EF4444' },
            { label: 'Employment',    val: Math.min(100, score + 5),  color: '#10B981' },
            { label: 'Investment',    val: Math.min(100, score + 8),  color: '#8B5CF6' },
          ].map(m => (
            <div key={m.label} className="health-metric-row">
              <span className="health-metric-label">{m.label}</span>
              <div className="health-metric-bar-bg">
                <div className="health-metric-bar" style={{ width: `${m.val}%`, background: m.color }} />
              </div>
              <span className="health-metric-val">{m.val}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
