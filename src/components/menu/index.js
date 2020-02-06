import React from "react"
import { connect } from "react-redux"
import { injectIntl } from "gatsby-plugin-intl"

import * as Actions from "../../store/actions"
import { Container, CurrentSection, Burguer } from "./styles"
import Nav from "./nav"

const menu = ({ menuSelected, isVisible, dispatch, intl }) => {
  return (
    <Container>
      <CurrentSection> {intl.formatMessage({ id: menuSelected })} </CurrentSection>
      <Burguer open={isVisible} onClick={() => dispatch(Actions.SetVisible(!isVisible))}>
        <div />
        <div />
        <div />
      </Burguer>
      <Nav />
    </Container>
  )
}

export default connect(state => ({
  menuSelected: state.menuSelected,
  isVisible: state.isVisible,
}))(injectIntl(menu))
