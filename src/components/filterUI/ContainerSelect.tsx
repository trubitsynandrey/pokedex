import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { usePokeContext } from '../PokeContext'
import { filterModalsType, keysFilterModals } from '../../types'
import { turnToFalse } from 'src/utils'

const IconWrapper = styled.div`
    position: absolute;
    right: 6px;
    top: -2px;
    width: 7px;
`

const TypeSelectorContainer = styled.label<{isDarkTheme: boolean}>` 
    position: relative;
    font-family: 'Source Sans Pro', sans-serif;
    display: inline-block;
    background-color: ${({isDarkTheme}) => isDarkTheme? '#4F4F4F' : '#F2F2F2'};
    border-radius: 4px;
    width: 135px;
    height: 20px;    
    text-align: center;
    & > input[type="checkbox"] {
        display: none;
        z-index: 99;
    }
    & > input[type="checkbox"]:checked + div {
            display: flex;
    }
    & > div {
        background-color: ${({isDarkTheme}) => isDarkTheme? '#4F4F4F' : '#F2F2F2'};
    }
`

interface ContainSelectorProps {
    name: keysFilterModals,
    children: ReactNode,
}

export const ContainerSelect = ({ name, children }: ContainSelectorProps) => {
    const { darkTheme, filterModals, setFilterModals } = usePokeContext()
    const onToggle = () => setFilterModals(prev => ({ ...turnToFalse(prev), [name]: !prev[name] }))

    return (
        <TypeSelectorContainer isDarkTheme={darkTheme}>
            <input type="checkbox" onChange={onToggle} checked={filterModals[name]} />
            {name.charAt(0).toUpperCase() + name.slice(1)}
            {/* <IconWrapper>
                <ArrowFilter />
            </IconWrapper> */}
            {children}
        </TypeSelectorContainer >

    )
}

