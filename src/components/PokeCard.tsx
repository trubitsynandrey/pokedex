import React from 'react'
import styled from 'styled-components'

const pokeColors = {
    green: ['#64D368', '#64D368'],
    yellow: ['#F2CB07', '#F2B807'],
    red: ['#B33327', '#D93E30',],
    pink: ['#F89EAE', '#F4B5C1'],
    purple: ['#6A359C', '#804FB3'],
    blue: ['#5BC7FA', '#35BAFF'],
    brown: ['#772F1A', '#F2A65A'],
    white: ['#B8C6DB', '#F5F7FA']
}


const PokeImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
`

const Card = styled.div`
    display: grid;
    background-color: #F6F7F9;
    height: 136px;
    border-radius: 8px;
    grid-template-columns: 1.2fr 2fr;
    overflow: hidden;
`

const CardLeftSide = styled.div`
    
`

const CardRightImg = styled.div<{ colour: keyof typeof pokeColors }>`
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
    color: #212121;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 18px;
`

const Properties = styled.div`
    border: 3px solid #212121;
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
`
const PropertyName = styled.span`
    font-size: 12px;
    line-height: 14px;
    color: #4B4B4B;
`
const PropertiesBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`
const Label = styled.div`
    width: 60px;
    height: 16px;
    border-radius: 999px;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
    font-size: 12px;
    line-height: 14px;
    color: #212121;
    text-align: center;
    background-color: #73D677;
    text-transform: capitalize;
`

const labelColours = {
    fire: pokeColors.red[1],
    flying: pokeColors.white[1],
    poison: pokeColors.purple[1],
    water: pokeColors.blue[1],
    bug: pokeColors.yellow[1],
    ground: pokeColors.brown[1],
    electric: pokeColors.yellow[0],
    fairy: pokeColors.pink[1],
    
}

interface PokeCardProps  {
    name: string,
    attack: string, 
    defense: string,
    types:string[],
    color: keyof typeof pokeColors,
    img: string,
}

export const PokeCard = ({name, attack, defense, types, color, img}: PokeCardProps) => {
    return (
        <Card>
            <CardLeftSide />
            <PokeDescription>
                <PokeName>
                    {name}
                </PokeName>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <PropertiesBox>
                        <Properties>{attack}</Properties>
                        <PropertyName>Attack</PropertyName>
                    </PropertiesBox>

                    <PropertiesBox>
                        <Properties>{defense}</Properties>
                        <PropertyName>Defense</PropertyName>
                    </PropertiesBox>
                </div>
                <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                    {types.map((item: any) => {
                        const labelName: keyof typeof labelColours = item.type.name;
                        return <Label style={{ backgroundColor: labelColours[labelName] }}>{labelName}</Label>
                    })}
                </div>
            </PokeDescription>
            <CardRightImg colour={color}>
                <PokeImg src={img} />
            </CardRightImg>
        </Card>
    )
}

