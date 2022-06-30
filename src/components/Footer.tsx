import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../styles/breakpoints'

const FooterContainer = styled.footer`
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 33px;
    font-size: 18px;
    line-height: 21px;
    color: #212121;
    font-weight: 700;
    @media (max-width: ${breakpoints.lg}) {
      padding-bottom: 23px;
  }
  @media (max-width: ${breakpoints.sm}) {
      flex-direction: column-reverse;
      align-items: center;
  }
`

export const Footer = () => {
  return (
    <FooterContainer>
        <span>Made with ❤️ </span>
        <span>github</span>
    </FooterContainer>
  )
}

