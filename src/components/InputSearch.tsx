import React, { InputHTMLAttributes, useState } from 'react'
import styled from 'styled-components'
import { initialValue, usePokeContext } from './PokeContext'

const InputWrapper = styled.div<{ isDarkTheme: boolean }>`
    background-color: ${({ isDarkTheme }) => isDarkTheme ? '#4F4F4F' : '#F2F2F2'};
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    border-radius: 40px;
    padding: 0 20px;
    margin-bottom: 20px;
`

const Input = styled.input<{ isDarkTheme: boolean }>`
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
    color: ${({ isDarkTheme }) => isDarkTheme ? '#F2F2F2' : 'rgba(33, 33, 33, 0.8)'};
`

const Suggestions = styled.div<{ isDarkTheme: boolean }>`
    z-index: 9;
    position: absolute;
    background-color: #F2F2F2;
    width: 100%;
    border-radius: 10px;
    max-height: 180px;
    overflow-y: scroll;
    background-color: ${({ isDarkTheme }) => isDarkTheme ? '#4F4F4F' : '#F2F2F2'};
    
`
const SuggestionItem = styled.p`
    padding: 10px;
    transition: 0.2s all ease-in-out;
    text-transform: capitalize;
    &:hover {
      background-color: #F5DB13;
    }
`
const InputSearchWrapper = styled.div`
    position: relative;
`

interface InputSeatchProps extends InputHTMLAttributes<HTMLInputElement> {
    suggestions: string[],
    setName:  React.Dispatch<React.SetStateAction<string>>,
    setSuggestions: React.Dispatch<React.SetStateAction<string[]>>,
}

export const InputSearch = ({setSuggestions ,setName, suggestions, ...rest }: InputSeatchProps) => {
    const { darkTheme, setFilterModals } = usePokeContext()
    const suggestionClickHandler = (name: string) => {
        setName(name)
        setSuggestions([])
    }

    const onFocusModalsClose = () => {
        setFilterModals(initialValue.filterModals)
    }
    return (
        <InputSearchWrapper>
            <InputWrapper isDarkTheme={darkTheme}>
                <Input onFocus={() => onFocusModalsClose()} isDarkTheme={darkTheme} placeholder='Encuentra tu pokémon...' {...rest} />
            </InputWrapper>
            {<Suggestions isDarkTheme={darkTheme}>
                {suggestions.map((item, idx) => <SuggestionItem key={idx} onClick={() => suggestionClickHandler(item)}>{item}</SuggestionItem>)}
            </Suggestions>}
        </InputSearchWrapper>
    )
}

