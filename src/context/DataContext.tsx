'use client'
import { assets, simulatePriceUpdate } from '@/src/data/mockData'
import { useFilter } from '@/src/hooks/useFilter'
import { useSort } from '@/src/hooks/useSort'
import { Asset } from '@/src/types/asset'
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import useDebounce from '../hooks/useDebounce'

type DataContextType = {
    data: Asset[]
    sortingValue: keyof Asset
    setSortingValue: (key: keyof Asset) => void
    filterValue: string
    setFilterValue: (value: string) => void
    totalValue: number
    totalChangePer: number
    totalChangeVal: number
    setSearchValue: (value: string) => void
    searchValue: string
}

const DataContext = createContext<DataContextType | undefined>(undefined)
export const DataContextProvider = ({ children }: { children: ReactNode }) => {

    const [updatedData, setUpdatedData] = useState(assets)

    const [sortingValue, setSortingValue] = useState<keyof Asset>('name') //sorting value
    const sortedArray = useSort(updatedData, sortingValue) // sorted data

    const [filterValue, setFilterValue] = useState('All') // filter value
    const filterdData = useFilter(sortedArray, 'type', filterValue) // filtered data


    //debounced search
    const [searchValue, setSearchValue] = useState('')
    const debouncedSearch = useDebounce(searchValue)
    const data = useMemo(() => {
        let result = sortedArray

        if (filterValue !== 'All') {
            result = filterdData
        }

        if (debouncedSearch) {
            result = result.filter(asset =>
                asset.name.toLowerCase().includes(debouncedSearch.toLowerCase())
            )
        }

        return result
    }, [sortedArray, filterValue, debouncedSearch])


    //simulate updata
    useEffect(() => {
        const interval = setInterval(() => {
            setUpdatedData(prev =>
                prev.map(asset => simulatePriceUpdate(asset))
            )
        }, 3000)

        return () => clearInterval(interval)
    }, [])


    //total values
    const totalValue = useMemo(() => {
        return data.reduce((sum, asset) => {
            return sum + asset.currentPrice * asset.quantity
        }, 0)

    }, [data])
    const totalChangeVal = useMemo(() => {
        return data.reduce((sum, asset) => {
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
            setSearchValue,
            searchValue,
        }}>
            {children}
        </DataContext.Provider>

    )

}

export default DataContext