import { breakpoints } from "./styles/breakpoints";

export type typesUnion = typeof types[number];
export type filterType = Record<typesUnion, boolean>;


export const types = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "normal",
  "rock",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "poison",
  "steel",
  "ghost",
  "grass",
  "ground",
  "ice",
  "psychic",
  "water",
] as const;

export const objectFilterTypes: filterType = types.reduce(
  (initialVal, curr) => ({ ...initialVal, [curr]: false }),
  {} as filterType
);

export interface filterModalsType {
  attack: boolean;
  experience: boolean;
  type: boolean
};

export type keysFilterModals = keyof filterModalsType;

const filterRanges = {
    attack: {
      min: 0,
      max: 1000,
    },
    experience: {
      min: 0,
      max: 1000,
    }
} as const 

export type rangesType = keyof typeof filterRanges
export type displayTypes =  typeof breakpoints[keyof typeof breakpoints]

export const breakpointsNumbers: Record<displayTypes, number> = {
  "576px": 576,
  "768px": 768,
  "992px": 992,
  "1200px": 1200,
  "1400px": 1400,
}
