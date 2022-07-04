import React from 'react'
import styled from 'styled-components'

const DotFlashing = styled.div`
    position: relative;
  width: 16px;
  height: 16px;
  border-radius: 99px;
  background-color: #F5DB13;
  color: #F5DB13;
  animation: dotFlashing 1s infinite linear alternate;
  animation-delay: .3s;

  &:before, &:after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
}

&:before {
  left: -32px;
  width: 16px;
  height: 16px;
  border-radius: 99px;
  background-color: #F5DB13;
  color: #F5DB13;
  animation: dotFlashing 1s infinite alternate;
  animation-delay: 0s;
}

&:after {
  left: 32px;
  width: 16px;
  height: 16px;
  border-radius: 99px;
  background-color: #F5DB13;
  color: #F5DB13;
  animation: dotFlashing 1s infinite alternate;
  animation-delay: 1s;
}

@keyframes dotFlashing {
  0% {
    background-color: #F5DB13;
  }
  50%,
  100% {
    background-color: #ebe6ff;
  }
}
`

export const PaginationLoader = () => {
    return (
        <div>
            <DotFlashing />
        </div>
    )
}

