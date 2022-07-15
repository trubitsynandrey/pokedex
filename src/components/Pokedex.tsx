import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { breakpoints } from 'src/styles/breakpoints'
import { Loader } from 'src/components/Loader'
import { PaginationLoader } from './PaginationLoader'
import { PokeCard } from './PokeCard'
import { initialValue, usePokeContext } from './PokeContext'
import { typesUnion } from '../types'
import { PokedexFilter } from './filterUI/PokedexFilter'

const PokedexContainer = styled.div`
padding-top: 120px;
    flex: 1;
    padding-left: 10%;
    padding-right: 10%;
    @media (max-width: ${breakpoints.lg}) {
        padding-left: 5%;
        padding-right: 5%;
    }
    @media (max-width: ${breakpoints.sm}) {
        padding-top: 90px;
    }
    
`

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 34px;
    row-gap: 45px;
    @media (max-width: ${breakpoints.lg}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${breakpoints.sm}) {
        grid-template-columns: 1fr;
    }
`

const LoaderWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`






export const PokedexScreen = () => {
    const { filterTypes, 
            filterRanges, 
            filterName, 
            isLoadingMore, 
            setOffset, 
            isLoading,
            data,
         } = usePokeContext()
    const isFilter = Object.values(filterTypes).some(bool => bool)
    console.log(isFilter, 'isfilter')

    const watcher = useRef<IntersectionObserver | null>(null);


    const lastUserRef = useCallback((node: Element) => {
        if (isLoadingMore) return;
        if (watcher.current) watcher.current.disconnect()
        watcher.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setOffset(prev => prev + 24)
            }
        })
        if (node) watcher.current.observe(node)
    }, [isLoadingMore]);

    function jsonEqual(a: any,b: any) {
        return JSON.stringify(a) === JSON.stringify(b);
    }

    const isRangesFilter = jsonEqual(filterRanges, initialValue.filterRanges)

    if (isLoading) {
        return <Loader />
    }

    return (
        <PokedexContainer>
            <PokedexFilter />
            <CardsContainer>
                {data?.filter(item => item.name.includes(filterName))
                    .filter(item => {
                        if (isFilter) {
                            const types = item.types
                            return types.some((item: any) => {
                                const name: typesUnion = item.type.name
                                return name && filterTypes[name]
                            })
                        } else {
                            return true
                        }
                    })
                    .filter(item => {
                        if (!isRangesFilter) {
                            const exp = item.base_experience
                            const attack = item.stats[1].base_stat
                            return filterRanges.attack.min < +attack && filterRanges.attack.max > +attack && filterRanges.experience.min < +exp && filterRanges.experience.max > +exp
                        } else {
                            return true;
                        }
                    })
                    .map((item, idx) => {
                        const imgSrc = item.sprites.other.dream_world.front_default
                        if (data.length === idx + 1) {
                            return (
                                <PokeCard
                                    ref={lastUserRef}
                                    key={item.id}
                                    name={item.name}
                                    attack={item.stats[1].base_stat}
                                    defense={item.stats[2].base_stat}
                                    types={item.types} color={item.colour}
                                    img={imgSrc}
                                    stats={item.stats}
                                    experience={item.base_experience}
                                    abilities={item.abilities}
                                />
                            )
                        }
                        else {
                            return (<PokeCard
                                key={item.id}
                                name={item.name}
                                attack={item.stats[1].base_stat}
                                defense={item.stats[2].base_stat}
                                types={item.types} color={item.colour}
                                img={imgSrc}
                                stats={item.stats}
                                experience={item.base_experience}
                                abilities={item.abilities}
                            />)
                        }

                    })}
            </CardsContainer>
            {isLoadingMore && <LoaderWrapper>
                <PaginationLoader /></LoaderWrapper>}
        </PokedexContainer>
    )
}
