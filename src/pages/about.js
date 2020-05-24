import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const { title, description, social } = data.site.siteMetadata

  return (
    <Layout location={location} title={title} description={description} social={social}>
      <SEO title="About" />
    </Layout>
  )
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        social {
          youtube
          facebook
        }
      }
    }
  }
`
