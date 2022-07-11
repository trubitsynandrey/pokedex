import React, { useState } from 'react'
import styled from 'styled-components'
import { rangesType } from '../../types'
import { usePokeContext } from '../PokeContext'
import { ContainerSelect } from './ContainerSelect'


const RangeSelectorWindow = styled.div`
    display: none;
    margin-top: 15px;
    transition: all 0.2s ease-in-out;
    
    background-color: #F2F2F2;
    flex-direction: column;
    /* align-items: center; */
    position: absolute;
    width: 285px;
    height: 105px;
    z-index: 50;
    overflow-y: scroll;
    padding-top: 13px;
    padding-bottom: 14px;
    padding-left: 12px;
    padding-right: 22px;
    border-radius: 8px;
    text-align: left;
    overflow: hidden;
`

const InputWrapper = styled.div`
    background-color: #F6F7F9;
    box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
    border-radius: 16px;
    width: 100px;
    height: 20px;
    padding-left: 12px;
    padding-top: 2px;
    padding-bottom: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > input {
        background-color: transparent;
        border: none;
        -webkit-appearance: none;
        -ms-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none;
        width: 100%;
        font-family: 'Source Sans Pro',sans-serif;
    }
`

const InputLabel = styled.label`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    padding-left: 10px;
    margin-bottom: 6px;
`

const Dash = styled.div`
    background-color: #212121;
    width: 16px;
    height: 3px;
    border-radius: 99px;
`
const ApplyButton = styled.button`
    background-color: #73D677;
    border-radius: 99px;
    height: 19px;
    text-align: center;
    font-size: 13px;
    line-height: 15px;
    color:  #212121;
    border: none;
    padding: 2px 20px;
    cursor: pointer;
    align-self: flex-end;
    margin-top: 20px;
`

export const RangeSelector = ({ name }: { name: rangesType, }) => {
    const { filterRanges, setFilterRanges } = usePokeContext()
    const [filterValue, setFilterValue] = useState<{min: number, max: number}>({
        min: 0,
        max: 1000,
    })
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(1000)
    const valueContextHandler = (nameRange: rangesType) => {
        setFilterRanges(prev => ({
            ...prev, [nameRange]: {
            //    ...filterValue,
               min: minValue,
               max: maxValue
            }
        }))
    }
    
    const setOwnFilterState = (value: string, edge: "min" | "max") => {
        setFilterValue(prev => ({
            ...prev, [edge]: +value
        }))
    }
    console.log(filterRanges, 'ranges')
    return (
        <ContainerSelect name={name}>
            <RangeSelectorWindow>
                <div>
                    <div style={{ display: 'flex', gap: '110px' }}>
                        <InputLabel htmlFor={"from"}>From</InputLabel>
                        <InputLabel htmlFor={"to"}>To</InputLabel>

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <InputWrapper>
                            <input
                                type="number"
                                id={"from"}
                                name={"from"}
                                min="0"
                                max="999"
                                defaultValue={0}
                                onChange={(e) => setMinValue(+e.target.value)}
                            />
                        </InputWrapper>
                        <Dash />
                        <InputWrapper>
                            <input
                                type="number"
                                id={"to"} name={"to"}
                                min="1"
                                max="1000"
                                defaultValue={1000}
                                onChange={(e) => setMaxValue(+e.target.value)} />
                        </InputWrapper>
                    </div>
                </div>
                <ApplyButton onClick={(e) => valueContextHandler(name)}>Apply</ApplyButton>
            </RangeSelectorWindow>
        </ContainerSelect >

    )
}
