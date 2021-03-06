import React, { forwardRef, ReactElement, useEffect, useState } from 'react'
import { pokeColors } from 'src/styles/colors'
import styled from 'styled-components'
import { breakpoints } from '../styles/breakpoints'
import { CardModal } from './CardModal'
import { usePokeContext } from './PokeContext'
import { ReactPortal } from './UI/CreatePortalFunc'


const PokeImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
`

const Card = styled.div<{isDarkTheme: boolean}>`
    display: flex;
    background-color: #F6F7F9;
    height: 136px;
    border-radius: 8px;
    overflow: hidden;
    background-color: ${({isDarkTheme}) => isDarkTheme? '#333333' : '#F6F7F9'};
`

export type colorsType = keyof typeof pokeColors

export const CardRightImg = styled.div<{ colour: colorsType }>`
background: 
${({ colour }) => `linear-gradient(270deg, ${pokeColors[colour][1]} 0.15%, ${pokeColors[colour][0]} 100%)`};
height: inherit;
flex: 1;
`


//poke description
const PokeDescription = styled.div`
    padding-top: 6px;
    padding-left: 20px;
    margin-right: 3px;
`

const PokeName = styled.p`
    font-size: 18px;
    line-height: 21px;
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
    text-transform: capitalize;
    text-align: center;
    @media (max-width: ${breakpoints.lg}) {
        font-size: 10px;
    }
`
const PropertiesBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

const TypesWrapper = styled.div`
    display: flex; 
    gap: 12px;
    margin-top: 12px;
    position: absolute;
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
    item: any,
}

export const PokeCard = forwardRef(({ name, attack, defense, types, color, img, stats, experience, abilities, item }: PokeCardProps, ref: any): ReactElement => {
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
                        item={item}
                    />
                </ReactPortal>}
            <Card isDarkTheme={darkTheme} onClick={() => setIsCardModal(true)} ref={ref}>
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
                    <TypesWrapper>
                        {types.map((item: any, idx: number) => {
                            const labelName: keyof typeof labelColours = item.type.name;
                            return <Label key={idx} style={{ backgroundColor: labelColours[labelName] }}>{labelName}</Label>
                        })}
                    </TypesWrapper>
                </PokeDescription>
                <CardRightImg colour={color}>
                    <PokeImg src={img} />
                </CardRightImg>
            </Card>
        </>
    )
})

