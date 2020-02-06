import React from "react"
import { connect } from "react-redux"

// import { Container } from './styles';
import Home from "../contentPages/home"
import About from "../contentPages/about"
import Stack from "../contentPages/stack"
import Projects from "../contentPages/projects"
import Contact from "../contentPages/contact"

import Layout from "../layout"
import SEO from "../seo"

function SwitchMenus(menuSelected) {
  switch (menuSelected) {
    case "home-menu":
      return <Home/>
    case "about-menu":
      return <About/>
    case "stack-menu":
      return <Stack/>
    case "projects-menu":
      return <Projects/>
    case "contact-menu":
      return <Contact/>
    default:
      break
  }
}

const main = ({ menuSelected }) => {
  return (
    <Layout>
      <SEO title="Home" />
      {SwitchMenus(menuSelected)}
    </Layout>
  )
}

export default connect(state => ({
  menuSelected: state.menuSelected,
}))(main)
