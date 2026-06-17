import axios from 'axios';

const BASE = 'https://api.worldbank.org/v2';
const PARAMS = { format: 'json', per_page: 20, mrv: 10 };

const parseIndicator = (raw) => {
  if (!raw || !raw[1]) return [];
  return raw[1]
    .filter(d => d.value !== null)
    .map(d => ({ year: parseInt(d.date), value: parseFloat(d.value?.toFixed(2)) }))
    .sort((a, b) => a.year - b.year);
};

const fetch = async (country, indicator) => {
  const url = `${BASE}/country/${country}/indicator/${indicator}`;
  const res = await axios.get(url, { params: PARAMS, timeout: 8000 });
  return parseIndicator(res.data);
};

// GDP Growth Rate (annual %)
export const fetchGDP = (c) => fetch(c, 'NY.GDP.MKTP.KD.ZG');

// Inflation (Consumer Price Index annual %)
export const fetchInflation = (c) => fetch(c, 'FP.CPI.TOTL.ZG');

// Unemployment (% of labor force)
export const fetchUnemployment = (c) => fetch(c, 'SL.UEM.TOTL.ZS');

// Household Consumer Spending Growth
export const fetchConsumerSpending = (c) => fetch(c, 'NE.CON.PRVT.KD.ZG');

// Trade Balance (% of GDP)
export const fetchTradeBalance = (c) => fetch(c, 'NE.RSB.GNFS.ZS');

// Gross Fixed Capital Formation / Investment (% of GDP)
export const fetchInvestment = (c) => fetch(c, 'NE.GDI.TOTL.ZS');

// Interest Rate — Lending Rate
export const fetchInterestRate = (c) => fetch(c, 'FR.INR.LEND');
