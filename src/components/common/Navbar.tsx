'use client'
import { ChartArea, Moon, Sun, User2 } from "lucide-react";
import Link from "next/link";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useThemeContext } from "@/src/context/ThemeContext";
import { SearchContext } from "@/src/context/SearchContext";
import Modal from "../ui/Modal";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { isDark, toggleTheme } = useThemeContext()
    const { searchResults, searchQuery, setSearchQuery } = useContext(SearchContext)!

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedAsset, setSelectedAsset] = useState<any | null>(null)

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}

                className="bg-b-main shadow-lg fixed w-full z-20 top-0 start-0">
                <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center md:space-x-2 space-x-1 ">
                        <span className="md:p-2 p-1 bg-primary rounded-md text-white">
                            <ChartArea className="md:w-6 md:h-6 w-5 h-5" />
                        </span>
                        <span className="self-center md:text-xl text-t-primary font-semibold whitespace-nowrap">Investly</span>
                    </Link>
                    <div className="relative">
                        <input
                            type="search"
                            placeholder="Search assets..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="border-blue-900 border bg-b-secondary text-t-primary cursor-pointer rounded-lg p-2 md:w-64 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {searchResults.length > 0 && (
                            <div className="absolute top-full left-0 right-0  bg-b-secondary text-t-secondary border-border shadow-lg rounded-lg">
                                {searchResults.map(asset => (
                                    <div onClick={() => {
                                        setSelectedAsset(asset)
                                        setIsModalOpen(true)
                                    }} key={asset.id} className="p-2 hover:bg-hover cursor-pointer">
                                        {asset.name} - {asset.symbol}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="flex md:gap-5 gap-1 items-center md:order-2">
                        <span onClick={toggleTheme} className="cursor-pointer">
                            {isDark ? <Sun className="text-amber-300" /> : <Moon className="text-blue-950" />}

                        </span>
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="flex text-sm bg-neutral-primary rounded-full md:me-0 focus:ring-4 focus:ring-neutral-tertiary">
                            <span className="sr-only">Open user menu</span>
                            <User2 className="text-t-primary" />
                        </button>

                    </div>


                </div>
            </motion.nav>
            {/* Dropdown menu */}
            <div className={`z-50 border rounded-xl bg-b-main text-t-primary mr-4 absolute right-0 top-18 rounded-base shadow-lg w-44 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-300 ease-in-out`}>
                <div className="px-4 py-3 text-sm border-b border-default">
                    <span className="block font-medium">Menna Shehata</span>
                    <span className="block text-t-secondary text-[12px] truncate">mennashehata2005@gmail.com</span>
                </div>
                <ul className="p-2 text-sm text-body font-medium" aria-labelledby="user-menu-button">
                    <li>
                        <a href="#" className="inline-flex items-center w-full p-2 hover:bg-hover transition-all duration-1000 ease-in-out rounded">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="inline-flex items-center w-full p-2 hover:bg-hover transition-all duration-1000 ease-in-out rounded">Analytics</a>
                    </li>
                    <li>
                        <a href="#" className="inline-flex items-center w-full p-2 hover:bg-hover transition-all duration-1000 ease-in-out rounded">Earnings</a>
                    </li>
                    <li>
                        <a href="#" className="inline-flex items-center w-full p-2 hover:bg-hover transition-all duration-1000 ease-in-out rounded">Sign out</a>
                    </li>
                </ul>
            </div>
            <Modal isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                asset={selectedAsset} />
        </>
    )
}
