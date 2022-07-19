import { breakpoints } from 'src/styles/breakpoints'
import styled from 'styled-components'
import { Loader } from '../Loader'
import { usePokeContext } from '../PokeContext'
import { LegendBrick } from './LegendBrick'

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

export const Legendaries = () => {
  const { data, isLoading } = usePokeContext()
  if (isLoading) {
    return <Loader />
  }
  return (
    <LegendariesContainer>
      <LegendBrick data={data} title='Legendaries' />

    </LegendariesContainer>
  )
}

