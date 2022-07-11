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

const HeaderContainer = styled.header`
    width: 100%;
    position: fixed;
    display: flex;
    height: 93px;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
    background-color: #F5DB13;
    box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
    justify-content: space-between;
    z-index: 2;
    @media (max-width: ${breakpoints.lg}) {
        padding-left: 5%;
        padding-right: 5%;
    }
    @media (max-width: ${breakpoints.sm}) {
        height: 64px;   
    }
`

const Navigation = styled.div`
    display: flex;
    gap: 55px;
    align-items: center;
    @media (max-width: ${breakpoints.lg}) {
        gap: 40px;
    }
`

const NavItem = styled(NavLink)`
    text-decoration: none;
    outline: none;
    color: black;
    font-size: 25px;
    line-height: 29px;
    cursor: pointer;
    height: 29px;
    &.active {
        border-bottom: 3px solid #212121;
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

export const Header = () => {
    const { isNavModal, setIsNavModal } = usePokeContext()

    const isMobile = useIsMobile()
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo />
            </LogoContainer>
            {!isMobile ? <Navigation>
                <NavItem to={'/'}>Home</NavItem>
                <NavItem to={'/pokedex'}>Pokédex</NavItem>
                <NavItem to={'/ledendaries'}>Legendaries</NavItem>
                <NavItem to={'/compare'}>Compare</NavItem>
                <ToggleSwitch />
            </Navigation> : <BurgerMenu onClick={() => setIsNavModal(true)} />}
            {isNavModal && isMobile && <ReactPortal><BurgerModal setIsModal={setIsNavModal} /></ReactPortal>}
        </HeaderContainer>
    )
}

