'use client'
import { X, TrendingUp, TrendingDown } from "lucide-react"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  asset: any | null
}

const Modal = ({ isOpen, onClose, asset }: ModalProps) => {
  if (!isOpen || !asset) return null

  const isPositive = asset.change24h >= 0

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-lg mx-4 bg-b-main border border-border rounded-lg shadow-xl">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h3 className="text-lg font-semibold text-t-primary">
            {asset.name} <span className="text-t-secondary">({asset.symbol})</span>
          </h3>
          <button
            onClick={onClose}
            className="w-9 h-9 cursor-pointer rounded-full hover:bg-hover flex items-center justify-center duration-300"
          >
            <X className="w-5 h-5 text-t-primary" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4 text-sm text-t-secondary">
          <div className="flex justify-between">
            <span>Type</span>
            <span className="font-medium text-t-primary">{asset.type}</span>
          </div>

          <div className="flex justify-between">
            <span>Current Price</span>
            <span className="font-medium text-t-primary">
              ${asset.currentPrice.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Quantity</span>
            <span className="font-medium text-t-primary">{asset.quantity}</span>
          </div>

          <div className="flex justify-between">
            <span>24h Change</span>
            <span
              className={`flex items-center gap-1 font-medium ${
                isPositive ? 'text-success' : 'text-error'
              }`}
            >
              {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {isPositive && '+'}{asset.change24h}%
            </span>
          </div>

          <div className="flex justify-between">
            <span>Last Updated</span>
            <span className="font-medium text-text-primary">
              {asset.lastUpdated.toLocaleTimeString()}
            </span>
          </div>
        </div>

      
      </div>
    </div>
  )
}

export default Modal
