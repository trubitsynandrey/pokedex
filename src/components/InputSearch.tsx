import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
    background-color: #F2F2F2;
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    border-radius: 40px;
    padding: 0 20px;
    margin-bottom: 20px;
`

const Input = styled.input`
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
    color:  rgba(33, 33, 33, 0.8);
`

interface InputSeatchProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const InputSearch = ({...rest}: InputSeatchProps) => {
    return (
        <InputWrapper>
            <Input placeholder='Encuentra tu pokémon...' {...rest}/>
        </InputWrapper>
    )
}

