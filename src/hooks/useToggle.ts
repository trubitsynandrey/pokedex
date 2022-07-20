import { useState } from "react";

export function useToggle(defaultValue?: boolean) {
    const [value, setValue] = useState(defaultValue)
    function toggleValue(value: boolean | undefined) {
        setValue(prev => typeof value === "boolean" ? value : !prev)
    }

    return {value, toggleValue}
}