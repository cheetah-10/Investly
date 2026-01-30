export type AssetType = 'Stock' | 'Crypto';

export type Asset = {
    id: string;
    name: string;
    symbol: string;
    type: AssetType;
    currentPrice: number;
    quantity: number;
    change24h: number;
    lastUpdated: Date;
};

export interface AssetWithValue extends Asset {
  totalValue: number;
}
