import React, { ReactNode, FC } from 'react'
import { useMatch } from 'react-router-dom'
import styled from 'styled-components'
import { usePokeContext } from './PokeContext'


const WrapperContainer = styled.div<{ isHome: boolean, darkTheme: boolean }>`
        background: ${({ isHome, darkTheme }) => isHome && !darkTheme ?
        'linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)'
        : darkTheme ? '#212121' : 'white'};
        min-height: 100vh;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        color: ${({ darkTheme }) => darkTheme ? 'white' : 'black'};
`

export const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
    const { darkTheme } = usePokeContext()
    const match = useMatch('/')
    const isHome = match !== null;
    return (
        <WrapperContainer darkTheme={darkTheme} isHome={isHome}>
            {children}
        </WrapperContainer>
    )
}
