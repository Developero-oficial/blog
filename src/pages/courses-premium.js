import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"

import tddReactImg from "../../static/tdd-react.svg"
import logo from "../../static/Logotipo_original.png"
import coverImg from "../../content/assets/developero-ebooks-op-cover.png"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const useStyles = makeStyles(theme => ({
  mainContent: {
    paddingBottom: theme.spacing(2),
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

const tddReactDescriptionList = [
  "Comprende los principios de Test Driven Development (TDD).",
  "Aprende a aplicar fuertemente buenas prácticas - Código limpio y refactors en React JS.",
  "Unit tests e integration testing.",
  "TDD en formularios con validaciones y llamada a API.",
  "TDD en un listado de elementos con filtros y paginación.",
  "TDD en una app que maneje autenticación y autorización.",
]

const CoursesPremium = ({ data, location }) => {
  const {
    siteUrl,
    premiumCourses: { tddReact },
  } = data.site.siteMetadata
  const classes = useStyles()
  const theme = useTheme()
  const isUpSmallScreen = useMediaQuery(theme.breakpoints.up("sm"))

  const renderItemDescriptions = descriptionList =>
    descriptionList.map(description => (
      <Typography variant="body2" component="p" key={description}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        {description}
      </Typography>
    ))

  return (
    <>
      <SEO
        title="Cursos Premium de Developero"
        description="Mejora tus habilidades de desarrollo de software con los cursos profesionales de Developero. React, Node, Javascript y más."
        url={`${siteUrl}/courses-premium`}
        img={coverImg}
      />
      <Layout location={location}>
        <Box my={4}>
          <Grid container>
            <Grid
              container
              className={classes.mainContent}
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
          </Grid>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Test Driven Development (TDD) en React JS"
                  image={tddReactImg}
                  title="Test Driven Development (TDD) en React JS"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Test Driven Development (TDD) en React JS
                  </Typography>
                  {renderItemDescriptions(tddReactDescriptionList)}
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  href={tddReact}
                  target="_blank"
                  fullWidth
                >
                  Ver Ahora
                </Button>
              </CardActions>
            </Card>
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
        }
      }
    }
  }
`
