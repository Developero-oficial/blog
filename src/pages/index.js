import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { LandingPageContainer } from '../components/landing-page-container'

const technologies = [
  {
    name: 'Nodejs',
  },
  {
    name: 'Reactjs',
  },
  {
    name: 'Php y Msql',
  },
]

const BlogIndex = ({ data, location }) => {
  const { social } = data.site.siteMetadata

  return (
    <>
      <SEO title="Developero" />
      <Layout location={location} social={social}>
        <LandingPageContainer technologies={technologies} />
      </Layout>
    </>
  )
}

export default BlogIndex

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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
