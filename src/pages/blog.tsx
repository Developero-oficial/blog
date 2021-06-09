import React from "react"
import { PageProps, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { BlogContainer } from "../components/blog-container"

type Data = {
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
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
  const { siteUrl } = data.site.siteMetadata
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <SEO title="Blog - Developero" url={`${siteUrl}/blog`} />
      <Layout location={location}>
        <Box my={4}>
          <Typography variant="h5" component="h1" gutterBottom>
            Blog de Developero
          </Typography>
        </Box>
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
        siteUrl
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
            date(formatString: "MMMM-YYYY")
            title
            description
            coverImage {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
`
