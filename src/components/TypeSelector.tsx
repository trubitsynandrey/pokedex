import React from 'react'
import styled from 'styled-components'
import { ArrowFilter } from '../icons/ArrowFilter'
import { usePokeContext } from './PokeContext'

const IconWrapper = styled.div`
    position: absolute;
    right: 6px;
    top: -2px;
    width: 7px;
`

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

const TypeSelectorContainer = styled.label` 
    position: relative;
    font-family: 'Source Sans Pro', sans-serif;
    display: inline-block;
    background-color: #F2F2F2;
    border-radius: 4px;
    margin-bottom: 80px;
    width: 135px;
    height: 20px;    
    text-align: center;
    input: {
        z-index: 50;
    }
    input[type="checkbox"] {
        display: none;
    }
    input[type="checkbox"]:checked + ${TypeSelectorWindow} {
            display: flex;
        }
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
export type typesUnion = typeof types[number]
export type filterType = Record<typesUnion, boolean>


const types = [
    "bug",
    "dark",
    "dragon",
    "electric",
    "normal",
    "rock",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "poison",
    "steel",
    "ghost",
    "grass",
    "ground",
    "ice",
    "psychic",
    "water",
] as const;

export const objectFilterTypes: filterType = types.reduce((initialVal, curr) =>
    ({ ...initialVal, [curr]: false }), {} as filterType)
console.log(objectFilterTypes, 'filter')

export const TypeSelector = () => {
    const { filterTypes ,setFilterTypes } = usePokeContext()
    const onChangeFilter = (item: typesUnion) => {
       setFilterTypes(prev => ({
        ...prev, [item]: !filterTypes[item]
       }))
    }
    console.log(filterTypes, 'filter')
return (
    <TypeSelectorContainer>
        <input type="checkbox" />
        Tipo
        {/* <IconWrapper>
                <ArrowFilter />
            </IconWrapper> */}
        <TypeSelectorWindow>
            {types.map((item, idx) =>
            (<TypeCheckboxWrapper key={idx}>
                <input type="checkbox" id={item} name={item} checked={filterTypes[item]} onChange={() => onChangeFilter(item)} />
                <span />
                <label htmlFor={item} >{item}</label>
            </TypeCheckboxWrapper>)
            )}
        </TypeSelectorWindow>
    </TypeSelectorContainer >

)
}

