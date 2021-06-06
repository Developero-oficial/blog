import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import CheckIcon from "@material-ui/icons/Check"
import "charter-webfont"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import img from "../../content/assets/img.svg"

const useStyles = makeStyles(theme => ({
  mainContent: {
    paddingBottom: theme.spacing(2),
  },
  cover: {
    width: "100%",
    border: 0,
  },
  card: {
    backgroundColor: "#E2E2DD",
    borderRadius: 5,
    boxShadow: "none",
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
  },
  postsContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
}))

const learn = [
  {
    name: "Desarrollar apps del mundo real",
  },
  {
    name: "Aplicar las buenas prácticas de desarrollo de software",
  },
  {
    name: "Aprender los conceptos básicos de tecnologías",
  },
]

const BlogIndex = ({ data, location }) => {
  const { siteUrl, description } = data.site.siteMetadata
  const { edges: lastPosts } = data.allMarkdownRemark
  const classes = useStyles()
  const isMobile = useMediaQuery("(max-width:600px)")

  return (
    <>
      <SEO title="Developero" description={description} url={siteUrl} />
      <Layout location={location}>
        <Grid container>
          <Grid
            container
            className={classes.mainContent}
            direction={isMobile ? "column-reverse" : "row"}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align={isMobile ? "center" : "left"}
              >
                Cursos + Tutoriales
              </Typography>

              <Typography gutterBottom align={isMobile ? "center" : "left"}>
                Espacio para ayudar a las personas a lograr sus objetivos
                personales como desarrolladores de software.
              </Typography>

              <Box my={2}>
                <Button
                  variant="contained"
                  color="primary"
                  component={GatsbyLink}
                  to="/courses-premium"
                  fullWidth={isMobile}
                >
                  Ver Cursos
                </Button>
                <Button
                  variant="contained"
                  component={GatsbyLink}
                  to="/ebooks"
                  fullWidth={isMobile}
                >
                  Ver Ebooks
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={img} alt="developero" className={classes.cover} />
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box m={4}>
              <Typography
                gutterBottom
                variant="h4"
                component="h2"
                align="center"
                color="primary"
              >
                Da el siguiente paso en tu carrera
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              Aquí aprenderás a:
            </Typography>
          </Grid>

          {learn.map(({ name }) => (
            <Grid item xs={12} md={4} key={name}>
              <Card classes={{ root: classes.card }}>
                <CardContent>
                  <Box display="flex" justifyContent="center">
                    <CheckIcon fontSize="large" style={{ color: "#00ed65" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    component="h2"
                    align="center"
                    gutterBottom
                  >
                    {name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box mt={2}>
              <Typography
                gutterBottom
                variant="h4"
                component="h2"
                align="center"
                color="primary"
              >
                Últimos posts
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} className={classes.postsContainer}>
            {lastPosts.map(
              ({
                node: {
                  fields: { slug },
                  frontmatter: { title, description: postDescription },
                },
              }) => (
                <Box key={title} my={4}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {title}
                  </Typography>
                  <Typography>{postDescription}</Typography>
                  <GatsbyLink to={slug} className={classes.link}>
                    <Typography color="primary">Leer más...</Typography>
                  </GatsbyLink>
                </Box>
              )
            )}
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
        siteUrl
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
