'use client'
import { ChartArea, Moon, Sun, User2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useThemeContext } from "@/src/context/ThemeContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const {isDark, toggleTheme} = useThemeContext()

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}

                className="bg-b-main shadow-lg fixed w-full z-20 top-0 start-0">
                <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="p-2 bg-primary rounded-md text-white">
                            <ChartArea />
                        </span>
                        <span className="self-center text-xl text-t-primary font-semibold whitespace-nowrap">Investly</span>
                    </Link>

                    <div className="flex gap-5 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <span onClick={toggleTheme} className="cursor-pointer">
                           {isDark? <Sun  className="text-amber-300"/>: <Moon className="text-blue-950"/>}

                        </span>
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="flex text-sm bg-neutral-primary rounded-full md:me-0 focus:ring-4 focus:ring-neutral-tertiary">
                            <span className="sr-only">Open user menu</span>
                            <User2 className="text-t-primary"/>
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

        </>
    )
}
