import React from 'react'
import styled from 'styled-components'
import { Logo } from '../icons/Logo'
import { ToggleSwitch } from './ToggleSwitch'
import { breakpoints } from '../styles/breakpoints'
import { BurgerMenu } from '../icons/Burger'
import { BurgerModal } from './Modal'
import { usePokeContext } from './PokeContext'
import { Link, NavLink } from 'react-router-dom'
import { useIsMobile } from './isMobileHook'
import { ReactPortal } from './UI/CreatePortalFunc'

const HeaderContainer = styled.header<{ isDarkTheme: boolean }>`
    width: 100%;
    position: fixed;
    display: flex;
    height: 93px;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
    background-color: ${({ isDarkTheme }) => isDarkTheme ? '#4F4F4F' : '#F5DB13'};
    box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
    justify-content: space-between;
    z-index: 5;
    @media (max-width: ${breakpoints.lg}) {
        padding-left: 5%;
        padding-right: 5%;
    }
    @media (max-width: ${breakpoints.sm}) {
        height: 64px;   
    }
    transition: 0.2s ease-in-out;
`

const Navigation = styled.div<{ isDarkTheme: boolean }>`
    position: relative;
    display: flex;
    gap: 55px;
    & > a {
        color: ${({ isDarkTheme }) => isDarkTheme ? 'white' : 'black'};
    }
    
    & > a.active {
        color: ${({ isDarkTheme }) => isDarkTheme ? '#EDC607' : 'black'};
    }
    & > a.active::after {
       content: "";
       display: block;
       width: 80%;
       background-color: ${({ isDarkTheme }) => isDarkTheme ? '#EDC607' : '#212121'};
       height: 4px;
    }
    align-items: center;
    @media (max-width: ${breakpoints.lg}) {
        gap: 40px;
    }
`

const NavItem = styled(NavLink)`
    text-decoration: none;
    outline: none;
    font-size: 25px;
    line-height: 29px;
    cursor: pointer;
    height: 29px;
    &.active {
        /* border-bottom: 3px solid #212121; */
    }
    @media (max-width: ${breakpoints.lg}) {
        font-size: 19px;
        line-height: 22px;
  }
`

const LogoContainer = styled(Link)`
width: 158px;
height: 63px;
& > svg {
    width: 100%;
    height: 100%;
}
     @media (max-width: ${breakpoints.md}) {
        width: 121px;
        height: 45px;   
     }
     @media (max-width: ${breakpoints.sm}) {
        width: 58px;
        height: 22px;   
     }
`

const BurgerMenuWrapper = styled.div<{isDarkTheme: boolean}>`
& > svg > rect {
    fill: ${({ isDarkTheme }) => isDarkTheme ? 'white' : '#212121'};;
}
`

export const Header = () => {
    const { isNavModal, setIsNavModal, darkTheme, setDarkTheme } = usePokeContext()
    const setDark = () => {
        setDarkTheme(prev => !prev)
    }
    const isMobile = useIsMobile()
    return (
        <HeaderContainer isDarkTheme={darkTheme}>
            <LogoContainer to="/">
                <Logo />
            </LogoContainer>
            {!isMobile ? <Navigation isDarkTheme={darkTheme}>
                <NavItem to={'/'}>Home</NavItem>
                <NavItem to={'/pokedex'}>Pokédex</NavItem>
                <NavItem to={'/legendaries'}>Legendaries</NavItem>
                <NavItem to={'/compare'}>Compare</NavItem>
                <ToggleSwitch onToggle={setDark} isToggled={darkTheme} />
            </Navigation> : 
            <BurgerMenuWrapper isDarkTheme={darkTheme}> 
                    <BurgerMenu onClick={() => setIsNavModal(true)} />
            </BurgerMenuWrapper>}
            {isNavModal && isMobile && <ReactPortal><BurgerModal setIsModal={setIsNavModal} /></ReactPortal>}
        </HeaderContainer>
    )
}

