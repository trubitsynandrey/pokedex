import React from 'react'
import styled from 'styled-components'


const LoaderWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoaderItself = styled.div`
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #F5DB13; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    border-bottom: 16px solid #F5DB13;
    @keyframes spin {
        0% { transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
    }
`
export const Loader = () => {
    return (
        <LoaderWrapper>
            <LoaderItself />
        </LoaderWrapper>
    )
}

