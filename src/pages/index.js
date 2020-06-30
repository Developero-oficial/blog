import React from "react"
import { Link, graphql } from "gatsby"
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"


const BlogIndex = ({ data, location }) => {
  const { social } = data.site.siteMetadata

  return (
    <>
      <SEO title="Developero" />
      <Layout location={location} social={social}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3" component="h1" align="center" gutterBottom>
              Developero
            </Typography>

            <Typography variant="h4" component="h2" align="center" gutterBottom>
              Cursos y tutoriales de programación
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={4}>
            <Typography align="center" gutterBottom>
              Nodejs
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography align="center" gutterBottom>
              Reactjs
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography align="center" gutterBottom>
              Php y Mysql
            </Typography>
          </Grid>
        </Grid>
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
