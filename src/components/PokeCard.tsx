import React, { forwardRef, ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../styles/breakpoints'
import { CardModal } from './CardModal'
import { usePokeContext } from './PokeContext'
import { ReactPortal } from './UI/CreatePortalFunc'

export const pokeColors = {
    green: ['#64D368', '#64D368'],
    yellow: ['#F2CB07', '#F2B807'],
    red: ['#B33327', '#D93E30',],
    pink: ['#F89EAE', '#F4B5C1'],
    purple: ['#6A359C', '#804FB3'],
    blue: ['#5BC7FA', '#35BAFF'],
    brown: ['#772F1A', '#F2A65A'],
    white: ['#B8C6DB', '#F5F7FA'],
    gray: ['#B8C6DB', '#F5F7FA'],
    black: ['#28313B', '#485461']
}


const PokeImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
`

const Card = styled.div<{isDarkTheme: boolean}>`
    display: grid;
    background-color: #F6F7F9;
    height: 136px;
    border-radius: 8px;
    grid-template-columns: 1.2fr 2fr;
    overflow: hidden;
    background-color: ${({isDarkTheme}) => isDarkTheme? '#333333' : '#F6F7F9'};
`

const CardLeftSide = styled.div`
`

export type colorsType = keyof typeof pokeColors

export const CardRightImg = styled.div<{ colour: colorsType }>`
background: 
${({ colour }) => `linear-gradient(270deg, ${pokeColors[colour][1]} 0.15%, ${pokeColors[colour][0]} 100%)`};
height: inherit;
`


//poke description
const PokeDescription = styled.div`
    position: absolute;
    margin-top: 6px;
    margin-left: 20px;
`

const PokeName = styled.p`
    font-size: 18px;
    line-height: 21px;
    /* color: #212121; */
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 18px;
`

export const PropertiesCircle = styled.div<{isDarkTheme: boolean}>`
    border: 3px solid ${({isDarkTheme}) => isDarkTheme? '#FFFFFF' : '#212121'};
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
`
export const PropertyName = styled.span`
    font-size: 12px;
    line-height: 14px;
    /* color: #4B4B4B; */
    text-transform: capitalize;
    @media (max-width: ${breakpoints.lg}) {
        font-size: 10px;
    }
`
const PropertiesBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`
export const Label = styled.div`
    width: 60px;
    height: 16px;
    border-radius: 999px;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
    font-size: 12px;
    line-height: 14px;
    /* color: #212121; */
    text-align: center;
    background-color: #73D677;
    text-transform: capitalize;
`

export const labelColours = {
    fire: pokeColors.red[1],
    flying: pokeColors.white[1],
    poison: pokeColors.purple[1],
    water: pokeColors.blue[1],
    bug: pokeColors.yellow[1],
    ground: pokeColors.brown[1],
    electric: pokeColors.yellow[0],
    fairy: pokeColors.pink[1],
}

interface PokeCardProps {
    name: string,
    attack: string,
    defense: string,
    types: string[],
    color: keyof typeof pokeColors,
    img: string,
    stats: any,
    experience: number,
    abilities: any,
}

export const PokeCard = forwardRef(({ name, attack, defense, types, color, img, stats, experience, abilities }: PokeCardProps, ref: any): ReactElement => {
    const [isCardModal, setIsCardModal] = useState(false);
    const { darkTheme } = usePokeContext()
    useEffect(() => {
        if (isCardModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isCardModal])
    return (
        <>
            {isCardModal &&
                <ReactPortal>
                    <CardModal
                        setIsModal={setIsCardModal}
                        img={img}
                        color={color}
                        name={name}
                        stats={stats}
                        experience={experience}
                        abilities={abilities}
                        types={types}
                    />
                </ReactPortal>}
            <Card isDarkTheme={darkTheme} onClick={() => setIsCardModal(true)} ref={ref}>

                <CardLeftSide />
                <PokeDescription>
                    <PokeName>
                        {name}
                    </PokeName>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <PropertiesBox>
                            <PropertiesCircle isDarkTheme={darkTheme}>{attack}</PropertiesCircle>
                            <PropertyName>Attack</PropertyName>
                        </PropertiesBox>

                        <PropertiesBox>
                            <PropertiesCircle isDarkTheme={darkTheme}>{defense}</PropertiesCircle>
                            <PropertyName>Defense</PropertyName>
                        </PropertiesBox>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                        {types.map((item: any, idx: number) => {
                            const labelName: keyof typeof labelColours = item.type.name;
                            return <Label key={idx} style={{ backgroundColor: labelColours[labelName] }}>{labelName}</Label>
                        })}
                    </div>
                </PokeDescription>
                <CardRightImg colour={color}>
                    <PokeImg src={img} />
                </CardRightImg>
            </Card>
        </>
    )
})

