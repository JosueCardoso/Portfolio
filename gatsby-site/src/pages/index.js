import React from "react"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "teste" })} />
      <h1><FormattedMessage id="teste" /></h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
