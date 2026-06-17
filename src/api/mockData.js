// Realistic mock data for all countries — used as fallback when API is unavailable
const generateYears = (start, values) =>
  values.map((value, i) => ({ year: start + i, value }));

export const mockData = {
  IND: {
    gdp: generateYears(2015, [8.0, 8.3, 6.8, 6.5, 5.0, -6.6, 8.7, 7.2, 6.5, 6.8]),
    inflation: generateYears(2015, [4.9, 4.5, 3.3, 3.4, 3.7, 6.2, 5.5, 6.7, 5.4, 4.8]),
    unemployment: generateYears(2015, [3.5, 3.5, 3.5, 3.5, 5.3, 7.1, 5.9, 4.8, 3.8, 3.2]),
    consumerSpending: generateYears(2015, [7.8, 8.1, 6.2, 6.6, 5.5, -5.9, 7.5, 6.8, 5.9, 6.2]),
    tradeBalance: generateYears(2015, [-1.1, -0.9, -1.5, -2.1, -2.4, -0.9, -2.1, -3.2, -2.8, -2.5]),
    investment: generateYears(2015, [31.2, 30.8, 30.0, 31.3, 30.2, 27.0, 29.5, 31.2, 32.0, 33.1]),
  },
  USA: {
    gdp: generateYears(2015, [3.1, 1.7, 2.3, 2.9, 2.3, -2.8, 5.9, 2.1, 2.5, 2.8]),
    inflation: generateYears(2015, [0.1, 1.3, 2.1, 2.4, 1.8, 1.2, 4.7, 8.0, 4.1, 2.9]),
    unemployment: generateYears(2015, [5.3, 4.7, 4.4, 3.9, 3.5, 8.1, 5.4, 3.6, 3.4, 3.8]),
    consumerSpending: generateYears(2015, [3.6, 2.7, 2.6, 3.0, 2.4, -3.8, 7.9, 2.4, 2.7, 2.5]),
    tradeBalance: generateYears(2015, [-2.6, -2.6, -2.8, -2.9, -2.9, -3.3, -3.5, -3.7, -3.1, -3.0]),
    investment: generateYears(2015, [19.9, 20.4, 20.8, 21.4, 21.2, 21.0, 22.3, 21.6, 21.8, 22.1]),
  },
  CHN: {
    gdp: generateYears(2015, [7.0, 6.8, 6.9, 6.7, 6.0, 2.2, 8.1, 3.0, 5.2, 4.8]),
    inflation: generateYears(2015, [1.4, 2.0, 1.5, 2.1, 2.9, 2.4, 0.9, 2.0, 0.2, 0.8]),
    unemployment: generateYears(2015, [4.1, 4.0, 3.9, 4.0, 3.6, 4.2, 3.8, 4.0, 3.8, 4.0]),
    consumerSpending: generateYears(2015, [10.6, 8.6, 7.5, 7.5, 5.7, -4.3, 12.5, 0.2, 4.5, 5.0]),
    tradeBalance: generateYears(2015, [2.5, 2.2, 1.8, 0.8, 0.4, 1.9, 2.4, 2.7, 2.5, 2.3]),
    investment: generateYears(2015, [44.0, 43.8, 44.0, 44.2, 43.1, 43.5, 43.4, 43.0, 42.8, 43.0]),
  },
  GBR: {
    gdp: generateYears(2015, [2.4, 1.8, 1.9, 1.3, 1.7, -9.3, 7.5, 4.1, 0.3, 0.8]),
    inflation: generateYears(2015, [0.0, 0.7, 2.7, 2.5, 1.8, 0.9, 2.6, 9.1, 7.3, 3.5]),
    unemployment: generateYears(2015, [5.3, 4.9, 4.4, 4.1, 3.8, 4.5, 4.5, 3.7, 4.0, 4.4]),
    consumerSpending: generateYears(2015, [2.8, 3.3, 1.9, 1.6, 1.3, -10.5, 5.9, 4.8, -0.5, 0.5]),
    tradeBalance: generateYears(2015, [-5.4, -5.2, -4.3, -3.3, -3.2, -2.3, -2.6, -3.5, -3.0, -2.8]),
    investment: generateYears(2015, [16.5, 16.9, 17.0, 17.2, 17.0, 16.0, 17.3, 17.5, 17.0, 17.2]),
  },
  DEU: {
    gdp: generateYears(2015, [1.7, 2.2, 2.6, 1.5, 1.1, -3.8, 2.6, 1.8, -0.3, 0.2]),
    inflation: generateYears(2015, [0.1, 0.4, 1.5, 1.7, 1.4, 0.4, 3.2, 8.7, 5.9, 2.5]),
    unemployment: generateYears(2015, [4.6, 4.1, 3.8, 3.4, 3.1, 3.8, 3.6, 3.1, 3.0, 3.2]),
    consumerSpending: generateYears(2015, [1.9, 2.2, 1.7, 1.3, 1.7, -6.1, 0.4, 4.6, -1.5, 0.3]),
    tradeBalance: generateYears(2015, [6.8, 8.5, 7.9, 7.7, 6.9, 4.7, 4.5, 3.0, 3.2, 3.5]),
    investment: generateYears(2015, [19.7, 20.1, 20.8, 21.2, 21.7, 21.8, 21.4, 21.1, 20.8, 20.5]),
  },
  WLD: {
    gdp: generateYears(2015, [3.0, 2.6, 3.3, 3.1, 2.5, -3.3, 6.1, 3.5, 3.1, 3.2]),
    inflation: generateYears(2015, [1.4, 1.5, 2.2, 2.4, 2.2, 2.8, 4.7, 8.8, 5.9, 3.5]),
    unemployment: generateYears(2015, [5.6, 5.5, 5.4, 5.3, 5.3, 6.5, 6.2, 5.8, 5.5, 5.2]),
    consumerSpending: generateYears(2015, [2.9, 2.5, 2.7, 2.8, 2.4, -4.1, 6.2, 3.2, 2.5, 2.6]),
    tradeBalance: generateYears(2015, [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]),
    investment: generateYears(2015, [23.5, 23.8, 24.0, 24.3, 24.4, 24.0, 24.8, 25.0, 24.8, 25.0]),
  },
};

export const INDICATORS_META = {
  gdp:             { label: 'GDP Growth Rate',    unit: '%', color: '#6366F1', icon: '📈' },
  inflation:       { label: 'Inflation Rate',     unit: '%', color: '#EF4444', icon: '💹' },
  unemployment:    { label: 'Unemployment Rate',  unit: '%', color: '#F59E0B', icon: '👥' },
  consumerSpending:{ label: 'Consumer Spending',  unit: '%', color: '#10B981', icon: '🛒' },
  tradeBalance:    { label: 'Trade Balance',      unit: '% GDP', color: '#3B82F6', icon: '⚖️' },
  investment:      { label: 'Investment Level',   unit: '% GDP', color: '#8B5CF6', icon: '💰' },
};
