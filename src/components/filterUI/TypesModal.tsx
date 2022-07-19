import React from 'react'
import { types, typesUnion } from 'src/types'
import styled from 'styled-components'
import { usePokeContext } from '../PokeContext'
import { TypeCheckbox } from './TypeCheckbox'

const TypesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 8px;
`

export const TypesModal = () => {
    const { filterTypes, setFilterTypes } = usePokeContext()
    const onChangeFilter = (item: typesUnion) => {
        setFilterTypes(prev => ({
            ...prev, [item]: !filterTypes[item]
        }))
    }
    return (
        <TypesWrapper>
            {types.map((item, idx) =>
                <TypeCheckbox
                    key={idx}
                    item={item}
                    typesArr={filterTypes}
                    onChange={() => onChangeFilter(item)}
                />
            )}
        </TypesWrapper>
    )
}

