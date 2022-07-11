import React from 'react'
import { rangesType } from '../../types'
import { useIsMobile } from '../isMobileHook'
import { ContainerSelect } from './ContainerSelect'
import { RangeWindow } from './RangeSelectorWindow'

export const RangeSelector = ({ name }: { name: rangesType, }) => {

    const isMobile = useIsMobile()
    return (
        (<ContainerSelect name={name}>
            <RangeWindow name={name}/>
        </ContainerSelect >)

    )
}
