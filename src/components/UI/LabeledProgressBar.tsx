import React from 'react'
import { breakpoints } from 'src/styles/breakpoints'
import { valueToPercentage } from 'src/utils'
import styled, { CSSProperties } from 'styled-components'

const WhiteBox = styled.div`
    border-radius: 16px;
    background-color: #FDFDFD;
    display: flex;
    flex-direction: column;
    padding: 10px;
    @media (max-width: ${breakpoints.sm}) {
        padding: 20px;
    }
`

const ProgressWrapper = styled(WhiteBox)`
    flex-direction: row;
    justify-content: space-between; 
    gap: 27px;
    @media (max-width: ${breakpoints.sm}) {
        flex-direction: column;
    }
`

const ProgressBarContainer = styled.div`
    height: 6px;
    background-color: #F6F7F9;
    border-radius: 99px;
    position: relative;
    overflow: hidden;
    width: 100%;
`

const ProgressBar = styled.div<{ percentage: string }>`
    position: absolute;
    background-color: black;
    width: ${({ percentage }) => percentage};
    height: inherit;
`

interface LabeledProgressBar {
    labelName: string,
    stat: number,
    style: CSSProperties,
    styleContainer?: CSSProperties,
}

export const LabeledProgressBar = ({labelName, stat, style, styleContainer }: LabeledProgressBar) => {
    return (
        <div style={{flex: 1, ...styleContainer}}>
            <p>{labelName}</p>
            <p style={{ fontWeight: '700' }}>{stat}</p>
            <ProgressBarContainer>
                <ProgressBar 
                    percentage={valueToPercentage(stat)} 
                    // style={{ background: 'linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)' }} />
                    style={style} />
            </ProgressBarContainer>
        </div>
    )
}

