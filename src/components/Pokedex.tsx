import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../styles/breakpoints'
import { CardModal } from './CardModal'
import { Loader } from './Loader'
import { PaginationLoader } from './PaginationLoader'
import { PokeCard } from './PokeCard'

const PokedexContainer = styled.div`
    padding-top: 160px;
    flex: 1;
    padding-left: 10%;
    padding-right: 10%;
    @media (max-width: ${breakpoints.lg}) {
        padding-left: 5%;
        padding-right: 5%;
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
    const [data, setData] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingMore, setIsLoadingMore] = useState(false)

    const [offset, setOffset] = useState(0)

    const getData = async (offset: number = 0, limit: number = 24) => {
        setIsLoadingMore(true)
        let data = [];
        const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
            .then(res => res.json())
        const requests = await pokemons.results
            .map((item: { name: string, url: string }) => fetch(item.url).then(res => res.json()))
        data = await Promise.all(requests)
        const species = await data.map(item => fetch(item.species.url).then(res => res.json()))
        const dataSpecies = await Promise.all(species)
        const color = dataSpecies.map(item => item.color.name)
        const newdata = data.map((item, idx) => {
            console.log('color iterate', color[idx])
            return Object.assign(item, { colour: color[idx] }, {})
        })
        setIsLoadingMore(false)
        return newdata;
    }

    const watcher = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        getData(offset).then(res => {
            console.log(res)
            if (offset === 0) {
                setData(res)
                setIsLoading(false)
            } else {
            setData(prev => [...prev, ...res])}
        })
        console.log('offset',offset)
        console.log('data',data)
    }, [offset])

    const lastUserRef = useCallback((node: Element) => {
        if (isLoadingMore) return;
        if (watcher.current) watcher.current.disconnect()
        watcher.current = new IntersectionObserver( entries => {
          if (entries[0].isIntersecting) {
            setOffset(prev => prev + 24)
          }
        })
        if (node) watcher.current.observe(node)
      }, [isLoadingMore]);

    if (isLoading) {
        return <Loader />
    }

    return (
        <PokedexContainer>
            <CardsContainer>
                {data?.map((item, idx) => {
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
                    )}
                    else {
                        return (<PokeCard
                            key={idx}
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
