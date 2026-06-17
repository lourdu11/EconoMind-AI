import { useEconomic } from '../context/EconomicContext';
import KPICard from '../components/cards/KPICard';
import HealthScoreCard from '../components/cards/HealthScoreCard';
import ForecastLineChart from '../components/charts/ForecastLineChart';
import AIInsightBox from '../components/insights/AIInsightBox';
import { runLinearRegression } from '../ml/linearRegression';
import { INDICATORS_META } from '../api/mockData';
import './Dashboard.css';

const RiskAlertBanner = ({ riskLevel }) => (
  <div className="risk-banner" style={{ '--risk': riskLevel.color }}>
    <span className="risk-banner-icon">⚡</span>
    <div>
      <strong>Economic Risk Status: {riskLevel.level} Risk</strong>
      <span className="risk-banner-sub"> — AI models continuously monitor economic indicators for risk signals.</span>
    </div>
    <span className="risk-banner-badge">{riskLevel.label}</span>
  </div>
);

export default function Dashboard() {
  const { data, loading, country, countries, healthScore, riskLevel, lastUpdated } = useEconomic();

  const getLatest = (arr) => arr?.slice(-1)[0]?.value ?? 0;
  const getChange = (arr) => {
    if (!arr || arr.length < 2) return 0;
    return parseFloat((arr[arr.length-1].value - arr[arr.length-2].value).toFixed(2));
  };

  const countryName = countries.find(c => c.code === country)?.name ?? country;
  const gdpForecast = data ? runLinearRegression(data.gdp, 3).forecast : [];

  const kpis = data ? [
    { key:'gdp',              value: getLatest(data.gdp),             change: getChange(data.gdp) },
    { key:'inflation',        value: getLatest(data.inflation),        change: getChange(data.inflation) },
    { key:'unemployment',     value: getLatest(data.unemployment),     change: getChange(data.unemployment) },
    { key:'consumerSpending', value: getLatest(data.consumerSpending), change: getChange(data.consumerSpending) },
    { key:'tradeBalance',     value: getLatest(data.tradeBalance),     change: getChange(data.tradeBalance) },
    { key:'investment',       value: getLatest(data.investment),       change: getChange(data.investment) },
  ] : [];

  return (
    <div className="page-content page-enter">
      {/* Page header */}
      <div className="page-header">
        <h1 className="page-title">
          Economic Overview
          <span className="dashboard-country-tag">📍 {countryName}</span>
        </h1>
        <p className="page-subtitle">
          Real-time economic indicators powered by World Bank Open API
          {lastUpdated && ` · Last updated: ${lastUpdated.toLocaleTimeString()}`}
        </p>
      </div>

      {/* Risk alert */}
      <RiskAlertBanner riskLevel={riskLevel} />

      {/* KPI Grid */}
      <section className="section">
        <div className="section-title">📊 Key Economic Indicators</div>
        <div className="kpi-grid">
          {loading
            ? [...Array(6)].map((_, i) => <KPICard key={i} loading />)
            : kpis.map(k => {
                const meta = INDICATORS_META[k.key];
                return (
                  <KPICard
                    key={k.key}
                    title={meta.label}
                    value={k.value}
                    unit={meta.unit}
                    icon={<span>{meta.icon}</span>}
                    change={k.change}
                    color={meta.color}
                  />
                );
              })
          }
        </div>
      </section>

      {/* Charts + Health */}
      <section className="section">
        <div className="dashboard-charts-row">
          <div className="dashboard-main-chart glass-card glass-inner">
            <div className="chart-header">
              <div>
                <h3 className="chart-title">GDP Growth Forecast</h3>
                <p className="chart-sub">Historical + AI-predicted trend (Linear Regression)</p>
              </div>
              <span className="chart-algo-badge">Linear Regression</span>
            </div>
            <ForecastLineChart
              historicalData={data?.gdp ?? []}
              forecastData={gdpForecast}
              indicatorLabel="GDP Growth %"
              color="#6366F1"
              loading={loading}
            />
          </div>
          <HealthScoreCard score={healthScore} loading={loading} />
        </div>
      </section>

      {/* AI Insight */}
      <section className="section">
        <div className="section-title">🤖 AI Insights</div>
        <AIInsightBox data={data} country={countryName} loading={loading} />
      </section>

      {/* Data pipeline info */}
      <section className="section">
        <div className="section-title">⚙️ System Architecture</div>
        <div className="pipeline-row">
          {[
            { icon:'🌐', label:'Data Sources',   sub:'World Bank, IMF, Govt Reports' },
            { icon:'🧹', label:'Processing',      sub:'Cleaning, Normalization, Feature Selection' },
            { icon:'🤖', label:'AI Models',       sub:'LR · DT · RF · Neural Network' },
            { icon:'📈', label:'Forecast Output', sub:'GDP, Inflation, Unemployment + More' },
            { icon:'📋', label:'Decision Support',sub:'Policy, Risk, Investment Insights' },
          ].map((s, i) => (
            <div key={i} className="pipeline-step animate-fade-in-up" style={{ animationDelay: `${i*0.1}s` }}>
              <div className="pipeline-icon">{s.icon}</div>
              <div className="pipeline-label">{s.label}</div>
              <div className="pipeline-sub">{s.sub}</div>
              {i < 4 && <div className="pipeline-arrow">→</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
