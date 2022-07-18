import React, { useState } from 'react'
import { breakpoints } from 'src/styles/breakpoints'
import styled from 'styled-components'
import { useIsMobile } from '../isMobileHook'
import { Loader } from '../Loader'
import { usePokeContext } from '../PokeContext'
import { LabeledProgressBar } from '../UI/LabeledProgressBar'
import { Carousel } from './Carousel'

const LegendariesContainer = styled.div`
    padding-top: 120px;
    padding-left: 20px;
    flex: 1;
    padding-left: 10%;
    padding-right: 10%;
    @media (max-width: ${breakpoints.lg}) {
        padding-left: 5%;
        padding-right: 5%;
    }
    @media (max-width: ${breakpoints.sm}) {
        padding-top: 90px;
    }

`

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

const HeaderLegend = styled(BigText)`
    border-bottom: 1px solid #212121;
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

export const Legendaries = () => {
  const [slide, setSlide] = useState<number>(0)
  const { data, isLoading } = usePokeContext()
  const isTablet = useIsMobile(breakpoints.md)
  console.log(data[0], 'first')
  if (isLoading) {
    return <Loader  />
  }
  return (
    <LegendariesContainer>

      <HeaderLegend>Legendaries</HeaderLegend>
      <DescriptionWrapper>
        <ImgLegend src={data[slide]?.sprites?.other.dream_world.front_default} />
        <Description>
          <BigText>{data[slide]?.name}</BigText>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
          <BarsWrapper>
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
              key={data[slide]?.name}
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
    </LegendariesContainer>
  )
}

