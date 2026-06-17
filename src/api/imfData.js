import axios from 'axios';

const BASE = 'https://api.worldbank.org/v2';

// Interest Rate — Lending rate (World Bank)
export const fetchInterestRate = async (country) => {
  try {
    const res = await axios.get(`${BASE}/country/${country}/indicator/FR.INR.LEND`, {
      params: { format: 'json', per_page: 10, mrv: 10 },
      timeout: 8000,
    });
    const raw = res.data?.[1];
    if (!raw) return [];
    return raw
      .filter(d => d.value !== null)
      .map(d => ({ year: parseInt(d.date), value: parseFloat(d.value?.toFixed(2)) }))
      .sort((a, b) => a.year - b.year);
  } catch {
    // Fallback mock interest rate data
    return [
      { year: 2015, value: 8.5 }, { year: 2016, value: 9.0 }, { year: 2017, value: 8.5 },
      { year: 2018, value: 9.5 }, { year: 2019, value: 8.5 }, { year: 2020, value: 7.0 },
      { year: 2021, value: 6.5 }, { year: 2022, value: 8.5 }, { year: 2023, value: 9.0 },
    ];
  }
};
