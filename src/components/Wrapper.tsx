import React, { ReactNode, FC } from 'react'
import { useMatch } from 'react-router-dom'
import styled from 'styled-components'


const WrapperContainer = styled.div<{isHome: boolean}>`
        background: ${({isHome}) => isHome? 'linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)' : 'white' };
        min-height: 100vh;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
`

export const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
    const match = useMatch('/')
    const isHome = match !== null;
    console.log('matches', match)
    return (
        <WrapperContainer isHome={isHome}>
            {children}
        </WrapperContainer>
    )
}
