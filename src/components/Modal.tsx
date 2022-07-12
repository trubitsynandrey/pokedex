import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Logo } from '../icons/Logo'
import { usePokeContext } from './PokeContext'
import { ToggleSwitch } from './ToggleSwitch'
import { ModalContainer } from './UI/ModalContainer'

const ModalBack = styled.div`
    position: absolute;
    width: 100vh;
    height: 100vh;
    background-color: #212121;
    opacity: 0.5;
    right: 0;
    top: 0;
`
const ModalInner = styled.div<{isDarkTheme: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: ${({isDarkTheme}) => isDarkTheme? '#4F4F4F' : '#F5DB13'};
    height: 400px;
    width: 100%;
    z-index: 5;
    border-radius: 0px 0px 16px 16px;
    box-shadow: 4px 4px 24px rgba(1, 17, 38, 0.2);
    align-items: center;
    gap: 16px;
    padding: 38px 0px;
    transition: 0.2s ease-in-out;
    & > a {
        color: ${({isDarkTheme}) => isDarkTheme? 'white' : 'black'};
    }
    & > a.active {
        border-bottom: 3px solid ${({ isDarkTheme }) => isDarkTheme ? '#EDC607' : '#212121'};
        color: ${({ isDarkTheme }) => isDarkTheme ? '#EDC607' : 'black'};
    }
`
const LogoContainer = styled.div`
width: 138px;
height: 51px;
& > svg {
    width: 100%;
    height: 100%;
}
`

const NavItem = styled(NavLink)`
    text-decoration: none;
    outline: none;
    color: black;
    font-size: 27px;
    line-height: 32px;
    cursor: pointer;
    height: 32px;
    &.active {
        border-bottom: 3px solid #212121;
    }
`

interface BurgerModalProps {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const BurgerModal = ({ setIsModal }: BurgerModalProps) => {
    const { darkTheme, setDarkTheme } = usePokeContext()
    const setDark = () => {
        setDarkTheme(prev => !prev)
    }
    return (
        <ModalContainer setIsModal={setIsModal}>
            <ModalInner isDarkTheme={darkTheme}>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/pokedex">Pokédex</NavItem>
                <NavItem to="/ledendaries">Legendaries</NavItem>
                <NavItem to="/compare">Compare</NavItem>
                <ToggleSwitch onToggle={setDark} isToggled={false} />
            </ModalInner>
        </ModalContainer>
    )
}

