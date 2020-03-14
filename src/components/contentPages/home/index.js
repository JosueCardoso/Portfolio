import React, { useEffect, useState } from "react"

import {
  Container,
  BarVerticalLeft,
  BarVerticalRight,
  LeftText,
  RightText,
  ContainerTextLeft,
  ContainerTextRight,
} from "./styles"

import { injectIntl } from "gatsby-plugin-intl"

const Home = ({ intl }) => {
  
  const [startEffect,setEffect] = useState(false);

  useEffect(()=>{
      setEffect(true)
  },[])

  return (
    <Container>
      <ContainerTextLeft>
        <LeftText startEffect={startEffect}>Josué Cardoso</LeftText>
        <BarVerticalLeft />
      </ContainerTextLeft>

      <ContainerTextRight>
        <BarVerticalRight />
        <RightText startEffect={startEffect}>Software Developer</RightText>
      </ContainerTextRight>
    </Container>
  )
}

export default injectIntl(Home)
