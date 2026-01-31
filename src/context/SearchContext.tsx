'use client'

import { createContext, useState, ReactNode, useMemo } from "react"
import { Asset } from "../types/asset"
import useData from "../hooks/useData"
import useDebounce from "../hooks/useDebounce"
type SearchContextType = {
    searchResults: Asset[]
    setSearchQuery: (query: string) => void
    searchQuery: string
}
export const SearchContext = createContext<SearchContextType|undefined>(undefined)

const SearchContextProvider = ({ children }: { children: ReactNode }) => {
    const { updatedData: data } = useData()
    const [searchQuery, setSearchQuery] = useState('')
    const debouncedQuery = useDebounce(searchQuery)

    const searchResults = useMemo(()=>{
        if(!debouncedQuery) return []
        return data.filter(assets=>
            assets.name.toLowerCase().includes(debouncedQuery.toLowerCase())
        )
    },[data, debouncedQuery])
    
    return (
        <SearchContext.Provider value={{ searchResults, setSearchQuery, searchQuery }}>
            {children}
        </SearchContext.Provider>
    )
}


export default SearchContextProvider