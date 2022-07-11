import React from 'react'
import styled from 'styled-components'
import { InputSearch } from '../InputSearch'
import { usePokeContext } from '../PokeContext'
import { RangeSelector } from './RangeSelecor'
import { TypeSelector } from './TypeSelector'

const PokedexFilterWrapper = styled.div`
    width: 100%;
    /* height: auto; */
    background-color: white;
    z-index: 10;
    /* margin-top: 100px; */
    height: 100px;
`

export const PokedexFilter = () => {
    const { setFilterName } = usePokeContext()
    return (<PokedexFilterWrapper>
        <InputSearch onChange={(e) => setFilterName(e.target.value)} />
        <div style={{ display: 'flex', gap: '64px' }}>
            <TypeSelector />
            <RangeSelector name={'attack'} />
            <RangeSelector name={'experience'} />
        </div>
    </PokedexFilterWrapper>)
}
