import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { usePokeContext } from '../PokeContext'
import { filterModalsType, keysFilterModals } from '../../types'

const IconWrapper = styled.div`
    position: absolute;
    right: 6px;
    top: -2px;
    width: 7px;
`

const TypeSelectorContainer = styled.label` 
    position: relative;
    font-family: 'Source Sans Pro', sans-serif;
    display: inline-block;
    background-color: #F2F2F2;
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
`

interface ContainSelectorProps {
    name: keysFilterModals,
    children: ReactNode,
}

export const ContainerSelect = ({ name, children }: ContainSelectorProps) => {
    const turnToFalse = (obj: filterModalsType): filterModalsType => {
        return Object.keys(obj).reduce((initial, curr) => ({...initial, [curr]: false 
        }), {} as filterModalsType)
    }
    const { filterModals, setFilterModals } = usePokeContext()
    const onToggle = () => setFilterModals(prev => ({ ...turnToFalse(prev), [name]: !prev[name] }))

    return (
        <TypeSelectorContainer>
            <input type="checkbox" onChange={onToggle} checked={filterModals[name]} />
            {name.charAt(0).toUpperCase() + name.slice(1)}
            {/* <IconWrapper>
                <ArrowFilter />
            </IconWrapper> */}
            {children}
        </TypeSelectorContainer >

    )
}

