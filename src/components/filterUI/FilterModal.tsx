import React from 'react'
import styled from 'styled-components'
import { CloseIcon } from '../../icons/CloseIcon'
import { types, typesUnion } from '../../types'
import { usePokeContext } from '../PokeContext'
import { ModalContainer } from '../UI/ModalContainer'
import { RangeMobileWrapper } from './RangeMobileWrapper'
import { RangeWindow } from './RangeSelectorWindow'
import { TypeCheckbox } from './TypeCheckbox'

const ModalInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: #F5DB13;
    height: auto;
    width: 100%;
    z-index: 5;
    border-radius: 0px 0px 16px 16px;
    box-shadow: 4px 4px 24px rgba(1, 17, 38, 0.2);
    align-items: center;
    gap: 16px;
    padding: 30px 45px;
    transition: 0.2s ease-in-out;   
`

const TypesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 50px;
    row-gap: 8px;
`

const CloseIconWrapper = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`

interface BurgerModalProps {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const FilterModal = ({ setIsModal }: BurgerModalProps) => {
    const { filterTypes, setFilterTypes } = usePokeContext()
    const onChangeFilter = (item: typesUnion) => {
        setFilterTypes(prev => ({
            ...prev, [item]: !filterTypes[item]
        }))
    }
    return (
        <ModalContainer setIsModal={setIsModal}>
            <ModalInner>
                <RangeMobileWrapper name={'type'}>
                    <TypesWrapper>
                        {types.map((item, idx) =>
                            <TypeCheckbox
                                key={idx}
                                item={item}
                                typesArr={filterTypes}
                                onChange={() => onChangeFilter(item)}
                            />
                        )}
                    </TypesWrapper>
                </RangeMobileWrapper>
                <RangeMobileWrapper name={'attack'}>
                    <RangeWindow name={'attack'} />
                </RangeMobileWrapper>
                <RangeMobileWrapper name={'experience'}>
                    <RangeWindow name={'experience'} />
                </RangeMobileWrapper>
                <CloseIconWrapper onClick={() => setIsModal(false)}>
                    <CloseIcon />
                </CloseIconWrapper>
            </ModalInner>
        </ModalContainer>
    )
}

