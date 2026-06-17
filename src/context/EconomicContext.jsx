import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { fetchGDP, fetchInflation, fetchUnemployment, fetchConsumerSpending, fetchTradeBalance, fetchInvestment } from '../api/worldBank';
import { mockData } from '../api/mockData';

const EconomicContext = createContext(null);
export const useEconomic = () => useContext(EconomicContext);

export const EconomicProvider = ({ children }) => {
  const [country, setCountry] = useState('IND');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [selectedIndicator, setSelectedIndicator] = useState('gdp');
  const [forecastAlgorithm, setForecastAlgorithm] = useState('linearRegression');
  const [forecastYears, setForecastYears] = useState(3);

  const COUNTRIES = [
    { code: 'IND', name: 'India', flag: '🇮🇳' },
    { code: 'USA', name: 'United States', flag: '🇺🇸' },
    { code: 'CHN', name: 'China', flag: '🇨🇳' },
    { code: 'GBR', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'DEU', name: 'Germany', flag: '🇩🇪' },
    { code: 'WLD', name: 'Global', flag: '🌍' },
  ];

  const loadData = useCallback(async (countryCode) => {
    setLoading(true);
    setError(null);
    try {
      const [gdp, inflation, unemployment, consumerSpending, tradeBalance, investment] = await Promise.all([
        fetchGDP(countryCode),
        fetchInflation(countryCode),
        fetchUnemployment(countryCode),
        fetchConsumerSpending(countryCode),
        fetchTradeBalance(countryCode),
        fetchInvestment(countryCode),
      ]);
      setData({ gdp, inflation, unemployment, consumerSpending, tradeBalance, investment });
      setLastUpdated(new Date());
    } catch (err) {
      console.warn('API failed, using mock data:', err.message);
      setData(mockData[countryCode] || mockData['IND']);
      setError('Using offline data — API temporarily unavailable');
      setLastUpdated(new Date());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadData(country); }, [country, loadData]);

  const getHealthScore = () => {
    if (!data) return 0;
    const latestGDP = data.gdp?.slice(-1)[0]?.value ?? 0;
    const latestInflation = data.inflation?.slice(-1)[0]?.value ?? 5;
    const latestUnemployment = data.unemployment?.slice(-1)[0]?.value ?? 5;
    let score = 50;
    score += Math.min(latestGDP * 3, 25);
    score -= Math.min(Math.max(latestInflation - 4, 0) * 2, 20);
    score -= Math.min(latestUnemployment * 1.5, 20);
    return Math.max(0, Math.min(100, Math.round(score)));
  };

  const getRiskLevel = () => {
    const score = getHealthScore();
    if (score >= 70) return { level: 'Low', color: 'var(--color-accent)', label: '🟢 Low Risk' };
    if (score >= 45) return { level: 'Medium', color: 'var(--color-warning)', label: '🟡 Medium Risk' };
    return { level: 'High', color: 'var(--color-danger)', label: '🔴 High Risk' };
  };

  return (
    <EconomicContext.Provider value={{
      country, setCountry,
      data, loading, error, lastUpdated,
      countries: COUNTRIES,
      selectedIndicator, setSelectedIndicator,
      forecastAlgorithm, setForecastAlgorithm,
      forecastYears, setForecastYears,
      healthScore: getHealthScore(),
      riskLevel: getRiskLevel(),
      refresh: () => loadData(country),
    }}>
      {children}
    </EconomicContext.Provider>
  );
};
