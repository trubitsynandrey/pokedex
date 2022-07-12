import React from 'react'
import { types, typesUnion } from 'src/types'
import styled from 'styled-components'
import { usePokeContext } from '../PokeContext'

import { ContainerSelect } from './ContainerSelect'
import { TypeCheckbox } from './TypeCheckbox'

const TypeSelectorWindow = styled.div`
    display: none;
    margin-top: 15px;
    transition: all 0.2s ease-in-out;
    
    background-color: #F2F2F2;
    flex-direction: column;
    /* align-items: center; */
    position: absolute;
    width: inherit;
    z-index: 50;
    max-height: 150px;
    overflow-y: scroll;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 32px;
    border-radius: 8px;
    text-align: left;
`

export const TypeSelector = () => {
    const { filterTypes, setFilterTypes } = usePokeContext()
    const onChangeFilter = (item: typesUnion) => {
        setFilterTypes(prev => ({
            ...prev, [item]: !filterTypes[item]
        }))
    }
    console.log(filterTypes, 'filter')
    return (
        <ContainerSelect name={'type'}>
            <TypeSelectorWindow>
                {types.map((item, idx) =>
                    <TypeCheckbox 
                        key={idx} 
                        item={item} 
                        typesArr={filterTypes} 
                        onChange={() => onChangeFilter(item)} 
                    />
                )}
            </TypeSelectorWindow>
        </ContainerSelect >

    )
}

