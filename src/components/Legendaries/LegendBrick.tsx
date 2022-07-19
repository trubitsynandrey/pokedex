
import { forwardRef, ReactElement, useState } from 'react'
import { breakpoints } from 'src/styles/breakpoints'
import styled from 'styled-components'
import { useIsMobile } from '../isMobileHook'
import { usePokeContext } from '../PokeContext'
import { LabeledProgressBar } from '../UI/LabeledProgressBar'
import { Carousel } from './Carousel'

const BigText = styled.p`
    font-size: 72px;
    line-height: 84px;
    letter-spacing: 4px;
    text-transform: capitalize;
    @media (max-width: ${breakpoints.md}) {
      font-size: 62px;
      line-height: 72px;
  }
    @media (max-width: ${breakpoints.sm}) {
      font-size: 44px;
      line-height: 51px;
  }
`

const HeaderLegend = styled(BigText) <{ darkTheme: boolean }>`
    &::after {
      margin-top: 19px;
       content: "";
       display: block;
       width: 75%;
       background-color: ${({ darkTheme }) => darkTheme ? 'white' : '#212121'};
       height: 2px;
    }
    padding-bottom: 20px;
    font-weight: 400;
    margin-bottom: 50px;
    @media (max-width: ${breakpoints.sm}) {
      margin-bottom: 20px;
  }
`
const ImgLegend = styled.img`
  width: 380px;
  height: 420px;
  @media (max-width: ${breakpoints.md}) {
    width: 283px;
  height: 316px;
  }
  @media (max-width: ${breakpoints.sm}) {
    width: 252px;
  height: 283px;
  margin: 0 auto;
  }
  
`
const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
  }
`
const Description = styled.div`
  max-width: 405px;
`

const DescriptionText = styled.div`
font-family: 'Source Sans Pro';
  font-size: 16px;
  line-height: 20px;
  @media (max-width: ${breakpoints.sm}) {
    font-size: 14px;
    line-height: 18px;
  } 
`

const BarsWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`

const BarsStackWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
interface LegendBrickProps {
    data: any,
    title: string,
}

export const LegendBrick = ({data, title}: LegendBrickProps): ReactElement => {
    const [slide, setSlide] = useState<number>(0)
    const { darkTheme } = usePokeContext()
    const isTablet = useIsMobile(breakpoints.md)
    return (
        <div>
            <HeaderLegend darkTheme={darkTheme}>{title}</HeaderLegend>
            <DescriptionWrapper>
                <ImgLegend src={data[slide]?.sprites?.other.dream_world.front_default} />
                <Description>
                    <BigText>{data[slide]?.name}</BigText>
                    <p>{data[slide]?.flavorText}</p>
                    <BarsWrapper key={data[slide]?.id}>
                        <BarsStackWrapper>
                            <LabeledProgressBar
                                style={{
                                    background: 'linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)'
                                }}
                                labelName={'Health Points'}
                                stat={data[slide]?.stats[0].base_stat}
                                styleContainer={{ marginRight: '57px' }}
                                maxStat={data[slide]?.higherStats.hp}
                            />
                            <LabeledProgressBar
                                style={{ background: 'linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)' }}
                                labelName={'Experience'}
                                stat={data[slide]?.base_experience}
                                maxStat={data[slide]?.higherStats.experience}
                            />
                        </BarsStackWrapper>
                        <BarsStackWrapper>
                            <LabeledProgressBar
                                style={{
                                    background: 'linear-gradient(180deg, #D93E30 42.19%, #732119 100%)'
                                }}
                                labelName={'Attack'}
                                stat={data[slide]?.stats[1].base_stat}
                                styleContainer={{ marginRight: '57px' }}
                                maxStat={data[slide]?.higherStats.attack}
                            />
                            <LabeledProgressBar
                                style={{ background: 'linear-gradient(180deg, #009FFD 42.19%, #2A2A72 100%)' }}
                                labelName={'Defense'}
                                stat={data[slide]?.stats[2].base_stat}
                                maxStat={data[slide]?.higherStats.defense}
                            />
                        </BarsStackWrapper>
                        {!isTablet && <BarsStackWrapper>
                            <LabeledProgressBar
                                style={{
                                    background: 'linear-gradient(180deg, #732119 42.19%, #D93E30 100%)'
                                }}
                                labelName={'Special Attack'}
                                stat={data[slide]?.stats[3].base_stat}
                                styleContainer={{ marginRight: '57px' }}
                                maxStat={data[slide]?.higherStats["special-attack"]}
                            />
                            <LabeledProgressBar
                                style={{ background: 'linear-gradient(180deg, #2A2A72 42.19%, #009FFD 100%)' }}
                                labelName={'Special Defense'}
                                stat={data[slide]?.stats[4].base_stat}
                                maxStat={data[slide]?.higherStats["special-defense"]}
                            />
                        </BarsStackWrapper>}
                    </BarsWrapper>
                </Description>
            </DescriptionWrapper>


            <Carousel setSlide={setSlide} />
        </div>
    )
}

