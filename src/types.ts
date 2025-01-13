export type Currency = {
  code: string;
  name: string;
  symbol: string;
};

export type Measurement = {
  type: string;
  units: {
    name: string;
    symbol: string;
    ratio: number;
  }[];
};

export type ConversionHistory = {
  id: string;
  type: 'currency' | 'measurement';
  from: string;
  to: string;
  amount: number;
  result: number;
  timestamp: Date;
};

export type FavoriteConversion = {
  id: string;
  type: 'currency' | 'measurement';
  from: string;
  to: string;
};