import './RiskEthics.css';

const ETHICS = [
  { icon:'🔐', label:'Privacy', status:'Compliant', color:'var(--color-accent)',
    desc:'All data collected from public World Bank and IMF databases. No personal data stored.' },
  { icon:'🛡️', label:'Security', status:'Protected', color:'var(--color-accent)',
    desc:'Data encryption, secure API calls, no sensitive financial records stored.' },
  { icon:'⚖️', label:'Fairness', status:'Monitored', color:'var(--color-warning)',
    desc:'Models trained on global data to reduce regional bias. Continuous evaluation ongoing.' },
  { icon:'🧪', label:'Bias Detection', status:'Active', color:'var(--color-info)',
    desc:'Algorithmic bias checks run on all forecasting models before output generation.' },
  { icon:'🤝', label:'Responsible AI', status:'Enforced', color:'var(--color-accent)',
    desc:'Human oversight required for all policy decisions. AI provides insights, not mandates.' },
  { icon:'📊', label:'Transparency', status:'High', color:'var(--color-primary)',
    desc:'All model parameters, data sources, and prediction confidence intervals are disclosed.' },
];

const RISKS = [
  { category:'Dataset Risk',      prob: 'Medium', impact: 'High',   desc:'Missing values, outdated records, or regional inconsistencies in source data.' },
  { category:'Technical Risk',    prob: 'Low',    impact: 'High',   desc:'System downtime, API failures, or computational resource limitations.' },
  { category:'Model Accuracy',    prob: 'Medium', impact: 'High',   desc:'Forecasting errors due to unprecedented events not in historical data.' },
  { category:'Black Swan Events', prob: 'Low',    impact: 'Critical',desc:'Pandemics, wars, financial crises — not predictable from historical patterns.' },
  { category:'Algorithmic Bias',  prob: 'Medium', impact: 'Medium', desc:'Training data from developed economies may underrepresent emerging markets.' },
  { category:'Policy Misuse',     prob: 'Low',    impact: 'High',   desc:'Forecasts used without human expert review for critical policy decisions.' },
];

const LIMITATIONS = [
  { icon:'📁', title:'Dataset Limitations',   color:'var(--color-warning)',
    items:['Incomplete historical records','Outdated data for some countries','Inconsistent reporting standards','Missing data for certain indicators'] },
  { icon:'💻', title:'Technical Constraints', color:'var(--color-info)',
    items:['High computational demand','Specialized ML infrastructure needed','Regular model updates required','Browser-based ML has accuracy limits'] },
  { icon:'🎯', title:'Accuracy Limitations',  color:'var(--color-danger)',
    items:['Cannot predict black swan events','Historical bias in training data','Confidence decreases over longer horizons','Limited to 6 economic indicators'] },
  { icon:'🌍', title:'Environmental Factors', color:'var(--color-purple)',
    items:['Government policy changes','Climate change impacts','Geopolitical conflicts','Technological disruptions'] },
];

const probColor = p => ({ High:'var(--color-danger)', Medium:'var(--color-warning)', Low:'var(--color-accent)' }[p] || 'var(--text-muted)');
const impColor  = p => ({ Critical:'#FF4081', High:'var(--color-danger)', Medium:'var(--color-warning)', Low:'var(--color-accent)' }[p] || 'var(--text-muted)');

export default function RiskEthics() {
  return (
    <div className="page-content page-enter">
      <div className="page-header">
        <h1 className="page-title">Risk & Ethics Analysis</h1>
        <p className="page-subtitle">Comprehensive ethical framework, risk assessment, and system limitations</p>
      </div>

      {/* Ethics Section */}
      <section className="section">
        <div className="section-title">🤝 Ethical AI Framework</div>
        <div className="ethics-grid">
          {ETHICS.map(e => (
            <div key={e.label} className="ethics-card glass-card glass-inner">
              <div className="ethics-card-top">
                <span className="ethics-icon">{e.icon}</span>
                <div>
                  <div className="ethics-label">{e.label}</div>
                  <div className="ethics-status" style={{ color: e.color }}>✓ {e.status}</div>
                </div>
              </div>
              <p className="ethics-desc">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Risk Matrix */}
      <section className="section">
        <div className="section-title">⚠️ Risk Assessment Matrix</div>
        <div className="glass-card glass-inner">
          <table className="risk-table">
            <thead>
              <tr>
                <th>Risk Category</th>
                <th>Probability</th>
                <th>Impact</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {RISKS.map(r => (
                <tr key={r.category}>
                  <td className="risk-cat">{r.category}</td>
                  <td><span className="risk-badge" style={{ color: probColor(r.prob), borderColor: `${probColor(r.prob)}44`, background: `${probColor(r.prob)}11` }}>{r.prob}</span></td>
                  <td><span className="risk-badge" style={{ color: impColor(r.impact), borderColor: `${impColor(r.impact)}44`, background: `${impColor(r.impact)}11` }}>{r.impact}</span></td>
                  <td className="risk-desc">{r.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Limitations */}
      <section className="section">
        <div className="section-title">🚧 System Limitations</div>
        <div className="limitations-grid">
          {LIMITATIONS.map(l => (
            <div key={l.title} className="limitation-card glass-card glass-inner" style={{ '--lim-color': l.color }}>
              <div className="lim-header">
                <span className="lim-icon">{l.icon}</span>
                <h4 className="lim-title" style={{ color: l.color }}>{l.title}</h4>
              </div>
              <ul className="lim-list">
                {l.items.map(item => (
                  <li key={item} className="lim-item">
                    <span className="lim-dot" style={{ background: l.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Human Oversight Banner */}
      <section className="section">
        <div className="human-oversight-banner glass-card glass-inner">
          <div className="oversight-icon">👤</div>
          <div>
            <h3 className="oversight-title">Human Oversight Principle</h3>
            <p className="oversight-text">
              Artificial Intelligence should not be viewed as a replacement for human expertise.
              EconoMind AI provides powerful forecasting insights, but all final economic policy
              decisions should involve economists, policymakers, and domain experts who can
              interpret results within broader economic, social, and political contexts.
              <strong> AI augments human intelligence — it does not replace it.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
