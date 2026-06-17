import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './ForecastLineChart.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip-label">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }} className="chart-tooltip-item">
          {p.name}: <strong>{typeof p.value === 'number' ? p.value.toFixed(2) : p.value}{p.unit || '%'}</strong>
        </p>
      ))}
    </div>
  );
};

export default function ForecastLineChart({ historicalData = [], forecastData = [], indicatorLabel = 'Value', color = '#6366F1', loading }) {
  if (loading) return <div className="forecast-chart-wrap skeleton-chart" />;

  // Merge historical and forecast
  const histMapped = historicalData.map(d => ({ year: d.year, actual: d.value, forecast: null, lower: null, upper: null }));
  const fcstMapped = forecastData.map(d => ({
    year: d.year, actual: null,
    forecast: d.value, lower: d.lower, upper: d.upper,
  }));

  // Bridge point
  if (histMapped.length && fcstMapped.length) {
    const last = histMapped[histMapped.length - 1];
    fcstMapped[0] = { ...fcstMapped[0], actual: last.actual };
  }

  const combined = [...histMapped, ...fcstMapped];

  return (
    <div className="forecast-chart-wrap">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={combined} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id={`grad-actual-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor={color} stopOpacity={0.25} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
            <linearGradient id={`grad-forecast-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#F59E0B" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-glass)" />
          <XAxis dataKey="year" stroke="var(--text-muted)" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
          <YAxis stroke="var(--text-muted)" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: '12px', color: '#9CA3AF' }} />
          <Area type="monotone" dataKey="actual" name={indicatorLabel} stroke={color} strokeWidth={2.5}
            fill={`url(#grad-actual-${color.replace('#','')})`} connectNulls dot={false} activeDot={{ r: 5 }} />
          <Area type="monotone" dataKey="forecast" name="AI Forecast" stroke="#F59E0B" strokeWidth={2}
            strokeDasharray="6 3" fill={`url(#grad-forecast-${color.replace('#','')})`} connectNulls dot={{ fill: '#F59E0B', r: 4 }} />
          <Area type="monotone" dataKey="upper" name="Upper Bound" stroke="rgba(245,158,11,0.3)" strokeWidth={1}
            fill="none" strokeDasharray="2 4" connectNulls dot={false} legendType="none" />
          <Area type="monotone" dataKey="lower" name="Lower Bound" stroke="rgba(245,158,11,0.3)" strokeWidth={1}
            fill="none" strokeDasharray="2 4" connectNulls dot={false} legendType="none" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
