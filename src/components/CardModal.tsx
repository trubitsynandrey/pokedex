
import React from 'react'
import styled from 'styled-components'
import { CloseIcon } from '../icons/CloseIcon'
import { breakpoints } from '../styles/breakpoints'
import { useIsMobile } from './isMobileHook'
import { colorsType, Label, labelColours, pokeColors, PropertyName } from './PokeCard'
import { usePokeContext } from './PokeContext'
import { LabeledProgressBar } from './UI/LabeledProgressBar'
import { ModalContainer } from './UI/ModalContainer'

const ModalBack = styled.div`
    position: fixed;
    background-color: #212121;
    opacity: 0.5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    @media (max-width: ${breakpoints.sm}) {
        display: none;

    }
    
`
const ModalInner = styled.div<{ colour: colorsType }>`
    background: 
    ${({ colour }) => `linear-gradient(270deg, ${pokeColors[colour][1]} 0.15%, ${pokeColors[colour][0]} 100%)`};
    min-width: 60%;
    display: grid;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 100;
    height: 340px;
    grid-template-columns: 1fr 1.3fr;
    border-radius: 16px;
    &::-webkit-scrollbar {
        display: none;
    }
    @media (max-width: ${breakpoints.lg}) {
        min-width: 90%;
    }
    @media (max-width: ${breakpoints.sm}) {
        position: fixed;
        display: flex;
        flex-direction: column;
        top: 0;
        left: 0;
        transform: none;    
        height: 100%;
        z-index: 10;
        overflow-y: scroll;
        width: 100%;
        padding-top: 40px;
        border-radius: 0;
        
    }
`

const PokeImg = styled.img`
    width: 100%;
    height: inherit;
    object-fit: contain;
    object-position: center;
    display: block;
    border-radius: 10px 0px 0px 10px;   
    @media (max-width: ${breakpoints.sm}) {
        height: 300px;
        border-radius: 0;
        position: absolute;
        z-index: 3;
        margin-top: 40px;
    }
`

const DescriptionBox = styled.div<{ color: colorsType }>`
    border-radius: 0px 10px 10px 0px;
    padding-top: 30px;
    padding-left: 12px;
    padding-right: 20px;
    display: flex;
    position: relative;
    gap: 23px;
    flex-direction: column;
    background:  ${({ color }) => `linear-gradient(180deg, ${pokeColors[color][1]} 42.19%, ${pokeColors[color][0]} 100%)`};
    @media (max-width: ${breakpoints.sm}) {
        margin-top: 250px;
        padding: 11px;
        padding-bottom: 20px;
        border-radius: 0;
        justify-content: flex-end;
        flex: 1;
        z-index: 2;
        padding-top: 70px;
        border-radius: 16px 16px 0px 0px;
    }
`

const PokeName = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    text-transform: capitalize;
    color: #FDFDFD;
    @media (max-width: ${breakpoints.sm}) {
        font-size: 36px;
        line-height: 42px;
        text-align: center;
    }

`

const WhiteBox = styled.div`
    border-radius: 16px;
    background-color: #FDFDFD;
    display: flex;
    flex-direction: column;
    padding: 10px;
    @media (max-width: ${breakpoints.sm}) {
        padding: 20px;
    }
`

const Abilities = styled(WhiteBox)`
    min-width: 264px;
    width: fit-content;
`

const AbilitiesP = styled.p`
    font-size: 16px;
    line-height: 19px;
`

const ProgressBarContainer = styled.div`
    height: 6px;
    background-color: #F6F7F9;
    border-radius: 99px;
    position: relative;
    overflow: hidden;
    width: 100%;
`

const ProgressBar = styled.div<{ percentage: string }>`
    position: absolute;
    background-color: black;
    width: ${({ percentage }) => percentage};
    height: inherit;
`

const PropertyBox = styled(WhiteBox)`
flex: 1;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 5px;
    /* height: 58px; */
`

const PropertiesContainer = styled.div`
    display: flex;
    gap: 20px;
`

const ModalPropertiesCircle = styled.div`
    height: 30px;
    width: 30px;
    border: 3px solid #212121;
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CloseIconWrapper = styled.div<{isDarkTheme: boolean}>`
    position: absolute;
    right: 0;
    top: -35px;
    & > svg > rect {
        fill: ${({isDarkTheme}) => isDarkTheme? 'white' : '#212121'};
    }
    &:hover > svg > rect {
        fill: #F2B807;
        transition: ease-in-out 0.2s;
    }
    @media (max-width: ${breakpoints.sm}) {
        top: 10px;
        left: 10px;
        z-index: 50;
    }
`

const LabelModalWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    right: calc(100% + 5px);
    display: flex;
    justify-content: flex-end;
    gap: 12px;  
    @media (max-width: ${breakpoints.sm}) {
        position: relative;
        right: 0;
    }
`

const ModalImgWrapper = styled.div<{ colour: colorsType }>`
    position: relative;
    background: 
    ${({ colour }) => `linear-gradient(270deg, ${pokeColors[colour][1]} 0.15%, ${pokeColors[colour][0]} 100%)`};
    border-radius: 10px 0px 0px 10px;   
    @media (max-width: ${breakpoints.sm}) {
        border-radius: 0;
        height: 300px;
    }

`

const ProgressWrapper = styled(WhiteBox)`
    flex-direction: row;
    justify-content: space-between; 
    gap: 27px;
    @media (max-width: ${breakpoints.sm}) {
        flex-direction: column;
    }

`


interface BurgerModalProps {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>,
    img: string,
    color: colorsType,
    name: string,
    stats: any,
    experience: number,
    abilities: any,
    types: any,
}


export const CardModal = ({ setIsModal, img, color, name, stats, experience, abilities, types }: BurgerModalProps) => {
    const {darkTheme} = usePokeContext()
    const statsForRender = stats.filter((item: any) => {
        return item.stat.name !== "hp" && item.stat.name !== "speed"
    })
    const propertyNamesChanger = (property: string) => {
        if (property === 'special-attack') return 'sp Attack'
        if (property === 'special-defense') return 'sp Defense'
        return property;
    }

    const isMobile = useIsMobile()

    const valueToPercentage = (val: number) => `${Math.floor(val / 10)}%`

    return (
        <ModalContainer setIsModal={setIsModal}>
            <ModalInner colour={color}>
                <CloseIconWrapper isDarkTheme={darkTheme} onClick={() => setIsModal(false)}>
                    <CloseIcon />
                </CloseIconWrapper>
                {isMobile && <PokeName>{name}</PokeName>}
                <PokeImg src={img} alt={name} />

                <DescriptionBox color={color}>
                    <LabelModalWrapper>
                        {types.map((item: any, idx: number) => {
                            const labelName: keyof typeof labelColours = item.type.name;
                            return <Label key={idx} style={{ backgroundColor: labelColours[labelName] }}>{labelName}</Label>
                        })}
                    </LabelModalWrapper>
                    {!isMobile && <PokeName>
                        {name}
                    </PokeName>}
                    <Abilities>
                        <AbilitiesP>Abilities</AbilitiesP>
                        <AbilitiesP>
                            {abilities.map((item: any, idx: number) => {
                                if (abilities.length === idx + 1) {
                                    return <span key={idx} style={{ textTransform: 'capitalize' }}>{item.ability.name}</span>
                                }
                                return (<span key={idx}><span key={idx} style={{ textTransform: 'capitalize' }}>{item.ability.name}</span><span> - </span></span>)
                            })}
                        </AbilitiesP>
                    </Abilities>
                    <ProgressWrapper>
                        <div style={{ flex: 1 }}>
                            <LabeledProgressBar 
                                style={{background: 'linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)' }} 
                                labelName={'Health Points'} 
                                stat={stats[0].base_stat}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <LabeledProgressBar 
                                style={{background: 'linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)' }} 
                                labelName={'Experience'} 
                                stat={experience} 
                            />
                        </div>
                    </ProgressWrapper>
                    <PropertiesContainer>
                        {statsForRender.filter((item: any) => item.stat.name !== "hp" || "speed").map((item: any, idx: number) => {
                            return (<PropertyBox key={idx}>
                                <ModalPropertiesCircle>
                                    {item.base_stat}
                                </ModalPropertiesCircle>
                                <PropertyName>{propertyNamesChanger(item.stat.name)}</PropertyName>
                            </PropertyBox>)
                        })}
                    </PropertiesContainer>
                </DescriptionBox>
            </ModalInner>
        </ModalContainer>
    )
}

