import './Literature.css';

const AUTHORS = [
  { name:'Susan Athey & Guido Imbens', year:2019, area:'Machine Learning in Economics',     findings:'Machine learning methods can improve economic analysis by handling complex high-dimensional data.' },
  { name:'Susan Athey',                year:2018, area:'Impact of ML on Economics',          findings:'AI and ML are expected to significantly transform economic research, forecasting, and policy analysis.' },
  { name:'Babii, Ghysels & Striaukas', year:2023, area:'Machine Learning in Forecasting',   findings:'Neural networks, random forests, and boosting methods improve economic forecasting and nowcasting.' },
  { name:'Pete Richardson',            year:2019, area:'Big Data in Macroeconomic Forecasting', findings:'Big data sources provide valuable information for short-term economic forecasting and real-time monitoring.' },
  { name:'Ajit Desai',                 year:2023, area:'Machine Learning for Economic Research',findings:'ML improves prediction accuracy and is becoming essential for modern economic research and policy analysis.' },
];

const METHODOLOGY_STEPS = [
  { icon:'🌐', step:'01', title:'Data Sources',      desc:'World Bank, IMF, Govt Reports, Academic Journals, Economic Surveys' },
  { icon:'🧹', step:'02', title:'Data Collection',   desc:'Secondary research methodology using quantitative and qualitative data' },
  { icon:'⚙️', step:'03', title:'Data Processing',   desc:'Cleaning, normalization, feature selection, handling missing values' },
  { icon:'🤖', step:'04', title:'AI Model Training', desc:'Linear Regression, Decision Tree, Random Forest, Neural Networks' },
  { icon:'📊', step:'05', title:'Model Testing',     desc:'Accuracy, Precision, Recall, F1 Score evaluation on unseen data' },
  { icon:'🔮', step:'06', title:'Forecast Output',   desc:'GDP, Inflation, Unemployment, Consumer Spending predictions' },
  { icon:'📋', step:'07', title:'Decision Support',  desc:'Policy insights, risk analysis, economic planning recommendations' },
];

const FEATURES = [
  { icon:'📈', label:'GDP Growth Rate',    desc:'NY.GDP.MKTP.KD.ZG · % Annual Growth' },
  { icon:'💹', label:'Inflation Rate',     desc:'FP.CPI.TOTL.ZG · % Consumer Prices' },
  { icon:'👥', label:'Unemployment Rate',  desc:'SL.UEM.TOTL.ZS · % of Labor Force' },
  { icon:'🛒', label:'Consumer Spending',  desc:'NE.CON.PRVT.KD.ZG · % Growth' },
  { icon:'⚖️', label:'Trade Balance',      desc:'NE.RSB.GNFS.ZS · % of GDP' },
  { icon:'💰', label:'Investment Level',   desc:'NE.GDI.TOTL.ZS · % of GDP' },
];

const TOOLS = [
  { icon:'🤖', name:'Artificial Intelligence', desc:'Enables pattern recognition and economic prediction with minimal human intervention.' },
  { icon:'📉', name:'Machine Learning',          desc:'Algorithms learn from historical economic data and improve accuracy over time.' },
  { icon:'🗄️', name:'Big Data Analytics',       desc:'Processes large volumes of structured and unstructured economic information.' },
  { icon:'🔮', name:'Predictive Analytics',      desc:'Uses statistical techniques and AI models to estimate future economic outcomes.' },
];

export default function Literature() {
  return (
    <div className="page-content page-enter">
      <div className="page-header">
        <h1 className="page-title">Literature Review & Methodology</h1>
        <p className="page-subtitle">Research studies, methodology, dataset description, and system architecture</p>
      </div>

      {/* Research Gap */}
      <section className="section">
        <div className="research-gap-banner glass-card glass-inner">
          <div className="gap-icon">🔍</div>
          <div>
            <h3 className="gap-title">Research Gap Identified</h3>
            <p className="gap-text">
              Although many studies demonstrate the benefits of AI in economic forecasting, several challenges still exist.
              Most forecasting models rely heavily on historical data and may struggle to predict unprecedented events such as
              global financial crises, pandemics, or geopolitical conflicts. Many advanced AI models also lack transparency,
              making it difficult for economists to understand how predictions are generated. This system addresses these
              issues by providing explainable forecasts with confidence intervals and human-readable insights.
            </p>
          </div>
        </div>
      </section>

      {/* Authors Table */}
      <section className="section">
        <div className="section-title">📚 Previous Research Studies</div>
        <div className="glass-card glass-inner">
          <table className="authors-table">
            <thead>
              <tr><th>Author(s)</th><th>Year</th><th>Research Area</th><th>Key Findings</th></tr>
            </thead>
            <tbody>
              {AUTHORS.map((a, i) => (
                <tr key={i} className="animate-fade-in-up" style={{ animationDelay: `${i*0.1}s` }}>
                  <td className="author-name">{a.name}</td>
                  <td><span className="author-year">{a.year}</span></td>
                  <td className="author-area">{a.area}</td>
                  <td className="author-findings">{a.findings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Methodology flowchart */}
      <section className="section">
        <div className="section-title">⚙️ Research Methodology Flowchart</div>
        <div className="methodology-flow glass-card glass-inner">
          {METHODOLOGY_STEPS.map((s, i) => (
            <div key={i} className="method-step animate-fade-in-up" style={{ animationDelay: `${i*0.08}s` }}>
              <div className="method-step-num">{s.step}</div>
              <div className="method-icon">{s.icon}</div>
              <div className="method-title">{s.title}</div>
              <div className="method-desc">{s.desc}</div>
              {i < METHODOLOGY_STEPS.length - 1 && <div className="method-arrow">↓</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Dataset description */}
      <section className="section">
        <div className="section-title">🗄️ Dataset Description</div>
        <div className="features-grid">
          {FEATURES.map(f => (
            <div key={f.label} className="feature-card glass-card glass-inner">
              <span className="feature-icon">{f.icon}</span>
              <div className="feature-label">{f.label}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="section">
        <div className="section-title">🔧 Tools & Technologies</div>
        <div className="tools-grid">
          {TOOLS.map((t, i) => (
            <div key={i} className="tool-card glass-card glass-inner">
              <div className="tool-icon">{t.icon}</div>
              <div className="tool-name">{t.name}</div>
              <div className="tool-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
