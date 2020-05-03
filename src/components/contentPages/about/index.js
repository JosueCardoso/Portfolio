import React, { useEffect, useState } from "react"

import { injectIntl } from "gatsby-plugin-intl"
import { Container, ContainerPhoto, ContainerText, Title, Text } from "./styles"
import Image from "../../image"

const About = ({ intl }) => {
  const [startEffectTest,setEffectTest] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setEffectTest(true)
    }, 200);
    return () => clearTimeout(timer);
  },[])

  return (
    <Container>      
      <ContainerPhoto startEffect={startEffectTest}>
        <Image/>
      </ContainerPhoto>

      <ContainerText startEffect={startEffectTest}>
        <Title> Josué Cardoso </Title>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </ContainerText>
    </Container>
  )
}

export default injectIntl(About)
