'use client'
import { assets, simulatePriceUpdate } from '@/src/data/mockData'
import { useFilter } from '@/src/hooks/useFilter'
import { useSort } from '@/src/hooks/useSort'
import { Asset } from '@/src/types/asset'
import { ArrowUp, ArrowUpDown, TrendingDown, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const Table = () => {
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
        <div>
            <div className="relative overflow-x-auto bg-b-main shadow-xs rounded-base border border-border rounded-lg mx-7">
                <div className="p-4 flex items-center justify-between space-x-4">
                    <label htmlFor="input-group-1" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                        </div>
                        <input type="text" id="input-group-1" className="block w-full max-w-96 ps-9 pe-3 py-2 bg-b-secondary border border-border  text-heading text-sm rounded-lg shadow-xs placeholder:text-t-secondary" placeholder="Search" />
                    </div>

                    <form className="max-w-sm mx-auto">
                        {/* <label htmlFor="countries" className="block mb-2.5 text-sm font-medium text-heading">Select an option</label> */}
                        <select onChange={(e) => setSortingValue(e.target.value as keyof Asset)} id="countries" className="block text-t-primary px-3 py-2.5 bg-b-main border cursor-pointer border-border rounded text-heading text-sm shadow-xs placeholder:text-green-500">
                            <option defaultValue="Sort">Sort by</option>
                            <option value="name">Name</option>
                            <option value="symbol">Symbol</option>
                            <option value="currentPrice">Price</option>
                            <option value="quantity">Quantity</option>
                            <option value="change24h">Change rate</option>
                        </select>
                    </form>
                    <form className="max-w-sm mx-auto">
                        {/* <label htmlFor="countries" className="block mb-2.5 text-sm font-medium text-heading">Select an option</label> */}
                        <select onChange={(e) => setFilterValue(e.target.value)} className="block text-t-primary px-3 py-2.5 bg-b-main border cursor-pointer border-border rounded text-heading text-sm shadow-xs placeholder:text-green-500">
                            <option defaultValue="Sort">Filter by</option>
                            <option value="All">All</option>
                            <option value="Crypto">Crypto</option>
                            <option value="Stock">Stock</option>
                        </select>
                    </form>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-[16px] text-t-primary border-b border-t border-border font-semibold">
                        <tr>

                            <th scope="col" className="px-6 py-3 flex gap-1 text-blue-700">
                                Asset Name {<ArrowUp className='w-5' />}
                            </th>
                            <th scope="col" className="px-6 py-3 text-t-secondary text-[13px]">
                                TYPE
                            </th>
                            <th scope="col" className="px-6 py-3 flex gap-1">
                                Current Price {<ArrowUpDown className='text-gray-400 w-5' />}
                            </th>
                            <th scope="col" className="px-6 py-3 text-t-secondary text-[13px]">
                                QUANTITY
                            </th>
                            <th scope="col" className="px-6 py-3 flex gap-1">
                                Total value {<ArrowUpDown className='text-gray-400 w-5' />}
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Last Updated
                            </th>
                            <th scope="col" className="px-6 py-3 flex  gap-1">
                                24h Change <span></span>{<ArrowUpDown className='text-gray-400 w-5' />}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((asset) => <tr key={asset.id} className=" border-b border-border hover:bg-hover text-t-primary font-semibold text-[15px]">

                            <th className="px-6 py-4 flex flex-col font-semibold text-lg whitespace-nowrap">
                                {asset.name}
                                <p className='text-t-secondary text-[13px]'>
                                    {asset.symbol}

                                </p>
                            </th>
                            <td className={`px-6 py-4 text-[13px]`}>
                                <p className={`rounded-full font-semibold w-fit px-2 py-1 ${asset.type === 'Crypto' ? 'text-purple-600 bg-purple-200' : 'text-green-600 bg-green-200'}`}> {asset.type}</p>
                            </td>
                            <td className="px-6 py-4">
                                ${asset.currentPrice.toFixed(2)}
                            </td>
                            <td className="px-6 py-4">
                                {asset.quantity}
                            </td>
                            <td className="px-6 py-4">
                                ${(asset.currentPrice * asset.quantity).toFixed(2)}
                            </td>
                            <td className="px-6 py-4">
                                {asset.lastUpdated.toLocaleTimeString('en-US')}
                            </td>
                            <td className={`${asset.change24h>=0? 'text-success': 'text-error'} px-6 py-4 font-medium text-[16px]`}>
                               
                                {asset.change24h >= 0 ? (<TrendingUp className="w-4 h-4 inline mr-1" />) : <TrendingDown className='w-4 h-4 inline mr-1'/>}
                                {asset.change24h >= 0 ? '+' : ''}{asset.change24h}%
                            </td>
                        </tr>

                        )}


                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Table