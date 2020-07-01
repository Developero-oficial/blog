import React from "react"
import { graphql, Link as GatsbyLink} from "gatsby"
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const { title, description, social } = data.site.siteMetadata

  return (
    <>
      <SEO title="404: Not Found" />
      <Layout location={location} title={title} description={description} social={social}>
        <Grid container justify="center" style={{ marginTop: 16 }}>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" align="center" gutterBottom>
              Página no encontrada :(
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <div><iframe src="https://giphy.com/embed/j6aoUHK5YiJEc" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography align="center">
              <Link to="/" component={GatsbyLink}>
                Regresar a inicio
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Layout>
    </>
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
