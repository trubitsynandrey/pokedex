import { noop } from 'lodash'
import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

interface initialValueProps {
  isNavModal: boolean;
  setIsNavModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValue: initialValueProps = {
  isNavModal: false,
  setIsNavModal: noop,
}


const Context = createContext(initialValue)

export const PokeContext: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation()
  console.log('location', location)
  const [isNavModal, setIsNavModal] = useState(false);
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
  }
  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  )
}

export const usePokeContext = (): initialValueProps => useContext(Context)


