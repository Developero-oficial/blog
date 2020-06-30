import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { LandingPageContainer } from '../components/landing-page-container'

const technologies = [
  {
    name: 'Node js tutorial',
    description: 'Javascript de lado del servidor!',
    subDescription: 'Api rest con express, estructura de un proyecto, buenas prácticas y más.'
  },
  {
    name: 'React js tutorial',
    description: 'Librería más popular para desarrollo frontend.',
    subDescription: 'Ejemplos de apps, Hooks, Redux, llamadas a apis, patrones, estilos y más.'
  },
  {
    name: 'Php y Msql desde cero',
    description: 'Lenguaje backend más usado en la web',
    subDescription: 'Programación orientada a objetos, CRUD, Tutorialesy más.'
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
