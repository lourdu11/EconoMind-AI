import './AIInsightBox.css';

const generateInsight = (data, country) => {
  if (!data) return 'Loading economic insights...';
  const gdp = data.gdp?.slice(-1)[0]?.value ?? 0;
  const inf = data.inflation?.slice(-1)[0]?.value ?? 0;
  const une = data.unemployment?.slice(-1)[0]?.value ?? 0;
  const gdpTrend = (data.gdp?.slice(-3) ?? []).map(d => d.value);
  const gdpDir = gdpTrend.length > 1 ? (gdpTrend[gdpTrend.length-1] > gdpTrend[0] ? 'increasing' : 'declining') : 'stable';

  const insights = [];
  if (gdp > 5) insights.push(`GDP growth is strong at ${gdp}%, indicating robust economic expansion.`);
  else if (gdp > 0) insights.push(`GDP growth is moderate at ${gdp}%, showing a ${gdpDir} trend.`);
  else insights.push(`GDP is contracting at ${gdp}%, signaling economic stress.`);

  if (inf > 6) insights.push(`Inflation at ${inf}% is elevated — policymakers may consider tightening monetary policy.`);
  else if (inf > 3) insights.push(`Inflation at ${inf}% is within manageable range but warrants monitoring.`);
  else insights.push(`Inflation at ${inf}% is low, supporting consumer purchasing power.`);

  if (une > 7) insights.push(`Unemployment at ${une}% is high — workforce development initiatives may be needed.`);
  else if (une < 4) insights.push(`Unemployment at ${une}% is low, reflecting a tight labor market.`);

  return insights.join(' ');
};

export default function AIInsightBox({ data, country, loading }) {
  const insight = loading ? null : generateInsight(data, country);

  return (
    <div className="insight-box glass-card animate-fade-in-up">
      <div className="insight-glow-line" />
      <div className="insight-header">
        <div className="insight-icon">🤖</div>
        <div>
          <div className="insight-title">AI Economic Insight</div>
          <div className="insight-sub">Powered by EconoMind Forecasting Engine</div>
        </div>
        <div className="live-dot" style={{ marginLeft: 'auto' }} />
      </div>
      <div className="insight-body">
        {loading ? (
          <>
            <div className="skeleton skeleton-text" />
            <div className="skeleton skeleton-text" style={{ width: '80%' }} />
            <div className="skeleton skeleton-text" style={{ width: '60%' }} />
          </>
        ) : (
          <p className="insight-text">{insight}</p>
        )}
      </div>
      <div className="insight-tags">
        {['GDP Analysis', 'Inflation Watch', 'Employment Monitor', 'ML-Powered'].map(t => (
          <span key={t} className="insight-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}
