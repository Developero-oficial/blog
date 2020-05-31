import React from "react"
import { graphql, Link } from "gatsby"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const { title, description, social } = data.site.siteMetadata

  return (
    <Layout location={location} title={title} description={description} social={social}>
      <SEO title="404: Not Found" />
      <h1>Página no encontrada :(</h1>
      <Link to="/">Regresar a inicio</Link>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        social {
          youtube
          facebook
          github
        }
      }
    }
  }
`
