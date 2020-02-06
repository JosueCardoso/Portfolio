import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { connect } from "react-redux"

import { Container, List, ItemList } from "./styles"
import * as Actions from "../../../store/actions"

const nav = ({ dispatch, IsVisible, intl }) => {
  const menuItems = [
    { menuContent: "home-menu" },
    { menuContent: "about-menu" },
    { menuContent: "projects-menu" },
    { menuContent: "stack-menu" },
    { menuContent: "contact-menu" },
  ]
  return (
    <Container IsVisible={IsVisible}>
      <List>
        {menuItems.map((menuItem, key) => (
          <ItemList
            key={key}
            onClick={() => {
              dispatch(Actions.SetMenu(menuItem.menuContent))
              dispatch(Actions.SetVisible(false))
            }}
          >
            {intl.formatMessage({ id: menuItem.menuContent })}
          </ItemList>
        ))}
      </List>
    </Container>
  )
}

export default connect(state => ({ IsVisible: state.isVisible }))(
  injectIntl(nav)
)
