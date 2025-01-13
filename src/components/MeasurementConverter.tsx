import React, { useState } from 'react';
import { measurements } from '../data/measurements';
import { ConversionCard } from './ConversionCard';

export function MeasurementConverter() {
  const [measurementType, setMeasurementType] = useState<keyof typeof measurements>('length');
  const [amount, setAmount] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState(measurements.length.units[0].name);
  const [toUnit, setToUnit] = useState(measurements.length.units[1].name);

  const currentMeasurement = measurements[measurementType];
  
  const convert = (value: number, from: string, to: string) => {
    const fromUnit = currentMeasurement.units.find((u) => u.name === from);
    const toUnit = currentMeasurement.units.find((u) => u.name === to);
    
    if (!fromUnit || !toUnit) return 0;
    
    if (measurementType === 'temperature') {
      // Special handling for temperature
      if (from === 'Celsius' && to === 'Fahrenheit') {
        return (value * 9/5) + 32;
      } else if (from === 'Fahrenheit' && to === 'Celsius') {
        return (value - 32) * 5/9;
      } else if (from === 'Celsius' && to === 'Kelvin') {
        return value + 273.15;
      } else if (from === 'Kelvin' && to === 'Celsius') {
        return value - 273.15;
      }
      return value;
    }
    
    return (value * fromUnit.ratio) / toUnit.ratio;
  };

  const result = convert(parseFloat(amount) || 0, fromUnit, toUnit);

  return (
    <ConversionCard title="Measurement Converter">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <select
            value={measurementType}
            onChange={(e) => {
              const newType = e.target.value as keyof typeof measurements;
              setMeasurementType(newType);
              setFromUnit(measurements[newType].units[0].name);
              setToUnit(measurements[newType].units[1].name);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {Object.entries(measurements).map(([key, value]) => (
              <option key={key} value={key}>
                {value.type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {currentMeasurement.units.map((unit) => (
                <option key={unit.name} value={unit.name}>
                  {unit.name} ({unit.symbol})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {currentMeasurement.units.map((unit) => (
                <option key={unit.name} value={unit.name}>
                  {unit.name} ({unit.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Result:</p>
          <p className="text-2xl font-semibold text-indigo-600">
            {result.toFixed(4)} {currentMeasurement.units.find((u) => u.name === toUnit)?.symbol}
          </p>
        </div>
      </div>
    </ConversionCard>
  );
}