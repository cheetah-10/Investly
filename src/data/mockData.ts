import { Asset } from "../types/asset";

export const assets: Asset[] = [
  {
    id: '1',
    name: 'Apple',
    symbol: 'AAPL',
    type: 'Stock',
    currentPrice: 185.42,
    quantity: 50,
    change24h: 2.34,
    lastUpdated: new Date(),
  },
  {
    id: '2',
    name: 'Bitcoin',
    symbol: 'BTC',
    type: 'Crypto',
    currentPrice: 45678.90,
    quantity: 1.5,
    change24h: -1.23,
    lastUpdated: new Date(),
  },
  {
    id: '3',
    name: 'Tesla',
    symbol: 'TSLA',
    type: 'Stock',
    currentPrice: 242.15,
    quantity: 30,
    change24h: 5.67,
    lastUpdated: new Date(),
  },
  {
    id: '4',
    name: 'Ethereum',
    symbol: 'ETH',
    type: 'Crypto',
    currentPrice: 2456.78,
    quantity: 5,
    change24h: 3.45,
    lastUpdated: new Date(),
  },
  {
    id: '5',
    name: 'Microsoft',
    symbol: 'MSFT',
    type: 'Stock',
    currentPrice: 378.92,
    quantity: 25,
    change24h: -0.89,
    lastUpdated: new Date(),
  },
  {
    id: '6',
    name: 'Cardano',
    symbol: 'ADA',
    type: 'Crypto',
    currentPrice: 0.58,
    quantity: 10000,
    change24h: 8.12,
    lastUpdated: new Date(),
  },
  {
    id: '7',
    name: 'Amazon',
    symbol: 'AMZN',
    type: 'Stock',
    currentPrice: 156.34,
    quantity: 15,
    change24h: 1.76,
    lastUpdated: new Date(),
  },
  {
    id: '8',
    name: 'Solana',
    symbol: 'SOL',
    type: 'Crypto',
    currentPrice: 98.45,
    quantity: 100,
    change24h: -4.32,
    lastUpdated: new Date(),
  },
  {
    id: '9',
    name: 'Google',
    symbol: 'GOOGL',
    type: 'Stock',
    currentPrice: 142.87,
    quantity: 40,
    change24h: 0.54,
    lastUpdated: new Date(),
  },
  {
    id: '10',
    name: 'Polkadot',
    symbol: 'DOT',
    type: 'Crypto',
    currentPrice: 7.23,
    quantity: 500,
    change24h: -2.15,
    lastUpdated: new Date(),
  },
];

// Simulate real-time price changes
export const simulatePriceUpdate = (asset: Asset): Asset => {
  const volatility = asset.type === 'Crypto' ? 0.02 : 0.01;
  const priceChange = (Math.random() - 0.5) * 2 * volatility * asset.currentPrice;
  const newPrice = Math.max(0.01, asset.currentPrice + priceChange);
  
  const changePercent = ((newPrice - asset.currentPrice) / asset.currentPrice) * 100;
  const newChange24h = asset.change24h + changePercent * 0.3;
  
  return {
    ...asset,
    currentPrice: Number(newPrice.toFixed(2)),
    change24h: Number(newChange24h.toFixed(2)),
    lastUpdated: new Date(),
  };
};
