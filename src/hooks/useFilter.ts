"use client";
import { useMemo } from "react";

export function useFilter<T>(
    array: T[],
    key: keyof T,
    value: T[keyof T]
): T[] {

    const filterdArray = useMemo(() => {
        return [...array].filter(item => item[key] === value)
    },[array, key, value])
    

return filterdArray

}
