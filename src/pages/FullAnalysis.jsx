import './FullAnalysis.css';

export default function FullAnalysis() {
  return (
    <div className="page-content page-enter">
      <div className="page-header">
        <h1 className="page-title">Comprehensive Project Analysis</h1>
        <p className="page-subtitle">Full documentation, methodology, implementation details, and research conclusions</p>
      </div>

      <div className="analysis-content">
        {/* Introduction */}
        <section className="analysis-section glass-card glass-inner animate-fade-in-up">
          <h2>1. Introduction</h2>
          <p>
            Artificial Intelligence (AI) is one of the most transformative technologies of the 21st century. Economic forecasting is the process of predicting future economic conditions based on historical and current data. Traditionally, economic forecasting has been performed using statistical models and expert judgment. However, these methods often struggle to handle large volumes of complex and rapidly changing data.
          </p>
          <p>
            The emergence of AI has significantly improved the accuracy and efficiency of economic forecasting. AI systems can analyze massive datasets, identify hidden patterns, and generate predictions in real time. Machine learning algorithms can continuously learn from new information, enabling more adaptive and reliable forecasts.
          </p>
          <div className="analysis-highlight">
            <strong>Objectives of the Study:</strong> To understand the concept of AI in forecasting, examine various ML algorithms, analyze advantages/challenges, and explore the future potential of AI-driven decision-making.
          </div>
        </section>

        {/* Methodology */}
        <section className="analysis-section glass-card glass-inner animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2>2. Methodology & Algorithms</h2>
          <p>
            Data collection is a crucial step in economic forecasting because prediction accuracy largely depends on data quality. Secondary data sources were utilized, including Government economic reports, World Bank databases, and IMF publications.
          </p>
          <h3>Algorithms Evaluated</h3>
          <div className="methodology-grid">
            <div className="methodology-card">
              <h4>Linear Regression</h4>
              <p>Widely used forecasting technique that helps identify mathematical relationships between economic variables based on historical trends.</p>
            </div>
            <div className="methodology-card">
              <h4>Decision Tree</h4>
              <p>Handles complex decision-making processes by dividing data into different branches based on conditions and logical paths.</p>
            </div>
            <div className="methodology-card">
              <h4>Random Forest</h4>
              <p>Improves accuracy by combining multiple decision trees using different data subsets, reducing overall forecasting errors.</p>
            </div>
            <div className="methodology-card">
              <h4>Neural Networks</h4>
              <p>Capable of identifying complex patterns in large datasets by processing information through interconnected layers of artificial neurons.</p>
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="analysis-section glass-card glass-inner animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2>3. Implementation Process</h2>
          <ul className="analysis-list">
            <li><strong>Data Collection:</strong> Extracting GDP, inflation, unemployment, consumer spending, and trade balance from trusted international databases.</li>
            <li><strong>Data Preprocessing:</strong> Data cleaning, handling missing values, data normalization, and feature selection to ensure readiness for AI algorithms.</li>
            <li><strong>Model Training:</strong> Machine learning algorithms analyze past economic trends to identify variable relationships and develop forecasting patterns.</li>
            <li><strong>Testing:</strong> The AI system predicts outcomes using unseen data. Performance metrics are calculated to determine reliability and efficiency.</li>
            <li><strong>Prediction Generation:</strong> Forecasting future economic trends to assist governments, businesses, and policymakers in making informed decisions.</li>
          </ul>
        </section>

        {/* Results & Analysis */}
        <section className="analysis-section glass-card glass-inner animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2>4. Results and Analysis</h2>
          <p>
            The effectiveness of the Artificial Intelligence in economic forecasting was evaluated using standard Machine Learning performance metrics. The findings suggest that AI significantly improves accuracy and efficiency over traditional methods.
          </p>
          <div className="analysis-highlight">
            <strong>Key Metrics Achieved:</strong>
            <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '10px' }}>
              <li><strong>Accuracy (92%):</strong> Indicates a strong ability to forecast economic trends based on historical data.</li>
              <li><strong>Precision (90%):</strong> Most generated forecasts are highly relevant and dependable.</li>
              <li><strong>Recall (89%):</strong> Successfully captures a large percentage of important economic trends.</li>
              <li><strong>F1 Score (89.5%):</strong> Demonstrates a strong balance between pattern identification and accurate predictions.</li>
            </ul>
          </div>
        </section>

        {/* Limitations & Ethics */}
        <section className="analysis-section glass-card glass-inner animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2>5. Limitations & Ethical Considerations</h2>
          <p>
            While AI provides powerful forecasting capabilities, it is not free from challenges. Ethical considerations ensure responsible usage, while acknowledging technical boundaries.
          </p>
          <h3>System Limitations</h3>
          <ul className="analysis-list">
            <li><strong>Dataset Limitations:</strong> Incomplete, outdated, or inconsistent data can reduce forecasting reliability.</li>
            <li><strong>Technical Constraints:</strong> Requires high processing power, specialized infrastructure, and regular monitoring.</li>
            <li><strong>Unpredictable Events:</strong> AI struggles to predict "Black Swan" events like financial crises, pandemics, and natural disasters.</li>
          </ul>
          <h3>Ethical Guidelines</h3>
          <ul className="analysis-list">
            <li><strong>Privacy & Security:</strong> Ensuring data protection regulations are followed with strong cybersecurity measures.</li>
            <li><strong>Fairness & Bias:</strong> Continuous monitoring to prevent algorithmic bias favoring specific regions or demographics.</li>
            <li><strong>Human Oversight:</strong> Final policy decisions must involve experts who interpret AI results within broader contexts.</li>
          </ul>
        </section>

        {/* Future Scope & Conclusion */}
        <section className="analysis-section glass-card glass-inner animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h2>6. Future Scope & Conclusion</h2>
          <p>
            Future forecasting systems will utilize larger datasets (IoT, e-commerce) and more sophisticated Deep Learning techniques. Cloud-based, real-time deployments will enable instant predictions during periods of economic uncertainty. Additional features like automated policy recommendations and global economic monitoring dashboards will become standard.
          </p>
          <div className="analysis-highlight">
            <strong>Conclusion:</strong>
            <br />
            Artificial Intelligence has transformed the field of economic forecasting by providing innovative solutions for analyzing complex economic environments. Its ability to generate data-driven insights has the potential to improve economic planning, reduce uncertainty, and support sustainable growth. AI should not be viewed as a replacement for human expertise but as a powerful collaborative tool for shaping the future global economy.
          </div>
        </section>
      </div>
    </div>
  );
}
