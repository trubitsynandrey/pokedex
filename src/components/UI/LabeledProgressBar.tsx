import { truncate } from 'fs/promises'
import React, { useEffect, useRef, useState } from 'react'
import { breakpoints } from 'src/styles/breakpoints'
import { valueToPercentage } from 'src/utils'
import styled, { CSSProperties } from 'styled-components'
import { setConstantValue } from 'typescript'

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

const ProgressBar = styled.div<{ percentage?: string }>`
    position: absolute;
    background-color: black;
    width: 0%;
    height: inherit;
    transition: all 0.4 ease-in;
`

interface LabeledProgressBarProps {
    labelName: string,
    stat: number,
    style: CSSProperties,
    styleContainer?: CSSProperties,
    maxStat: number,
}

export const LabeledProgressBar = ({ labelName, stat, style, styleContainer, maxStat }: LabeledProgressBarProps) => {
    const [progressNow, setProgressNow] = useState(0)

    useEffect(() => {
        let time = 25;
        if (labelName === 'Experience') {
            time = 10
        }
        const interval = setInterval(() => {
            setProgressNow(prev => {
                const newValue = prev + 3;
                if (newValue >= stat) {
                    clearInterval(interval)
                }
                return newValue
            })
        }, time)
    return  () => clearInterval(interval)
    }, [])
    return (
        <div style={{ flex: 1, ...styleContainer }}>
            <p>{labelName}</p>
            <p style={{ fontWeight: '700' }}>{stat}</p>
            <ProgressBarContainer>
                <ProgressBar
                    // percentage={valueToPercentage(progressNow, maxStat)}
                    style={{ width: valueToPercentage(progressNow, maxStat), ...style }} 
                />
            </ProgressBarContainer>
        </div>
    )
}

