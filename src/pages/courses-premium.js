import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"

import tddReactImg from "../../static/tdd-react.svg"
import reactPatternsImg from "../../static/react-patterns.jpg"
import logo from "../../static/Logotipo_original.png"
import ogImg from "../../content/assets/courses-og-img.png"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const useStyles = makeStyles(theme => ({
  jumbotron: {
    padding: theme.spacing(2),
  },
  courseContainer: {
    padding: theme.spacing(2),
  },
  courseImg: {
    borderRadius: 5,
    width: "100%",
    height: "auto",
    maxWidth: "320px",
  },
  img: {
    maxWidth: "300px",
    height: "auto",
    borderRadius: 5,
  },
  coverImg: {
    maxWidth: "70%",
    height: "auto",
    borderRadius: 5,
    margin: "auto",
    paddingTop: "8px",
  },
}))

const CoursesPremium = ({ data, location }) => {
  const {
    siteUrl,
    premiumCourses: { tddReact, reactPatterns },
  } = data.site.siteMetadata
  const classes = useStyles()
  const theme = useTheme()
  const isUpSmallScreen = useMediaQuery(theme.breakpoints.up("sm"))

  return (
    <>
      <SEO
        title="Cursos Premium de Developero"
        description="Mejora tus habilidades de desarrollo de software con los cursos profesionales de Developero. React, Node, Javascript y más."
        url={`${siteUrl}/courses-premium`}
        img={ogImg}
      />
      <Layout location={location}>
        <Box my={4}>
          <Paper elevation={1} className={classes.jumbotron}>
            <Grid
              container
              direction={isUpSmallScreen ? "row" : "column-reverse"}
              alignItems="center"
            >
              <Grid item xs={12} sm={6} md={6}>
                <Box my={isUpSmallScreen ? 0 : 4}>
                  <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    align={isUpSmallScreen ? "left" : "center"}
                  >
                    Cursos Premium de Developero
                  </Typography>

                  <Typography
                    gutterBottom
                    align={isUpSmallScreen ? "left" : "center"}
                  >
                    Mejora tus habilidades de desarrollo de software con los
                    cursos profesionales de Developero. React, Node, Javascript
                    y más.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box
                  display="flex"
                  justifyContent={isUpSmallScreen ? "flex-end" : "center"}
                >
                  <img src={logo} alt="developero" className={classes.img} />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.courseContainer}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <a href={tddReact} target="_blank" rel="noreferrer">
                    <img
                      className={classes.courseImg}
                      src={tddReactImg}
                      alt="Test Driven Development (TDD) en React JS"
                      sizes="(max-width: 320px) 280px,(max-width: 480px) 440px,800px"
                    />
                  </a>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography
                    color="primary"
                    variant="h6"
                    component="h2"
                    gutterBottom
                  >
                    Test Driven Development (TDD) en React JS
                  </Typography>
                  <Typography variant="subtitle1" component="h3" gutterBottom>
                    Mejora tus habilidades en React usando TDD - Jest, React
                    Testing Library, MSW, React Router, Hooks y más!
                  </Typography>
                  <Typography color="primary" gutterBottom>
                    Cupón de máximo descuento activado
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={tddReact}
                    target="_blank"
                    endIcon={<PlayCircleOutlineIcon />}
                    fullWidth={!isUpSmallScreen}
                  >
                    Ver Ahora
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.courseContainer}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <a href={reactPatterns} target="_blank" rel="noreferrer">
                    <img
                      className={classes.courseImg}
                      src={reactPatternsImg}
                      alt="Guía definitiva: Aprende los 9 Patrones Avanzados en ReactJS"
                      sizes="(max-width: 320px) 280px,(max-width: 480px) 440px,800px"
                    />
                  </a>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography
                    color="primary"
                    variant="h6"
                    component="h2"
                    gutterBottom
                  >
                    Guía definitiva: Aprende los 9 Patrones Avanzados en ReactJS
                  </Typography>
                  <Typography variant="subtitle1" component="h3" gutterBottom>
                    ¿Quieres pasar al siguiente nivel en React JS?
                  </Typography>
                  <Typography gutterBottom>
                    Aprende a crear componentes en React JS realmente
                    reutilizables, escalables y fáciles de mantener.
                  </Typography>
                  <Typography color="primary" gutterBottom>
                    Cupón de máximo descuento activado
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={reactPatterns}
                    target="_blank"
                    endIcon={<PlayCircleOutlineIcon />}
                    fullWidth={!isUpSmallScreen}
                  >
                    Ver Ahora
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

export default CoursesPremium

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        premiumCourses {
          tddReact
          reactPatterns
        }
      }
    }
  }
`
