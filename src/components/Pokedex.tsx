import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../styles/breakpoints'
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






export const PokedexScreen = () => {
    const [data, setData] = useState<any[]>([])
    const getData = async () => {
        let data = [];
        const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=60')
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
        // return await Promise.all(requests)
        return newdata;
    }

    const getColor = async () => {
        const species = await getData()
            .then(res => res.map(item => fetch(item.species.url).then(res => res.json())))
        const data = await Promise.all(species)
        const newdata = data.map(item => item.color.name)
        return newdata;
    }

    useEffect(() => {
        getColor().then(res => console.log('color', res[1]))
        getData().then(res => {
            console.log(res)
            setData(res)
        })
    }, [])

    return (
        <PokedexContainer>
            <CardsContainer>
                {data?.map((item, idx) => {
                    return (
                        <PokeCard 
                            key={idx} 
                            name={item.name} 
                            attack={item.stats[1].base_stat} 
                            defense={item.stats[2].base_stat} 
                            types={item.types} color={item.colour} 
                            img={item.sprites.other.dream_world.front_default} 
                        />
                    )
                })}
            </CardsContainer>
        </PokedexContainer>
    )
}
