import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import ebook from "../../content/assets/ebook.svg"
import patronesAvanzadosImg from "../../content/assets/patrones-avanzados-react.svg"
import reactHooks from "../../content/assets/react-hooks.svg"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const useStyles = makeStyles(theme => ({
  mainContent: {
    paddingBottom: theme.spacing(2),
    borderBottom: `2px solid #00ed65`,
  },
  hooksBook: {
    backgroundColor: "#FFFEFC",
  },
  reactPatternsBook: {
    backgroundColor: "#0F1B35",
    color: "#ffffff",
    borderRadius: 5,
    paddingTop: theme.spacing(1),
  },
  img: {
    maxWidth: "70%",
    height: "auto",
    borderRadius: 5,
  },
}))

const Ebooks = ({ data, location }) => {
  const { social } = data.site.siteMetadata
  const classes = useStyles()
  const isMobile = useMediaQuery("(max-width:600px)")

  return (
    <>
      <SEO title="Developero" />
      <Layout location={location} social={social}>
        <Box my={4}>
          <Grid container>
            <Grid
              container
              className={classes.mainContent}
              direction={isMobile ? "column-reverse" : "row"}
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <Box my={isMobile ? 4 : 0}>
                  <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    align={isMobile ? "center" : "left"}
                  >
                    Ebooks de Developero
                  </Typography>

                  <Typography gutterBottom align={isMobile ? "center" : "left"}>
                    Ebooks de desarrollo de software en formatos Pdf y Kindle.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box display="flex" justifyContent="center">
                  <img src={ebook} alt="ebooks developero" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Grid container justify="space-around">
          <Grid item xs={12} md={5} className={classes.hooksBook}>
            <Box my={4}>
              <Typography variant="h6" component="h2" align="center">
                React Hooks Manual Desde Cero
              </Typography>
            </Box>

            <Box display="flex" justifyContent="center">
              <img className={classes.img} src={reactHooks} alt="react-hooks" />
            </Box>

            <Box my={2} display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="secondary"
                href="https://amzn.to/2Gh1fdo"
                target="_blank"
              >
                Leer Ahora
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} className={classes.reactPatternsBook}>
            <Box my={4}>
              <Typography variant="h6" component="h2" align="center">
                Patrones Avanzados en React JS
              </Typography>
            </Box>

            <Box display="flex" justifyContent="center">
              <img
                className={classes.img}
                src={patronesAvanzadosImg}
                alt="patrones-avanzados-react"
              />
            </Box>

            <Box my={2} display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="secondary"
                href="https://amzn.to/2HRXhZj"
                target="_blank"
              >
                Leer Ahora
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

export default Ebooks

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
