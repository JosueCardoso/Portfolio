import React from "react"

import { Container } from "./styles"
import { injectIntl } from "gatsby-plugin-intl"

const projects = ({intl}) => {
  return (
    <Container>
      <h1>{intl.formatMessage({ id: "project-menu" })}</h1>
    </Container>
  )
}

export default injectIntl(projects)
