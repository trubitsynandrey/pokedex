
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PokeBanner } from '../icons/Banner'
import { breakpoints } from '../styles/breakpoints'

const MainContainer = styled.div`
  padding-left: 10%;
  display: flex;
  justify-content: space-between;
  padding-top: 220px;
  padding-bottom: 80px;
  flex: 1;
  @media (max-width:  ${breakpoints.lg}) {
    flex-direction: column;
    padding-top: 100px;
    justify-content: center;
    padding-left: 0;
    padding-bottom: 60px;
  }
  @media (max-width: ${breakpoints.sm}) {
    padding-top: 70px;
  }
`
const FindPokemonText = styled.h1`
    font-size: 72px;
    line-height: 84px;
    letter-spacing: 4px;
    min-width: 506px;
    font-weight: 300;
    @media (max-width: ${breakpoints.lg}) {
    max-width: none;
    text-align: center;
    margin-top: -70px;
    }
    @media (max-width: ${breakpoints.sm}) {
        font-size: 42px;
        line-height: 49px;
        margin-top: 0;
        min-width: auto;
    }
`

const DescriptionText = styled.p`
    max-width: 515px;
    font-size: 32px;
    line-height: 37px;
    font-style: normal;
    margin-top: 64px;
    @media (max-width: ${breakpoints.lg}) {
    max-width: 639px;
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    margin-top: 6px;
  }
  @media (max-width: ${breakpoints.sm}) {
        font-size: 24px;
        line-height: 28px;
        max-width: 322px;
    }
`

const SeeAllBtn = styled.button`
    margin-top: 64px;
    background-color: #73D677;
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
    border-radius: 11px;
    width: 231px;
    height: 66px;
    text-align: center;
    font-size: 23px;
    line-height: 27px;
    color:  #212121;
    border: none;
    padding: 17px 22px;
    cursor: pointer;
    font-weight: 700;
    @media (max-width: ${breakpoints.lg}) {
    margin-top: 33px;
    }
    @media (max-width: ${breakpoints.sm}) {
        margin-top: 40px;
        width: 312px;
        height: 55px;
        padding: 12px 16px;
    }

`

const ContainerLeft = styled.div`
    @media (max-width: ${breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const BannerContainer = styled.div`
    width: 100%;
    margin-top: -70px;
    @media (max-width: ${breakpoints.lg}) {
        order: -1;
        margin-top: 0;
  }
`

export const MainScreen = () => {
    return (<>
        <MainContainer>
            <>
                <ContainerLeft>
                    <FindPokemonText>
                        <span style={{ fontWeight: 700 }}>Find</span> all your favourite <span style={{ fontWeight: 700 }}>Pokemons</span>
                    </FindPokemonText>
                    <DescriptionText>
                        You can know the type of Pokemon, its strengths, disadvantages and abilities
                    </DescriptionText>
                    <Link to="/pokedex">
                        <SeeAllBtn>
                            See pokemons
                        </SeeAllBtn>
                    </Link>
                </ContainerLeft>
                <BannerContainer>
                    <PokeBanner />
                </BannerContainer></>
        </MainContainer>
    </>
    )
}