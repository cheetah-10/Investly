'use client'
import useData from '@/src/hooks/useData'
import { TrendingDown, TrendingUp } from 'lucide-react'

const Card = () => {
    const { data } = useData()
    return (
        <div className="md:hidden space-y-4 pb-4 m-7">
            {data.map(asset => (
                <div
                    key={asset.id}
                    className="bg-b-main border border-border rounded-lg p-4 shadow-sm"
                >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h3 className="text-lg font-semibold text-t-primary">
                                {asset.name}
                            </h3>
                            <p className="text-sm text-t-secondary">{asset.symbol}</p>
                        </div>

                        <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold
          ${asset.type === 'Crypto'
                                    ? 'bg-purple-200 text-purple-700'
                                    : 'bg-green-200 text-green-700'
                                }`}
                        >
                            {asset.type}
                        </span>
                    </div>

                    {/* Body */}
                    <div className="grid grid-cols-2 gap-y-2 text-sm text-t-primary">
                        <p className="text-t-secondary">Price</p>
                        <p className="text-right">${asset.currentPrice.toFixed(2)}</p>

                        <p className="text-t-secondary">Quantity</p>
                        <p className="text-right">{asset.quantity}</p>

                        <p className="text-t-secondary">Total Value</p>
                        <p className="text-right">
                            ${(asset.currentPrice * asset.quantity).toFixed(2)}
                        </p>

                        <p className="text-t-secondary">Updated</p>
                        <p className="text-right">
                            {asset.lastUpdated.toLocaleTimeString('en-US')}
                        </p>
                    </div>

                    {/* Change */}
                    <div
                        className={`mt-3 flex items-center gap-1 font-semibold
        ${asset.change24h >= 0 ? 'text-success' : 'text-error'}
        `}
                    >
                        {asset.change24h >= 0
                            ? <TrendingUp className="w-4 h-4" />
                            : <TrendingDown className="w-4 h-4" />
                        }
                        {asset.change24h >= 0 ? '+' : ''}
                        {asset.change24h}%
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Card