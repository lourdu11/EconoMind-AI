import { useState, useMemo } from 'react';
import { useEconomic } from '../context/EconomicContext';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { runLinearRegression } from '../ml/linearRegression';
import './Scenarios.css';

const SCENARIO_PARAMS = [
  { key: 'interestRate',    label: 'Interest Rate (%)',     min: 0,  max: 20,  step: 0.5, default: 6,  color: '#6366F1', icon: '🏦' },
  { key: 'tradeBalance',    label: 'Trade Balance (% GDP)', min: -10, max: 10, step: 0.5, default: 0,  color: '#10B981', icon: '⚖️' },
  { key: 'investment',      label: 'Investment (% GDP)',    min: 10, max: 50,  step: 1,   default: 30, color: '#F59E0B', icon: '💰' },
  { key: 'consumerSpending',label: 'Consumer Spending (%)', min: -5, max: 15,  step: 0.5, default: 5,  color: '#8B5CF6', icon: '🛒' },
];

export default function Scenarios() {
  const { data, loading } = useEconomic();
  const [params, setParams] = useState(Object.fromEntries(SCENARIO_PARAMS.map(p => [p.key, p.default])));

  // Base GDP forecast (no changes)
  const baseForecast = useMemo(() => {
    if (!data?.gdp?.length) return [];
    return runLinearRegression(data.gdp, 5).forecast;
  }, [data]);

  // Scenario forecast — adjust based on sliders
  const scenarioForecast = useMemo(() => {
    if (!baseForecast.length) return [];
    const ir = params.interestRate;
    const tb = params.tradeBalance;
    const inv = params.investment;
    const cs = params.consumerSpending;

    // Economic impact multipliers (simplified)
    const irEffect   = -(ir - 6) * 0.08;   // Higher interest → lower GDP
    const tbEffect   = tb * 0.05;            // Surplus → GDP boost
    const invEffect  = (inv - 30) * 0.04;   // Higher investment → GDP boost
    const csEffect   = cs * 0.06;            // Higher spending → GDP boost
    const netEffect  = irEffect + tbEffect + invEffect + csEffect;

    return baseForecast.map((f, i) => ({
      ...f,
      value: parseFloat((f.value + netEffect * (1 + i * 0.1)).toFixed(2)),
      algorithm: 'Scenario Simulation',
    }));
  }, [baseForecast, params]);

  // Combine for chart
  const chartData = useMemo(() => {
    const hist = (data?.gdp ?? []).slice(-5).map(d => ({
      year: d.year, actual: d.value, base: null, scenario: null,
    }));
    const projected = baseForecast.map((f, i) => ({
      year: f.year, actual: null,
      base: f.value,
      scenario: scenarioForecast[i]?.value ?? null,
    }));
    return [...hist, ...projected];
  }, [data, baseForecast, scenarioForecast]);

  const impact = useMemo(() => {
    if (!baseForecast.length || !scenarioForecast.length) return 0;
    const avg = (arr) => arr.reduce((s,v) => s + v.value, 0) / arr.length;
    return parseFloat((avg(scenarioForecast) - avg(baseForecast)).toFixed(2));
  }, [baseForecast, scenarioForecast]);

  return (
    <div className="page-content page-enter">
      <div className="page-header">
        <h1 className="page-title">Scenario Simulator</h1>
        <p className="page-subtitle">Adjust economic parameters and see real-time impact on GDP forecast</p>
      </div>

      <div className="scenario-grid">
        {/* Sliders */}
        <div className="scenario-controls">
          <div className="glass-card glass-inner">
            <h3 className="scenario-panel-title">⚙️ Economic Parameters</h3>
            <p className="scenario-panel-sub">Drag sliders to simulate different economic conditions</p>
            <div className="scenario-sliders">
              {SCENARIO_PARAMS.map(p => (
                <div key={p.key} className="scenario-slider-group">
                  <div className="scenario-slider-header">
                    <span className="scenario-slider-icon">{p.icon}</span>
                    <span className="scenario-slider-label">{p.label}</span>
                    <strong className="scenario-slider-val" style={{ color: p.color }}>{params[p.key]}</strong>
                  </div>
                  <input
                    type="range" min={p.min} max={p.max} step={p.step}
                    value={params[p.key]}
                    onChange={e => setParams(prev => ({ ...prev, [p.key]: parseFloat(e.target.value) }))}
                    className="scenario-slider"
                    style={{ '--slider-color': p.color }}
                  />
                  <div className="scenario-slider-range">
                    <span>{p.min}</span><span>{p.max}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Reset */}
            <button className="scenario-reset-btn"
              onClick={() => setParams(Object.fromEntries(SCENARIO_PARAMS.map(p => [p.key, p.default])))}>
              🔄 Reset to Default
            </button>
          </div>

          {/* Impact summary */}
          <div className={`glass-card glass-inner impact-card ${impact >= 0 ? 'positive' : 'negative'}`}>
            <div className="impact-icon">{impact >= 0 ? '📈' : '📉'}</div>
            <div className="impact-label">GDP Impact</div>
            <div className="impact-value" style={{ color: impact >= 0 ? 'var(--color-accent)' : 'var(--color-danger)' }}>
              {impact >= 0 ? '+' : ''}{impact}%
            </div>
            <div className="impact-sub">vs baseline forecast (5-year avg)</div>
          </div>
        </div>

        {/* Chart */}
        <div className="glass-card glass-inner">
          <div className="chart-header">
            <div>
              <h3 className="chart-title">GDP Forecast — Before vs After</h3>
              <p className="chart-sub">Blue = Baseline | Orange = Your Scenario</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={340}>
            <LineChart data={chartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-glass)" />
              <XAxis dataKey="year" stroke="var(--text-muted)" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
              <YAxis stroke="var(--text-muted)" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
              <Tooltip
                contentStyle={{ background:'var(--bg-surface)', border:'1px solid var(--border-glass)', borderRadius:'8px' }}
                labelStyle={{ color:'var(--text-muted)', fontSize:'11px' }}
                itemStyle={{ fontSize:'12px', color:'var(--text-primary)' }}
              />
              <Legend wrapperStyle={{ fontSize:'12px' }} />
              <Line type="monotone" dataKey="actual"   name="Historical" stroke="#6B7280" strokeWidth={2} dot={false} connectNulls />
              <Line type="monotone" dataKey="base"     name="Baseline"   stroke="#6366F1" strokeWidth={2} strokeDasharray="5 3" dot={false} connectNulls />
              <Line type="monotone" dataKey="scenario" name="Scenario"   stroke="#F59E0B" strokeWidth={2.5} dot={{ fill:'#F59E0B', r:4 }} connectNulls />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Impact Matrix */}
      <section className="section">
        <div className="section-title">📋 Policy Impact Matrix</div>
        <div className="impact-matrix glass-card glass-inner">
          <table className="matrix-table">
            <thead>
              <tr>
                <th>Parameter</th><th>Current Value</th><th>Default</th><th>Direction</th><th>GDP Effect</th><th>Interpretation</th>
              </tr>
            </thead>
            <tbody>
              {SCENARIO_PARAMS.map(p => {
                const curr = params[p.key];
                const def  = p.default;
                const diff = curr - def;
                const effects = {
                  interestRate:    diff < 0 ? 'Stimulative' : 'Contractionary',
                  tradeBalance:    diff > 0 ? 'Surplus Boost' : 'Deficit Drag',
                  investment:      diff > 0 ? 'Expansionary' : 'Restrictive',
                  consumerSpending:diff > 0 ? 'Demand Pull' : 'Demand Drop',
                };
                return (
                  <tr key={p.key}>
                    <td><span style={{ color: p.color }}>{p.icon}</span> {p.label}</td>
                    <td style={{ color: p.color, fontWeight: 700 }}>{curr}</td>
                    <td>{def}</td>
                    <td>{diff > 0 ? '▲ Increased' : diff < 0 ? '▼ Decreased' : '— No Change'}</td>
                    <td style={{ color: diff !== 0 ? (diff > 0 ? 'var(--color-accent)' : 'var(--color-danger)') : 'var(--text-muted)' }}>
                      {diff !== 0 ? `${diff > 0 ? '+' : ''}${(diff * 0.05).toFixed(2)}%` : '0%'}
                    </td>
                    <td style={{ color: 'var(--text-muted)', fontSize: 'var(--font-xs)' }}>{effects[p.key]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Policy Recommendation */}
      <section className="section">
        <div className="section-title">💡 AI Policy Recommendation</div>
        <div className="glass-card glass-inner policy-card">
          <div className="policy-icon">🤖</div>
          <div>
            <h4 className="policy-title">Automated Policy Analysis</h4>
            <p className="policy-text">
              Based on your scenario parameters, the model predicts a <strong style={{ color: impact >= 0 ? 'var(--color-accent)' : 'var(--color-danger)' }}>
              {impact >= 0 ? `+${impact}%` : `${impact}%`}</strong> change in GDP over 5 years.
              {params.interestRate > 8 && ' High interest rates may dampen investment — consider loosening monetary policy.'}
              {params.interestRate < 4 && ' Low interest rates stimulate growth but may increase inflation risk.'}
              {params.investment > 35 && ' Strong investment levels will support long-term structural growth.'}
              {params.tradeBalance < -3 && ' Trade deficit may pressure currency stability — export diversification recommended.'}
              {' Continuous monitoring and adaptive policy responses are essential for sustainable economic outcomes.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
