import { filterModalsType } from "./types"

export const turnToFalse = (obj: filterModalsType): filterModalsType => {
    return Object.keys(obj).reduce((initial, curr) => ({
        ...initial, [curr]: false
    }), {} as filterModalsType)
}

export const valueToPercentage = (val: number, max: number) => {
    return `${Math.floor(val * 100 / max)}%`}
