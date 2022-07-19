import styled from 'styled-components'
import { ContainerSelect } from './ContainerSelect'
import { TypesModal } from './TypesModal'

const TypeSelectorWindow = styled.div`
    display: none;
    margin-top: 15px;
    transition: all 0.2s ease-in-out;
    
    background-color: #F2F2F2;
    flex-direction: column;
    position: absolute;
    width: auto;
    z-index: 2;
    padding: 14px 32px;
    border-radius: 8px;
    text-align: left;
`

export const TypeSelector = () => {
    return (
        <ContainerSelect name={'type'}>
            <TypeSelectorWindow>
                <TypesModal />  
            </TypeSelectorWindow>
            
        </ContainerSelect >

    )
}

