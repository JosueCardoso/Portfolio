import React from "react"

import { Container } from "./styles"
import {injectIntl} from "gatsby-plugin-intl"

const stack = ({intl}) => {
  return (
    <Container>
      <h1>{intl.formatMessage({ id: "stack-menu" })}</h1>
    </Container>
  )
}

export default injectIntl(stack)
