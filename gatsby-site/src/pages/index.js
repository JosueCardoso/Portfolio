import React from "react"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Teste from "../components/main"

const IndexPage = () => {
  const intl = useIntl()
 const index = () =>{
   if(intl.locale === "pt") return 0;
   if(intl.locale === "en") return 1;
   if(intl.locale === "es") return 2;
 }
  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "teste" })} />
      <h1><FormattedMessage id="teste" /></h1>
      <Teste index={index()}/>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
