import React from "react"

import { Container } from "./styles.js"
import Language from "../language"
import Menu from "../menu"

const Header = () => {
  return (
    <Container>
      <Language />
      <Menu />
    </Container>
  )
}

export default Header
