import React from "react"
import { PageProps, graphql } from "gatsby"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { BlogContainer } from '../components/blog-container'

type Data = {
  site: {
    siteMetadata: {
      title: string
      description: string
      social: {
        youtube: string
        facebook: string
        github: string
      }
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const { social } = data.site.siteMetadata
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <SEO title="Developero" />
      <Layout location={location} social={social}>
        <BlogContainer posts={posts} />
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
            coverImage {
              publicURL
              childImageSharp {
                sizes(maxWidth: 2000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
