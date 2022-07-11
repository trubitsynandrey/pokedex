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
}


const Context = createContext(initialValue)

export const PokeContext: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation()
  const [isNavModal, setIsNavModal] = useState(false);
  const [filterTypes, setFilterTypes] = useState(objectFilterTypes)
  const [filterModals, setFilterModals] = useState(initialValue.filterModals)
  const [filterRanges, setFilterRanges] = useState(initialValue.filterRanges)
  const [filterName, setFilterName] = useState('')

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
  }
  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  )
}

export const usePokeContext = (): initialValueProps => useContext(Context)


