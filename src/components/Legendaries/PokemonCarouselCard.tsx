import { forwardRef } from 'react'
import { Pokeball } from 'src/icons/Pokeball'
import styled from 'styled-components'

const CardWrapper = styled.div`
    position: relative;
    height: 180px;
    width: 130px;
    background: 
    linear-gradient(215.78deg,
     #B57E10 -124.09%, #B57E10 -78.76%, 
     #F9DF7B -35.76%, #FFF3A6 8.4%
     , #F9DF7B 50.24%, #B57E10 99.06%);
     border-radius: 18px;
     opacity: 0.5;
`
const PokeImg = styled.img`
    width: 120%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
    position: relative;
    top: -5%;
    z-index: 5;
`
const WhiteBox = styled.div`
    border-radius: 16px;
    background: linear-gradient(180deg, #FFFFFF 30.32%, #F5F5F5 100%);
    height: 52px;
    position: absolute;
    bottom: -20px;
    width: 100%;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    padding-left: 8px;
    padding-right: 8px;
`

const PokeName = styled.p`
    font-size: 18px;
    line-height: 21px;
    text-transform: capitalize;
    font-family: 'Roboto', sans-serif;
    color: #212121;
`

interface PokemonCarouselCardProps {
    src: string,
    name: string,
}

export const PokemonCarouselCard = forwardRef(({src, name}: PokemonCarouselCardProps, ref: any) => {
    return (
        <CardWrapper ref={ref}>
            <PokeImg src={src} />
            <WhiteBox>
                <PokeName>{name}</PokeName>
                <Pokeball />
            </WhiteBox>
        </CardWrapper>
    )
})

