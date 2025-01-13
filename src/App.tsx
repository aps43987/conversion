import React, { useState } from 'react';
import { Calculator, Ruler } from 'lucide-react';
import { CurrencyConverter } from './components/CurrencyConverter';
import { MeasurementConverter } from './components/MeasurementConverter';

function App() {
  const [activeTab, setActiveTab] = useState<'currency' | 'measurement'>('currency');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Universal Converter</h1>
          <p className="text-lg text-gray-600">Convert currencies and measurements with ease</p>
        </header>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                activeTab === 'currency'
                  ? 'bg-indigo-500 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('currency')}
            >
              <Calculator className="w-5 h-5" />
              Currency
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                activeTab === 'measurement'
                  ? 'bg-indigo-500 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('measurement')}
            >
              <Ruler className="w-5 h-5" />
              Measurement
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          {activeTab === 'currency' ? <CurrencyConverter /> : <MeasurementConverter />}
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Exchange rates are updated every hour. Last update: {new Date().toLocaleTimeString()}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;