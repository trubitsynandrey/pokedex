import { noop } from 'lodash'
import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { filterModalsType, filterType, objectFilterTypes } from '../types';

interface initialValueProps {
  isNavModal: boolean;
  setIsNavModal: React.Dispatch<React.SetStateAction<boolean>>;
  filterTypes: filterType,
  setFilterTypes: React.Dispatch<React.SetStateAction<filterType>>,
  filterModals: filterModalsType,
  setFilterModals: React.Dispatch<React.SetStateAction<filterModalsType>>,
  filterRanges: {
    attack: {
      min: number,
      max: number
    },
    experience: {
      min: number,
      max: number
    },
  },
  setFilterRanges: React.Dispatch<React.SetStateAction<{
    attack: {
      min: number,
      max: number
    };
    experience: {
      min: number,
      max: number
    };
  }>>,
  filterName: string,
  setFilterName: React.Dispatch<React.SetStateAction<string>>,
  darkTheme: boolean,
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>,
  noFilter: boolean,
  data: any[],
  isLoadingMore: boolean,
  isLoading: boolean,
  offset: number,
  setOffset: React.Dispatch<React.SetStateAction<number>>,

}

export const initialValue: initialValueProps = {
  isNavModal: false,
  setIsNavModal: noop,
  filterTypes: objectFilterTypes,
  setFilterTypes: noop,
  filterModals: {
    attack: false,
    experience: false,
    type: false,
  },
  filterRanges: {
    attack: {
      min: 0,
      max: 1000,
    },
    experience: {
      min: 0,
      max: 1000,
    }
  },
  setFilterModals: noop,
  setFilterRanges: noop,
  filterName: '',
  setFilterName: noop,
  darkTheme: false,
  setDarkTheme: noop,
  noFilter: true,
  data: [],
  isLoadingMore: false,
  isLoading: true,
  offset: 0,
  setOffset: noop,
}


const Context = createContext(initialValue)

export const PokeContext: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation()
  const [isNavModal, setIsNavModal] = useState(false);
  const [filterTypes, setFilterTypes] = useState(objectFilterTypes)
  const [filterModals, setFilterModals] = useState(initialValue.filterModals)
  const [filterRanges, setFilterRanges] = useState(initialValue.filterRanges)
  const [filterName, setFilterName] = useState('')
  const [darkTheme, setDarkTheme] = useState(false)
  const [data, setData] = useState<any[]>([])
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [offset, setOffset] = useState(0)

  const parserToEnd = (arr: any): any => {
    if (arr?.evolves_to?.length === 0) {
      const bestPokemonId = +arr.species.url.match(/\d+/g)[1];
      return bestPokemonId
    } else {
      return parserToEnd(arr?.evolves_to[0])
    }
  }

  const getData = async (offset: number = 0, limit: number = 24) => {

    let data = [];
    const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
      .then(res => res.json())
    const requests = await pokemons.results
      .map((item: { name: string, url: string }) => fetch(item.url).then(res => res.json()))
    data = await Promise.all(requests)

    const species = await data.map(item => fetch(item.species.url).then(res => res.json()))
    const dataSpecies = await Promise.all(species)
    console.log(dataSpecies, 'dataSpecies')
    const evolutionChainRequests = await dataSpecies.map(item => fetch(item.evolution_chain.url).then(res => res.json()))
    const evolutionChain = await Promise.all(evolutionChainRequests)
    const evolutionChainId= evolutionChain.map(item => item.chain).map(item => {
      return parserToEnd(item)})
    const evolutionChainIdSet = Array.from(new Set(evolutionChainId))
    const higherPokemonsRequests = evolutionChainIdSet.map(item => fetch(`https://pokeapi.co/api/v2/pokemon/${item}`).then(res => res.json()))
    const higherPokemonsResult = await Promise.all(higherPokemonsRequests)
    const higherStats = await higherPokemonsResult.map((item: any) => ({
        id: item.id,
        experience: item.base_experience,
        ...item.stats.reduce((prev: any, curr: any) => {
          return {...prev, [curr.stat.name]: curr.base_stat}
        }, {})
    }))
    const idToStats = evolutionChainId.map((item) => {
      const stats = higherStats.find(stat => {
        return stat.id === item})
      return stats;
    })
    const color = dataSpecies.map(item => item.color.name)
    const newdata = data.map((item, idx) => {
      return Object.assign(item, 
        { colour: color[idx],
          higherStats: idToStats[idx],
          flavorText: dataSpecies[idx].flavor_text_entries[0].flavor_text,
        }, {})
    })

    return newdata;
  }

  useEffect(() => {
    setIsLoadingMore(true)
    getData(offset).then(res => {
      if (offset === 0) {
        setData(res)
        setIsLoading(false)
        setIsLoadingMore(false)
      } else {
        setData(prev => [...prev, ...res])
        setIsLoadingMore(false)
      }
    })
  }, [offset])

  function jsonEqual(a: any, b: any) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  const noFilter = jsonEqual(filterTypes, objectFilterTypes)
    && jsonEqual(filterRanges, initialValue.filterRanges)


  useEffect(() => {
    if (isNavModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isNavModal])

  useEffect(() => {
    setIsNavModal(false)
    setFilterModals(initialValue.filterModals)
    setFilterRanges(initialValue.filterRanges)
    setFilterTypes(initialValue.filterTypes)
    window.scrollTo(0, 0);
  }, [location])
  const value = {
    isNavModal,
    setIsNavModal,
    filterTypes,
    setFilterTypes,
    filterModals,
    setFilterModals,
    filterRanges,
    setFilterRanges,
    filterName,
    setFilterName,
    darkTheme,
    setDarkTheme,
    noFilter,
    data,
    isLoadingMore,
    isLoading,
    offset,
    setOffset,
  }
  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  )
}

export const usePokeContext = (): initialValueProps => useContext(Context)


