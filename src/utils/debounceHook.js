// Dependencies
import { useEffect, useState } from "react";

// useDebounce hook to create delay before searching user
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
            // Cancel the timeout if value or delay changes
            return () => {
                clearTimeout(handler);
            };
        },
        // Only call the effect if the value of delay changes
        [value, delay]
    );

    return debouncedValue;
};

// Export
export default useDebounce;