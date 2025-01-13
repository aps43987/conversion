export const measurements = {
  length: {
    type: 'Length',
    units: [
      // Metric
      { name: 'Kilometer', symbol: 'km', ratio: 1000 },
      { name: 'Meter', symbol: 'm', ratio: 1 },
      { name: 'Decimeter', symbol: 'dm', ratio: 0.1 },
      { name: 'Centimeter', symbol: 'cm', ratio: 0.01 },
      { name: 'Millimeter', symbol: 'mm', ratio: 0.001 },
      { name: 'Micrometer', symbol: 'µm', ratio: 0.000001 },
      { name: 'Nanometer', symbol: 'nm', ratio: 0.000000001 },
      
      // Imperial/US
      { name: 'Mile', symbol: 'mi', ratio: 1609.344 },
      { name: 'Yard', symbol: 'yd', ratio: 0.9144 },
      { name: 'Foot', symbol: 'ft', ratio: 0.3048 },
      { name: 'Inch', symbol: 'in', ratio: 0.0254 },
      
      // Nautical
      { name: 'Nautical Mile', symbol: 'nmi', ratio: 1852 },
      
      // Other
      { name: 'Light Year', symbol: 'ly', ratio: 9.461e15 },
      { name: 'Astronomical Unit', symbol: 'AU', ratio: 1.496e11 },
      { name: 'Parsec', symbol: 'pc', ratio: 3.086e16 },
    ],
  },
  
  weight: {
    type: 'Weight',
    units: [
      // Metric
      { name: 'Metric Ton', symbol: 't', ratio: 1000 },
      { name: 'Kilogram', symbol: 'kg', ratio: 1 },
      { name: 'Gram', symbol: 'g', ratio: 0.001 },
      { name: 'Milligram', symbol: 'mg', ratio: 0.000001 },
      { name: 'Microgram', symbol: 'µg', ratio: 0.000000001 },
      
      // Imperial/US
      { name: 'Long Ton', symbol: 'long tn', ratio: 1016.047 },
      { name: 'Short Ton', symbol: 'sh tn', ratio: 907.1847 },
      { name: 'Stone', symbol: 'st', ratio: 6.35029 },
      { name: 'Pound', symbol: 'lb', ratio: 0.453592 },
      { name: 'Ounce', symbol: 'oz', ratio: 0.0283495 },
      { name: 'Grain', symbol: 'gr', ratio: 0.0000647989 },
    ],
  },
  
  volume: {
    type: 'Volume',
    units: [
      // Metric
      { name: 'Cubic Meter', symbol: 'm³', ratio: 1 },
      { name: 'Cubic Decimeter', symbol: 'dm³', ratio: 0.001 },
      { name: 'Liter', symbol: 'L', ratio: 0.001 },
      { name: 'Milliliter', symbol: 'mL', ratio: 0.000001 },
      { name: 'Cubic Centimeter', symbol: 'cm³', ratio: 0.000001 },
      
      // US
      { name: 'US Gallon', symbol: 'gal', ratio: 0.003785411784 },
      { name: 'US Quart', symbol: 'qt', ratio: 0.000946352946 },
      { name: 'US Pint', symbol: 'pt', ratio: 0.000473176473 },
      { name: 'US Cup', symbol: 'cup', ratio: 0.000236588236 },
      { name: 'US Fluid Ounce', symbol: 'fl oz', ratio: 0.0000295735295625 },
      { name: 'US Tablespoon', symbol: 'tbsp', ratio: 0.0000147867647813 },
      { name: 'US Teaspoon', symbol: 'tsp', ratio: 0.00000492892159375 },
      
      // Imperial
      { name: 'Imperial Gallon', symbol: 'imp gal', ratio: 0.00454609 },
      { name: 'Imperial Quart', symbol: 'imp qt', ratio: 0.0011365225 },
      { name: 'Imperial Pint', symbol: 'imp pt', ratio: 0.00056826125 },
      { name: 'Imperial Fluid Ounce', symbol: 'imp fl oz', ratio: 0.0000284130625 },
    ],
  },
  
  area: {
    type: 'Area',
    units: [
      // Metric
      { name: 'Square Kilometer', symbol: 'km²', ratio: 1000000 },
      { name: 'Hectare', symbol: 'ha', ratio: 10000 },
      { name: 'Are', symbol: 'a', ratio: 100 },
      { name: 'Square Meter', symbol: 'm²', ratio: 1 },
      { name: 'Square Centimeter', symbol: 'cm²', ratio: 0.0001 },
      { name: 'Square Millimeter', symbol: 'mm²', ratio: 0.000001 },
      
      // Imperial/US
      { name: 'Square Mile', symbol: 'sq mi', ratio: 2589988.110336 },
      { name: 'Acre', symbol: 'ac', ratio: 4046.8564224 },
      { name: 'Square Yard', symbol: 'sq yd', ratio: 0.83612736 },
      { name: 'Square Foot', symbol: 'sq ft', ratio: 0.09290304 },
      { name: 'Square Inch', symbol: 'sq in', ratio: 0.00064516 },
    ],
  },
  
  temperature: {
    type: 'Temperature',
    units: [
      { name: 'Celsius', symbol: '°C', ratio: 1 },
      { name: 'Fahrenheit', symbol: '°F', ratio: 1 },
      { name: 'Kelvin', symbol: 'K', ratio: 1 },
      { name: 'Rankine', symbol: '°R', ratio: 1 },
    ],
  },
  
  pressure: {
    type: 'Pressure',
    units: [
      { name: 'Pascal', symbol: 'Pa', ratio: 1 },
      { name: 'Kilopascal', symbol: 'kPa', ratio: 1000 },
      { name: 'Bar', symbol: 'bar', ratio: 100000 },
      { name: 'Atmosphere', symbol: 'atm', ratio: 101325 },
      { name: 'Torr', symbol: 'Torr', ratio: 133.322 },
      { name: 'Pound per Square Inch', symbol: 'psi', ratio: 6894.76 },
    ],
  },
  
  speed: {
    type: 'Speed',
    units: [
      { name: 'Meter per Second', symbol: 'm/s', ratio: 1 },
      { name: 'Kilometer per Hour', symbol: 'km/h', ratio: 0.277778 },
      { name: 'Mile per Hour', symbol: 'mph', ratio: 0.44704 },
      { name: 'Knot', symbol: 'kn', ratio: 0.514444 },
      { name: 'Foot per Second', symbol: 'ft/s', ratio: 0.3048 },
    ],
  },
  
  time: {
    type: 'Time',
    units: [
      { name: 'Year', symbol: 'yr', ratio: 31536000 },
      { name: 'Month', symbol: 'mo', ratio: 2628000 },
      { name: 'Week', symbol: 'wk', ratio: 604800 },
      { name: 'Day', symbol: 'd', ratio: 86400 },
      { name: 'Hour', symbol: 'h', ratio: 3600 },
      { name: 'Minute', symbol: 'min', ratio: 60 },
      { name: 'Second', symbol: 's', ratio: 1 },
      { name: 'Millisecond', symbol: 'ms', ratio: 0.001 },
      { name: 'Microsecond', symbol: 'µs', ratio: 0.000001 },
      { name: 'Nanosecond', symbol: 'ns', ratio: 0.000000001 },
    ],
  },
  
  energy: {
    type: 'Energy',
    units: [
      { name: 'Joule', symbol: 'J', ratio: 1 },
      { name: 'Kilojoule', symbol: 'kJ', ratio: 1000 },
      { name: 'Calorie', symbol: 'cal', ratio: 4.184 },
      { name: 'Kilocalorie', symbol: 'kcal', ratio: 4184 },
      { name: 'Watt Hour', symbol: 'Wh', ratio: 3600 },
      { name: 'Kilowatt Hour', symbol: 'kWh', ratio: 3600000 },
      { name: 'Electron Volt', symbol: 'eV', ratio: 1.602176634e-19 },
      { name: 'British Thermal Unit', symbol: 'BTU', ratio: 1055.06 },
    ],
  },
  
  digital: {
    type: 'Digital Storage',
    units: [
      { name: 'Bit', symbol: 'b', ratio: 0.125e-6 },
      { name: 'Byte', symbol: 'B', ratio: 1e-6 },
      { name: 'Kilobyte', symbol: 'KB', ratio: 0.001 },
      { name: 'Megabyte', symbol: 'MB', ratio: 1 },
      { name: 'Gigabyte', symbol: 'GB', ratio: 1000 },
      { name: 'Terabyte', symbol: 'TB', ratio: 1000000 },
      { name: 'Petabyte', symbol: 'PB', ratio: 1000000000 },
    ],
  },
} as const;