import React from 'react'
import styled from 'styled-components';
import { DarkThemeColor } from '../icons/DarkThemeColor';
import { LightThemeColor } from '../icons/LightThemeColor';

const Knob = styled.span`
    position: absolute;
    cursor: pointer;
    border-radius: 999px;
    right: 2px;
    top: 2px;
    width: 40px;
    height: 40px;
    display: flex;
    background-color: white;
    align-items: center;
    transition: transform 0.3s ease;
    justify-content: center;
`

const SwitchContainer = styled.label`
        position: relative;
        display: inline-block;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 999px;
        box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.24), inset 0px 1px 1px rgba(0, 0, 0, 0.14);
        width: 80px;
        height: 44px;
        input[type="checkbox"] {
            display: none;
        }
        input[type="checkbox"]:checked + ${Knob} {
            transform: translateX(-36px);
        }
`

interface ToggleSwitchProps {
    onToggle: () => void,
    isToggled: boolean,
}


export const ToggleSwitch = ({onToggle, isToggled}: ToggleSwitchProps) => {
    // const [isToggled, setIsToggled] = useState(false);
    // const onToggle = () => setIsToggled(!isToggled)
    return (
        <SwitchContainer>
            <input type="checkbox" onChange={onToggle} />
            <Knob>
                {!isToggled? <LightThemeColor /> : <DarkThemeColor />}
            </Knob>
        </SwitchContainer>
    )
}

