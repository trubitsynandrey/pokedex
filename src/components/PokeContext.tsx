import { noop } from 'lodash'
import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { filterType, objectFilterTypes } from './TypeSelector';

interface initialValueProps {
  isNavModal: boolean;
  setIsNavModal: React.Dispatch<React.SetStateAction<boolean>>;
  filterTypes: filterType,
  setFilterTypes: React.Dispatch<React.SetStateAction<filterType>>,
}

const initialValue: initialValueProps = {
  isNavModal: false,
  setIsNavModal: noop,
  filterTypes: objectFilterTypes,
  setFilterTypes: noop,
}


const Context = createContext(initialValue)

export const PokeContext: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation()
  const [isNavModal, setIsNavModal] = useState(false);
  const [filterTypes, setFilterTypes] = useState(objectFilterTypes)

  useEffect(() => {
    if (isNavModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isNavModal])

  useEffect(() => {
    setIsNavModal(false)
  }, [location])
  const value = {
    isNavModal,
    setIsNavModal,
    filterTypes,
    setFilterTypes,
  }
  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  )
}

export const usePokeContext = (): initialValueProps => useContext(Context)


