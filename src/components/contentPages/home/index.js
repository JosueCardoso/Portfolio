import React, { useEffect, useState } from "react"

import {
  Container,
  ContainerTitle,
  ContainerSocial,
  BarVertical,
  LeftText,
  RightText,
  ContainerTextLeft,
  ContainerTextRight,
  SvgIcon
} from "./styles"

import { injectIntl } from "gatsby-plugin-intl"

import FacebookIcon from "./icons/facebook.js"
import GithubIcon from "./icons/github.js"
import InstagramIcon from "./icons/instagram.js"
import LinkedinIcon from "./icons/linkedin.js"

const Home = ({ intl }) => {
  
  const [startEffect,setEffect] = useState(false);

  useEffect(()=>{
      setEffect(true)
  },[])

  return (
    <Container>
      <ContainerTitle>
        <ContainerTextLeft>
          <LeftText startEffect={startEffect}>JOSUÉ CARDOSO</LeftText>
          <BarVertical />
        </ContainerTextLeft>

        <ContainerTextRight>
          <BarVertical />
          <RightText startEffect={startEffect}>SOFTWARE DEVELOPER</RightText>
        </ContainerTextRight>
      </ContainerTitle>

      <ContainerSocial>
      <SvgIcon role="img" viewBox="0 0 24 24">
          <LinkedinIcon/>
        </SvgIcon>
        <SvgIcon role="img" viewBox="0 0 24 24">
          <GithubIcon/>
        </SvgIcon>
        <SvgIcon role="img" viewBox="0 0 24 24">
          <FacebookIcon/>
        </SvgIcon>
        <SvgIcon role="img" viewBox="0 0 24 24">
          <InstagramIcon/>
        </SvgIcon>
      </ContainerSocial>
      
    </Container>    
  )
}

export default injectIntl(Home)
