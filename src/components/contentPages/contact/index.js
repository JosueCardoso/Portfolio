import React from "react"

import { Container } from "./styles"
import { injectIntl } from "gatsby-plugin-intl"

const contact = ({intl}) => {
  return (
    <Container>
      <h1>{intl.formatMessage({ id: "contact-menu" })}</h1>
    </Container>
  )
}

export default injectIntl(contact)
