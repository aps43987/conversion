import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { currencies } from '../data/currencies';
import { ConversionCard } from './ConversionCard';
import { RefreshCw, Clock } from 'lucide-react';

export function CurrencyConverter() {
  const [amount, setAmount] = useState<string>('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  const fetchExchangeRates = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      setExchangeRates(response.data.rates);
      setCurrentTime(new Date());
    } catch (err) {
      setError('Failed to fetch exchange rates. Please try again later.');
      console.error('Error fetching exchange rates:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
    // Fetch rates every minute
    const interval = setInterval(fetchExchangeRates, 60 * 1000);
    return () => clearInterval(interval);
  }, [fromCurrency]);

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const convert = () => {
    if (!exchangeRates[toCurrency]) return 0;
    return parseFloat(amount) * exchangeRates[toCurrency];
  };

  const result = convert();

  return (
    <ConversionCard title="Currency Converter">
      <div className="space-y-4">
        {error && (
          <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              From
            </label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To
            </label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Result:</p>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-500">
                {currentTime.toLocaleTimeString()}
              </span>
              <button
                onClick={fetchExchangeRates}
                disabled={isLoading}
                className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 ml-2"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>
          <p className="text-2xl font-semibold text-indigo-600">
            {isLoading ? (
              <span className="text-gray-400">Loading...</span>
            ) : (
              `${result.toFixed(2)} ${toCurrency}`
            )}
          </p>
          {!isLoading && (
            <p className="text-sm text-gray-500 mt-1">
              1 {fromCurrency} = {exchangeRates[toCurrency]?.toFixed(4)} {toCurrency}
            </p>
          )}
        </div>
      </div>
    </ConversionCard>
  );
}