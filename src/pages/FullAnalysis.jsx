import './FullAnalysis.css';

export default function FullAnalysis() {
  return (
    <div className="page-content page-enter">
      <div className="page-header">
        <h1 className="page-title">Comprehensive Economic Analysis</h1>
        <p className="page-subtitle">Real-world data indicators, AI-driven insights, and historical impact comparisons.</p>
      </div>

      <div className="analysis-content">

        {/* 1. AI Economic Impact Analysis */}
        <section className="analysis-section glass-card glass-inner animate-fade-in-up">
          <h2>1. AI Economic Impact Analysis</h2>
          <h3>About This Section</h3>
          <p>
            This section analyzes real economic data and AI-generated forecasts to explain the possible impact of economic changes on businesses, governments, banks, investors, and citizens. The analysis is based on economic indicators such as GDP Growth Rate, Inflation Rate, Investment Level, Trade Balance, and Unemployment Rate obtained from trusted sources including the IMF, World Bank, and OECD.
          </p>
          <h3>How It Works</h3>
          <p>
            The AI system studies historical economic trends and compares them with future forecasts. Based on these patterns, it generates impact assessments that explain how predicted economic conditions may influence different sectors of the economy.
          </p>
          <div className="analysis-highlight">
            <strong>Transparency Notice:</strong> All forecasts are generated using historical economic datasets and trend analysis. Impact assessments are based on economic relationships observed in historical data and established economic research.
          </div>
        </section>

        {/* 2. Stakeholder Benefit Analysis */}
        <section className="analysis-section glass-card glass-inner animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2>2. Stakeholder Benefit Analysis</h2>
          <p>This feature explains how different stakeholders may benefit or face challenges under forecasted economic conditions.</p>
          
          <div className="methodology-grid">
            <div className="methodology-card">
              <h4>Business Organizations</h4>
              <p><em>When GDP growth increases and inflation remains stable:</em></p>
              <strong>Potential Benefits:</strong>
              <ul className="analysis-list">
                <li>Higher consumer demand</li>
                <li>Increased business expansion opportunities</li>
                <li>Greater investor confidence</li>
                <li>Improved profitability</li>
              </ul>
              <strong>Potential Challenges:</strong>
              <ul className="analysis-list">
                <li>Increased market competition</li>
                <li>Rising operational expenses</li>
              </ul>
            </div>
            
            <div className="methodology-card">
              <h4>Government</h4>
              <p><em>When economic growth strengthens:</em></p>
              <strong>Potential Benefits:</strong>
              <ul className="analysis-list">
                <li>Increased tax revenues</li>
                <li>Better public investment capacity</li>
                <li>Improved economic stability</li>
              </ul>
              <strong>Potential Challenges:</strong>
              <ul className="analysis-list">
                <li>Maintaining long-term growth</li>
                <li>Managing inflationary pressures</li>
              </ul>
            </div>

            <div className="methodology-card">
              <h4>Banks and Financial Institutions</h4>
              <p><em>When economic activity increases:</em></p>
              <strong>Potential Benefits:</strong>
              <ul className="analysis-list">
                <li>Higher loan demand</li>
                <li>Increased financial activity</li>
                <li>Improved investment opportunities</li>
              </ul>
              <strong>Potential Challenges:</strong>
              <ul className="analysis-list">
                <li>Credit risk management</li>
                <li>Economic uncertainty during downturns</li>
              </ul>
            </div>

            <div className="methodology-card">
              <h4>Citizens</h4>
              <p><em>When employment and economic growth improve:</em></p>
              <strong>Potential Benefits:</strong>
              <ul className="analysis-list">
                <li>More job opportunities</li>
                <li>Better income growth</li>
                <li>Improved living standards</li>
              </ul>
              <strong>Potential Challenges:</strong>
              <ul className="analysis-list">
                <li>Cost-of-living pressures during inflation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Historical Impact Comparison */}
        <section className="analysis-section glass-card glass-inner animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2>3. Historical Impact Comparison</h2>
          <h3>About This Section</h3>
          <p>
            This section compares economic indicators between selected years using real historical datasets from trusted international sources.
          </p>
          <h3>Data Source and Authenticity</h3>
          <p>
            All historical comparisons are based on data collected from the IMF, World Bank, OECD, and official government reports. The AI system analyzes changes in GDP growth, inflation, unemployment, investment, and trade performance to identify significant economic trends.
          </p>
          
          <h3>Comparison Example: 2022 vs 2023</h3>
          <div className="flowchart-box">
            <span>GDP Growth: 7.0% &rarr; 8.2%</span>
            <span>Inflation: 6.7% &rarr; 5.4%</span>
          </div>

          <h3>AI Interpretation</h3>
          <div className="methodology-grid">
            <div className="methodology-card">
              <h4>Business Sector</h4>
              <ul className="analysis-list">
                <li>Improved market confidence</li>
                <li>Increased expansion opportunities</li>
              </ul>
            </div>
            <div className="methodology-card">
              <h4>Government</h4>
              <ul className="analysis-list">
                <li>Stronger revenue collection</li>
                <li>Improved policy flexibility</li>
              </ul>
            </div>
            <div className="methodology-card">
              <h4>Banks & Citizens</h4>
              <ul className="analysis-list">
                <li>Increased lending activity (Banks)</li>
                <li>Better employment prospects (Citizens)</li>
                <li>Improved purchasing power (Citizens)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Economic Health Score */}
        <section className="analysis-section glass-card glass-inner animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2>4. Economic Health Score</h2>
          <p>The Economic Health Score provides a simplified assessment of the overall economic condition based on real economic indicators and AI analysis.</p>
          
          <h3>Score Components</h3>
          <ul className="analysis-list">
            <li>GDP Growth</li>
            <li>Inflation</li>
            <li>Unemployment</li>
            <li>Investment Activity</li>
            <li>Trade Performance</li>
          </ul>

          <h3>Example Output</h3>
          <div className="table-responsive">
            <table className="analysis-table" style={{ maxWidth: '400px' }}>
              <tbody>
                <tr>
                  <th>Economic Health Score</th>
                  <td style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'var(--color-primary)' }}>85/100</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>Strong Economy</td>
                </tr>
                <tr>
                  <th>Risk Level</th>
                  <td>Low</td>
                </tr>
                <tr>
                  <th>Growth Outlook</th>
                  <td>Positive</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p><em>Purpose:</em> This score helps users quickly understand economic performance without analyzing multiple indicators separately.</p>
        </section>

        {/* 5. AI Recommendation Engine */}
        <section className="analysis-section glass-card glass-inner animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2>5. AI Recommendation Engine</h2>
          <p>The AI Recommendation Engine converts forecasts into actionable recommendations for stakeholders.</p>
          
          <h3>Example Recommendations (When GDP growth is forecast to increase)</h3>
          <div className="methodology-grid">
            <div className="methodology-card">
              <h4>Businesses</h4>
              <ul className="analysis-list">
                <li>Consider expansion opportunities.</li>
                <li>Increase production planning.</li>
              </ul>
            </div>
            <div className="methodology-card">
              <h4>Government</h4>
              <ul className="analysis-list">
                <li>Strengthen infrastructure investments.</li>
                <li>Support long-term economic growth.</li>
              </ul>
            </div>
            <div className="methodology-card">
              <h4>Banks & Investors</h4>
              <ul className="analysis-list">
                <li>Expand lending opportunities while managing risk (Banks).</li>
                <li>Evaluate growth-oriented investment sectors (Investors).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Data Source and Reliability Section */}
        <section className="analysis-section glass-card glass-inner animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h2>6. Data Source and Reliability Section</h2>
          <p>This section ensures transparency by displaying the sources used for forecasting and analysis.</p>
          
          <h3>Primary Data Sources</h3>
          <ul className="analysis-list">
            <li>IMF World Economic Outlook Database</li>
            <li>World Bank Open Data</li>
            <li>OECD Statistics</li>
            <li>Official Government Economic Reports</li>
          </ul>
          
          <div className="analysis-highlight">
            <strong>Reliability Statement:</strong> The dashboard uses publicly available and internationally recognized economic datasets. AI forecasts are generated using historical patterns and trend analysis from these verified sources.
          </div>
        </section>

        {/* 7. Future Economic Outlook */}
        <section className="analysis-section glass-card glass-inner animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2>7. Future Economic Outlook</h2>
          <p>This section presents AI-generated forecasts for future economic indicators.</p>
          
          <div className="flowchart-box">
            <span>Forecast Period: 2026 &rarr; 2027 &rarr; 2028 &rarr; 2029 &rarr; 2030</span>
          </div>

          <h3>Forecast Indicators</h3>
          <ul className="analysis-list">
            <li>GDP Growth Rate</li>
            <li>Inflation Rate</li>
            <li>Investment Level</li>
            <li>Trade Balance</li>
            <li>Economic Stability</li>
          </ul>

          <h3>Future Impact Analysis</h3>
          <p>For each forecast year, the AI system explains:</p>
          <ul className="analysis-list">
            <li>Potential business opportunities</li>
            <li>Government planning implications</li>
            <li>Banking sector outlook</li>
            <li>Investor opportunities</li>
            <li>Citizen welfare implications</li>
          </ul>

          <p className="analysis-highlight" style={{ background: 'var(--bg-surface-2)', borderLeftColor: 'var(--color-accent)' }}>
            <strong>Transparency Statement:</strong> Future forecasts are generated using historical economic data and AI-based trend analysis. Actual economic outcomes may differ due to unforeseen events, policy changes, geopolitical developments, or global economic conditions.
          </p>
        </section>

        {/* 8. Major Economic Events and Their Impact */}
        <section className="analysis-section glass-card glass-inner animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <h2>8. Major Economic Events and Their Impact</h2>
          <p>Economic conditions can change because of major world events, which is exactly why AI-based economic forecasting systems like the EconoMind AI Dashboard are valuable. Below are key historical events that reshaped global economies.</p>
          
          <h3>Historical Events Impact Timeline</h3>
          <div className="table-responsive">
            <table className="analysis-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Event</th>
                  <th>Impact on Economy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2008–2009</td>
                  <td>Global Financial Crisis</td>
                  <td>GDP decline, unemployment rise, bank losses.</td>
                </tr>
                <tr>
                  <td>2010–2012</td>
                  <td>European Debt Crisis</td>
                  <td>Slower growth, reduced investment, government spending constraints.</td>
                </tr>
                <tr>
                  <td>2020</td>
                  <td>COVID-19 Pandemic</td>
                  <td>Economic slowdown, trade disruption, high unemployment.</td>
                </tr>
                <tr>
                  <td>2021–2023</td>
                  <td>Global Inflation Surge</td>
                  <td>Higher prices, reduced purchasing power, high operating costs.</td>
                </tr>
                <tr>
                  <td>2023–Present</td>
                  <td>AI Adoption in Economics</td>
                  <td>Better forecasting, improved decision-making, enhanced risk management.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="methodology-grid">
            <div className="methodology-card">
              <h4>Global Financial Crisis (2008–2009)</h4>
              <p>Began in the US banking and housing sectors. Spread globally causing GDP decline and high unemployment.</p>
              <p><strong>Importance of AI:</strong> Highlighted the need for risk assessment and warning systems.</p>
            </div>
            <div className="methodology-card">
              <h4>European Debt Crisis (2010–2012)</h4>
              <p>High government debt led to financial instability across global markets.</p>
              <p><strong>Importance of AI:</strong> AI can monitor indicators and identify financial risks early.</p>
            </div>
            <div className="methodology-card">
              <h4>COVID-19 Pandemic (2020)</h4>
              <p>Widespread lockdowns disrupted global trade and supply chains.</p>
              <p><strong>Importance of AI:</strong> Demonstrated the need for real-time data analysis during uncertainty.</p>
            </div>
            <div className="methodology-card">
              <h4>Global Inflation Surge (2021–2023)</h4>
              <p>Supply chain issues and energy prices caused high inflation.</p>
              <p><strong>Importance of AI:</strong> AI predicts inflation trends to support policy decisions.</p>
            </div>
          </div>
          
          <p style={{ marginTop: 'var(--space-4)' }}>
            <strong>Sources:</strong> International Monetary Fund Reports, World Bank Economic Updates, OECD Economic Outlook Reports, World Economic Forum Economic Analysis Reports.
          </p>
        </section>

      </div>
    </div>
  );
}
