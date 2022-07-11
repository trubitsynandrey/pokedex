import React, { useState } from 'react'
import styled from 'styled-components'
import { InputSearch } from '../InputSearch'
import { useIsMobile } from '../isMobileHook'
import { usePokeContext } from '../PokeContext'
import { ReactPortal } from '../UI/CreatePortalFunc'
import { ContainerSelect } from './ContainerSelect'
import { FilterModal } from './FilterModal'
import { RangeSelector } from './RangeSelecor'
import { TypeSelector } from './TypeSelector'

const PokedexFilterWrapper = styled.div`
    width: 100%;
    /* height: auto; */
    background-color: white;
    z-index: 10;
    /* margin-top: 100px; */
    height: 100px;
    margin-bottom: 80px;
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

export const PokedexFilter = () => {
    const { setFilterName } = usePokeContext()
    const [isFilterModal, setIsFilterModal] = useState(false)
    const isMobile = useIsMobile()
    return (<PokedexFilterWrapper>
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
