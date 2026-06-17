import './About.css';

const OBJECTIVES = [
  { icon:'💡', text:'Understand the concept of Artificial Intelligence and its role in economic forecasting.' },
  { icon:'🔬', text:'Examine various AI techniques and machine learning algorithms for predicting economic trends.' },
  { icon:'⚡', text:'Analyze the advantages and challenges of applying AI in economic forecasting.' },
  { icon:'🚀', text:'Explore future potential of AI-driven systems for business and government decision-making.' },
];

const KEYWORDS = ['Artificial Intelligence','Economic Forecasting','Machine Learning','Data Analytics','Decision Support System','GDP Prediction','Inflation Forecast','Unemployment Analysis','Neural Networks','Random Forest'];

const REFERENCES = [
  { num:'1', text:'Susan Athey. "The Impact of Machine Learning on Economics." 2018.' },
  { num:'2', text:'Susan Athey and Guido Imbens. "Machine Learning Methods That Economists Should Know About." Annual Review of Economics. 2019.' },
  { num:'3', text:'Andrii Babii, Eric Ghysels, Jonas Striaukas. "Econometrics of Machine Learning Methods in Economic Forecasting." 2023.' },
  { num:'4', text:'Pete Richardson. "Nowcasting and the Use of Big Data in Short-Term Macroeconomic Forecasting: A Critical Review." Economics and Statistics. 2019.' },
  { num:'5', text:'Ajit Desai. "Machine Learning for Economics Research: When, What and How?" 2023.' },
  { num:'6', text:'"Economic Forecasting with Big Data: A Literature Review." Journal of Management Science and Engineering. 2024.' },
  { num:'7', text:'World Bank Data Catalog — data.worldbank.org' },
  { num:'8', text:'International Monetary Fund (IMF) Data Portal — imf.org/en/Data' },
];

const FUTURE_SCOPE = [
  { icon:'🗄️', title:'Larger Datasets',       desc:'IoT, social media, e-commerce data will enable more accurate predictions.' },
  { icon:'🧠', title:'Better AI Models',       desc:'Deep Learning and explainable AI will enhance transparency and accuracy.' },
  { icon:'📱', title:'Mobile & Web Deployment',desc:'Real-time forecasts accessible globally via smartphones and tablets.' },
  { icon:'⚡', title:'Real-Time Forecasting',  desc:'Continuous monitoring with instant updates during economic disruptions.' },
  { icon:'🔔', title:'Early Warning Systems',  desc:'AI detects economic risks before they escalate into crises.' },
  { icon:'🗺️', title:'Global Monitoring',      desc:'Integrated multi-country dashboards for global economic oversight.' },
];

export default function About() {
  return (
    <div className="page-content page-enter">
      <div className="page-header">
        <h1 className="page-title">About EconoMind AI</h1>
        <p className="page-subtitle">Research paper summary, author information, references, and future scope</p>
      </div>

      {/* Project banner */}
      <div className="about-banner glass-card glass-inner animate-fade-in-up">
        <div className="about-banner-left">
          <div className="about-logo">🧠</div>
          <div>
            <h2 className="about-project-title">EconoMind AI Dashboard</h2>
            <p className="about-project-sub">Intelligent Economic Forecasting & Decision Support System</p>
            <div className="about-tags">
              <span className="about-tag primary">Research Project</span>
              <span className="about-tag accent">AI Powered</span>
              <span className="about-tag">World Bank API</span>
              <span className="about-tag">4 ML Models</span>
            </div>
          </div>
        </div>
        <div className="about-banner-right">
          <div className="about-author-card">
            <div className="about-author-avatar">BR</div>
            <div>
              <div className="about-author-name">B. Roshan</div>
              <div className="about-author-role">Research Author</div>
              <div className="about-author-topic">AI in Economic Forecasting</div>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract */}
      <section className="section">
        <div className="section-title">📄 Abstract</div>
        <div className="abstract-card glass-card glass-inner">
          <p className="abstract-text">
            Artificial Intelligence (AI) has emerged as a powerful technology capable of transforming various sectors,
            including economics and finance. This research examines the role of AI in economic forecasting and explores
            how AI technologies can improve the prediction of key economic indicators such as Gross Domestic Product (GDP),
            inflation rates, unemployment levels, and market trends. The study analyzes various AI techniques, including
            machine learning algorithms and data-driven forecasting methods, based on existing research papers, reports,
            and case studies.
          </p>
          <p className="abstract-text">
            The findings indicate that AI has the potential to enhance forecasting accuracy, process large volumes of
            data efficiently, identify hidden patterns, and support better decision-making. The research concludes that
            Artificial Intelligence is significantly transforming economic forecasting by providing more efficient and
            reliable prediction systems.
          </p>
        </div>
      </section>

      {/* Objectives */}
      <section className="section">
        <div className="section-title">🎯 Research Objectives</div>
        <div className="objectives-list">
          {OBJECTIVES.map((o, i) => (
            <div key={i} className="objective-item glass-card glass-inner animate-fade-in-left" style={{ animationDelay:`${i*0.1}s` }}>
              <div className="objective-num">{String(i+1).padStart(2,'0')}</div>
              <span className="objective-icon">{o.icon}</span>
              <p className="objective-text">{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Keywords */}
      <section className="section">
        <div className="section-title">🏷️ Keywords</div>
        <div className="keywords-wrap">
          {KEYWORDS.map(k => <span key={k} className="keyword-chip">{k}</span>)}
        </div>
      </section>

      {/* Future Scope */}
      <section className="section">
        <div className="section-title">🚀 Future Scope</div>
        <div className="future-grid">
          {FUTURE_SCOPE.map((f, i) => (
            <div key={i} className="future-card glass-card glass-inner">
              <span className="future-icon">{f.icon}</span>
              <div className="future-title">{f.title}</div>
              <div className="future-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* References */}
      <section className="section">
        <div className="section-title">📚 References</div>
        <div className="glass-card glass-inner refs-card">
          {REFERENCES.map(r => (
            <div key={r.num} className="ref-item">
              <span className="ref-num">[{r.num}]</span>
              <span className="ref-text">{r.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Acknowledgement */}
      <section className="section">
        <div className="section-title">🙏 Acknowledgement</div>
        <div className="ack-card glass-card glass-inner">
          <p className="ack-text">
            I express my sincere gratitude to my Artificial Intelligence teacher for providing the opportunity to
            undertake this research project on "Artificial Intelligence in Economic Forecasting." Her guidance,
            encouragement, and valuable suggestions greatly contributed to the successful completion of this study.
          </p>
          <p className="ack-text">
            I would also like to thank the school management for providing the necessary resources and support.
            My heartfelt appreciation goes to my parents, friends, and well-wishers for their constant encouragement
            and motivation throughout the research process.
          </p>
          <div className="ack-signature">— <strong>B. Roshan</strong></div>
        </div>
      </section>
    </div>
  );
}
