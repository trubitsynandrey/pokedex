import React, { ReactNode } from 'react'
import styled, { CSSProperties } from 'styled-components'


const ModalBack = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #212121;
    opacity: 0.5;
    top: 0;
    left: 0;
`

interface BurgerModalProps {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
    children: ReactNode,
    style?: CSSProperties,
}
export const ModalContainer = ({ setIsModal, children, style }: BurgerModalProps) => {
    return (
        <>
            {children}
            <ModalBack onClick={() => setIsModal(false)} style={style} />
        </>
    )
}


