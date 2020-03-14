import React from "react"

import { Container } from "./styles"
import { injectIntl } from "gatsby-plugin-intl"

const about = ({intl}) => {
  return (
    <Container>
      <h1>{intl.formatMessage({ id: "about-menu" })}</h1>
    </Container>
  )
}

export default injectIntl(about)
