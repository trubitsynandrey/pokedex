import { filterModalsType } from "./types"

export const turnToFalse = (obj: filterModalsType): filterModalsType => {
    return Object.keys(obj).reduce((initial, curr) => ({
        ...initial, [curr]: false
    }), {} as filterModalsType)
}

export const valueToPercentage = (val: number) => `${Math.floor(val / 10)}%`