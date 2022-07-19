import { NormalizerOptions } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components'
import { filterType, typesUnion } from '../../types'

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

interface TypeCheckboxProps {
    item: typesUnion,
    onChange: () => void,
    typesArr: filterType,

}

export const TypeCheckbox = ({ item, onChange, typesArr }: TypeCheckboxProps) => {
    const onChangeHandler = (e:React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault()
        onChange()
    }
    return (
        <TypeCheckboxWrapper>
            <input type="checkbox" id={item} name={item} checked={typesArr[item]} onChange={onChange} />
            <span 
            onClick={onChangeHandler}
            />
            <label htmlFor={item} >{item}</label>
        </TypeCheckboxWrapper>)
}
