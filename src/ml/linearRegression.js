import { linearRegression, linearRegressionLine } from 'simple-statistics';

/**
 * Linear Regression forecasting model
 * Uses simple-statistics library for pure JS LR
 */
export const runLinearRegression = (historicalData, forecastYears = 3) => {
  if (!historicalData || historicalData.length < 3) return { forecast: [], r2: 0 };

  const points = historicalData.map(d => [d.year, d.value]);
  const reg = linearRegression(points);
  const regLine = linearRegressionLine(reg);

  const lastYear = historicalData[historicalData.length - 1].year;
  const forecast = [];
  for (let i = 1; i <= forecastYears; i++) {
    const year = lastYear + i;
    const value = parseFloat(regLine(year).toFixed(2));
    const confidence = Math.max(0.7, 0.95 - i * 0.05);
    forecast.push({
      year,
      value,
      lower: parseFloat((value - (1 - confidence) * Math.abs(value) * 3).toFixed(2)),
      upper: parseFloat((value + (1 - confidence) * Math.abs(value) * 3).toFixed(2)),
      algorithm: 'Linear Regression',
    });
  }

  // Calculate R², MAE, MSE, RMSE
  const mean = historicalData.reduce((s, d) => s + d.value, 0) / historicalData.length;
  const ssTot = historicalData.reduce((s, d) => s + Math.pow(d.value - mean, 2), 0);
  const ssRes = historicalData.reduce((s, d) => s + Math.pow(d.value - regLine(d.year), 2), 0);
  const r2 = ssTot === 0 ? 1 : Math.max(0, Math.min(1, 1 - ssRes / ssTot));
  const mse = ssRes / historicalData.length;
  const rmse = Math.sqrt(mse);
  const mae = historicalData.reduce((s, d) => s + Math.abs(d.value - regLine(d.year)), 0) / historicalData.length;

  return {
    forecast,
    r2: parseFloat(r2.toFixed(4)),
    metrics: {
      r2: r2.toFixed(3),
      mae: mae.toFixed(3),
      mse: mse.toFixed(3),
      rmse: rmse.toFixed(3),
    },
    slope: reg.m.toFixed(4),
    intercept: reg.b.toFixed(4),
  };
};
