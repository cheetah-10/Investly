'use client'
import { assets, simulatePriceUpdate } from '@/src/data/mockData'
import { useFilter } from '@/src/hooks/useFilter'
import { useSort } from '@/src/hooks/useSort'
import { Asset } from '@/src/types/asset'
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'

type DataContextType = {
    data: Asset[]
    sortingValue: keyof Asset
    setSortingValue: (key: keyof Asset) => void
    filterValue: string
    setFilterValue: (value: string) => void
    totalValue: number
    totalChangePer: number
    totalChangeVal: number
}
const DataContext = createContext<DataContextType | undefined>(undefined)
export const DataContextProvider = ({ children }: { children: ReactNode }) => {

    const [updatedData, setUpdatedData] = useState(assets)


    const [sortingValue, setSortingValue] = useState<keyof Asset>('name') //sorting value
    const sortedArray = useSort(updatedData, sortingValue) // sorted data

    const [filterValue, setFilterValue] = useState('All') // filter value
    const filterdData = useFilter(sortedArray, 'type', filterValue) // filtered data

    const data = filterValue === 'All' ? sortedArray : filterdData


    useEffect(() => {
        const interval = setInterval(() => {
            setUpdatedData(prev =>
                prev.map(asset => simulatePriceUpdate(asset))
            )
        }, 3000)

        return () => clearInterval(interval)
    }, [])


    const totalValue = useMemo(() => {
        return data.reduce((sum,asset)=>{
            return sum + asset.currentPrice * asset.quantity
        }, 0)

    }, [data])

    
    const totalChangeVal = useMemo(() => {
        return data.reduce((sum,asset)=>{
            const changeValue = (asset.change24h / 100) * asset.currentPrice * asset.quantity
            return sum + changeValue
        
        }, 0)

    }, [data])

    const totalChangePer = useMemo(() => {
        if (totalValue === 0) return 0
        return (totalChangeVal / totalValue) * 100

    }, [totalChangeVal, totalValue])
    

    return (
        <DataContext.Provider value={{
            data,
            sortingValue,
            setSortingValue,
            filterValue,
            setFilterValue,
            totalValue,
            totalChangeVal,
            totalChangePer,
        }}>
            {children}
        </DataContext.Provider>

    )

}

export default DataContext