import React from "react"
import { graphql } from "gatsby"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const getUri = ({ location, siteUrl }) => {
  return `${siteUrl}${location.pathname}`
}

const PhpTutorialDesdeCero = ({ data, location }) => {
  const { siteUrl } = data.site.siteMetadata
  return (
    <>
      <SEO
        title="Php MVC Tutorial desde cero - Developero"
        description=""
        url={getUri({ location, siteUrl })}
      />
      <Layout location={location}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Box my={4}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                color="primary"
              >
                PHP con MVC tutorial desde cero Gratis
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <Typography variant="h6" component="p" gutterBottom>
              Bienvenido al curso gratuito de Php con MVC en el que aprenderás a
              crear tu propio mini framework usando php vanila (puro).
            </Typography>
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

export default PhpTutorialDesdeCero

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
