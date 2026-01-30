"use client";
import {  useMemo } from "react";

type SortOrder = "asc" | "desc";
export function useSort<T>(
    array: T[],
    key: keyof T,
    order: SortOrder = "asc"
): T[] {

    const sortedArray = useMemo(() => {
     return [...array].sort((a, b) => {
            const valueA = a[key]
            const valueB = b[key]
            if (typeof valueA === "number" && typeof valueB === "number") {
                return order === "asc" ? valueA - valueB : valueB - valueA
            }
            if (typeof valueA === "string" && typeof valueB === "string") {
                return order === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA)
            }

            return 0;
        })

    }, [array, key, order])
    return sortedArray

}
