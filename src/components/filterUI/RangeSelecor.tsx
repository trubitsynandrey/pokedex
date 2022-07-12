import React from 'react'
import { rangesType } from '../../types'
import { ContainerSelect } from './ContainerSelect'
import { RangeWindow } from './RangeSelectorWindow'

export const RangeSelector = ({ name }: { name: rangesType, }) => {
    return (
        (<ContainerSelect name={name}>
            <RangeWindow name={name}/>
        </ContainerSelect >)

    )
}
