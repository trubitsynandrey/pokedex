import React, { useState } from 'react'
import { breakpoints } from 'src/styles/breakpoints'
import styled from 'styled-components'
import { InputSearch } from '../InputSearch'
import { useIsMobile } from '../isMobileHook'
import { usePokeContext } from '../PokeContext'
import { ReactPortal } from '../UI/CreatePortalFunc'
import { FilterModal } from './FilterModal'
import { RangeSelector } from './RangeSelecor'
import { TypeSelector } from './TypeSelector'

const PokedexFilterWrapper = styled.div`
    width: 100%;
    z-index: 10;
    margin-bottom: 40px;
    transition: 0.2s all ease-in-out;
    @media (max-width: ${breakpoints.sm}) {
        margin-bottom: 90px;
    }
`

const FilterButton = styled.button`
    background-color: #F2F2F2;
    box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
    border-radius: 99px;
    height: 20px;
    text-align: center;
    font-size: 12px;
    line-height: 15px;
    color:  #212121;
    border: none;
    padding: 2px 15px;
    cursor: pointer;
    width: 77px;
    text-align: left;
    font-family: 'Source Sans Pro',sans-serif;
`
const ChooseFavourite = styled.p`
    text-align: center;
    font-size: 35px;
    line-height: 40px;
    max-width: 616px;
    align-self: center;
    margin: 0 auto;
    margin-bottom: 30px;
    @media (max-width: ${breakpoints.sm}) {
        font-size: 24px;
        line-height: 28px;
    }
`

export const PokedexFilter = () => {
    const { setFilterName } = usePokeContext()
    const [isFilterModal, setIsFilterModal] = useState(false)
    const isMobile = useIsMobile()
    return (<PokedexFilterWrapper>
        <ChooseFavourite>
            800 <span style={{ fontWeight: 700 }}>Pokemons</span> for you to choose your favourite
        </ChooseFavourite>
        <InputSearch onChange={(e) => setFilterName(e.target.value)} />
        {!isMobile ?
            (<div style={{ display: 'flex', gap: '64px' }}>
                <TypeSelector />
                <RangeSelector name={'attack'} />
                <RangeSelector name={'experience'} />
            </div>) : (
                <>
                    <FilterButton onClick={() => setIsFilterModal(true)}>Filter</FilterButton>
                    {isFilterModal && <ReactPortal>
                        <FilterModal setIsModal={setIsFilterModal} />
                    </ReactPortal>}
                </>)}
    </PokedexFilterWrapper>)
}
