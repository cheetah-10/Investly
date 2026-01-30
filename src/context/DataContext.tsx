'use client'
import { assets, simulatePriceUpdate } from '@/src/data/mockData'
import { useFilter } from '@/src/hooks/useFilter'
import { useSort } from '@/src/hooks/useSort'
import { Asset } from '@/src/types/asset'
import { createContext, ReactNode, useEffect, useState } from 'react'

type DataContextType = {
    data: Asset[]
    sortingValue: keyof Asset
    setSortingValue: (key: keyof Asset) => void
    filterValue: string
    setFilterValue: (value: string) => void
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




    return (
        <DataContext.Provider value={{
            data, 
            sortingValue,
            setSortingValue,
            filterValue,
            setFilterValue,
        }}>
            {children}
        </DataContext.Provider>

    )

}

export default DataContext