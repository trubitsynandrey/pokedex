import React from 'react'
import styled from 'styled-components'
import { CloseIcon } from '../../icons/CloseIcon'
import { ModalContainer } from '../UI/ModalContainer'
import { RangeMobileWrapper } from './RangeMobileWrapper'
import { RangeWindow } from './RangeSelectorWindow'
import { TypesModal } from './TypesModal'

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
    z-index: 99;
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
    return (
        <ModalContainer setIsModal={setIsModal}>
            <ModalInner>
                <RangeMobileWrapper name={'type'}>
                    <TypesModal />
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

