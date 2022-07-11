import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface RangeMobileWrapperProps {
    name: string,
    children: ReactNode,
}

const FilterName = styled.p`
    font-size: 23px;
    line-height: 28px;
    margin-bottom: 19px;
    font-family: 'Rubik', sans-serif;
    text-transform: capitalize;
`

const Wrapper = styled.div`
    border-bottom: 2px solid #F2F2F2;
    padding-bottom: 25px;
    &:last-child {
        border: none;
    } 
`

export const RangeMobileWrapper = ({ name, children }: RangeMobileWrapperProps) => {
    return (
        <Wrapper>
            <FilterName>{name}</FilterName>
            {children}
        </Wrapper>
    )
}

