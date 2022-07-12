import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { usePokeContext } from './PokeContext'

const InputWrapper = styled.div<{isDarkTheme: boolean}>`
    background-color: ${({isDarkTheme}) => isDarkTheme? '#4F4F4F' : '#F2F2F2'};
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    border-radius: 40px;
    padding: 0 20px;
    margin-bottom: 20px;
`

const Input = styled.input<{isDarkTheme: boolean}>`
    border: none;
    width: 100%;
    background-color: inherit;
    border: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    font-size: 16px;
    line-height: 20px;
    font-family: 'Source Sans Pro', sans-serif;
    color: ${({isDarkTheme}) => isDarkTheme? '#F2F2F2' : 'rgba(33, 33, 33, 0.8)'};
`

interface InputSeatchProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const InputSearch = ({...rest}: InputSeatchProps) => {
    const { darkTheme } = usePokeContext()
    return (
        <InputWrapper isDarkTheme={darkTheme}>
            <Input isDarkTheme={darkTheme} placeholder='Encuentra tu pokémon...' {...rest}/>
        </InputWrapper>
    )
}

