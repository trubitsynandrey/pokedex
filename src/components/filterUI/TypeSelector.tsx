import React from 'react'
import styled from 'styled-components'
import { types, typesUnion } from '../../types'
import { usePokeContext } from '../PokeContext'
import { ContainerSelect } from './ContainerSelect'

const TypeSelectorWindow = styled.div`
    display: none;
    margin-top: 15px;
    transition: all 0.2s ease-in-out;
    
    background-color: #F2F2F2;
    flex-direction: column;
    /* align-items: center; */
    position: absolute;
    width: inherit;
    z-index: 50;
    max-height: 150px;
    overflow-y: scroll;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 32px;
    border-radius: 8px;
    text-align: left;
`

const TypeCheckboxWrapper = styled.div`
    position: relative;
    z-index: 5;
    cursor: pointer;
    display: flex;
    & > input[type="checkbox"] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    };
    & > input[type="checkbox"]:checked + span {
        background-color: #D93E30;
    }
    & > span {
        position: absolute;
        top: 3px;
        left: 0;    
        height: 12px;   
        width: 12px;
        background-color: transparent;
        border: 1px solid #212121;
    }
    & > label {
        margin-left: 18px;
        flex: 1;
        cursor: pointer;
        text-transform: capitalize;
        -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
    }

`

export const TypeSelector = () => {
    const { filterTypes, setFilterTypes } = usePokeContext()
    const onChangeFilter = (item: typesUnion) => {
        setFilterTypes(prev => ({
            ...prev, [item]: !filterTypes[item]
        }))
    }
    console.log(filterTypes, 'filter')
    return (
       <ContainerSelect name={'type'}>
            <TypeSelectorWindow>
                {types.map((item, idx) =>
                (<TypeCheckboxWrapper key={idx}>
                    <input type="checkbox" id={item} name={item} checked={filterTypes[item]} onChange={() => onChangeFilter(item)} />
                    <span />
                    <label htmlFor={item} >{item}</label>
                </TypeCheckboxWrapper>)
                )}
            </TypeSelectorWindow>
        </ContainerSelect >

    )
}

