import { useEffect, useState } from "react";

/**
 * Custom hook to debounce a value.
 * It updates and returns the value only after the specified delay has passed without changes.
 * Useful for limiting the rate of actions like API calls during fast user input.
 */
export const useDebounce = <T>(delay: number, value: T): T => {

    // State to store the debounced value
    const [searchValue, setSearchValue] = useState<T>(value);

    useEffect(() => {
        // Set a timeout to update the debounced value after the delay
        const handler = setTimeout(() => {
            setSearchValue(value)
        }, delay);

        // Clear the timeout if value or delay changes before the timeout completes
        return () => clearTimeout(handler)
    }, [value, delay]) // Only re-run effect if value or delay changes

    // Return the debounced value
    return searchValue
}