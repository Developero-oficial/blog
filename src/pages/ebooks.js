import React, { useState } from "react"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Paper from "@material-ui/core/Paper"

import { SubscriptionForm } from "../components/subscription-form"
import { useSubscriptionUrls } from "../hooks/useSubscriptionUrls"

import ebook from "../../content/assets/ebook.svg"
import patronesAvanzadosImg from "../../content/assets/patrones-avanzados-react.svg"
import reactHooks from "../../content/assets/react-hooks.svg"
import introTestingJS from "../../content/assets/intro-testing-js.png"
import coverImg from "../../content/assets/ebooks-og-img.png"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const useStyles = makeStyles(theme => ({
  mainContent: {
    paddingBottom: theme.spacing(2),
  },
  jumbotron: {
    padding: theme.spacing(2),
  },
  ebookContainer: {
    padding: theme.spacing(2),
  },
  ebookImg: {
    borderRadius: 5,
    width: "100%",
    height: "auto",
    maxWidth: "320px",
  },
  hooksBook: {
    backgroundColor: "#FFFEFC",
  },
  reactPatternsBook: {
    backgroundColor: "#0F1B35",
    color: "#ffffff",
  },
  img: {
    maxWidth: "70%",
    height: "auto",
    borderRadius: 5,
  },
  coverImg: {
    maxWidth: "80%",
    height: "auto",
    borderRadius: 5,
    margin: "auto",
    paddingTop: "8px",
  },
}))

const Ebooks = ({ data, location }) => {
  const {
    siteUrl,
    ebooks: { hooksManual, reactPatterns, introJsTesting },
  } = data.site.siteMetadata
  const classes = useStyles()
  const isMobile = useMediaQuery("(max-width:600px)")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { reactHooksManualEbook } = useSubscriptionUrls()

  const handleClickOpen = () => {
    setIsDialogOpen(true)
  }

  const handleClose = () => {
    setIsDialogOpen(false)
  }

  return (
    <>
      <SEO
        title="Ebooks Developero"
        description="Mejora tus habilidades de desarrollo de software con los ebooks de Developero. React, Node, Javascript y más."
        url={`${siteUrl}/ebooks`}
        img={coverImg}
      />
      <Layout location={location}>
        <Box my={4}>
          <Paper elevation={1} className={classes.jumbotron}>
            <Grid container>
              <Grid
                container
                className={classes.mainContent}
                direction={isMobile ? "column-reverse" : "row"}
                alignItems="center"
                justify="space-between"
              >
                <Grid item xs={12} md={6}>
                  <Box my={isMobile ? 4 : 0}>
                    <Typography
                      variant="h4"
                      component="h1"
                      gutterBottom
                      align={isMobile ? "center" : "left"}
                      color="primary"
                    >
                      Ebooks de Developero
                    </Typography>

                    <Typography
                      gutterBottom
                      align={isMobile ? "center" : "left"}
                      color="textPrimary"
                    >
                      Mejora tus hablidades de desarrollo de software con estos
                      ebooks que te guiarán paso a paso. Algunos de ellos son
                      gratuitos.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box display="flex" justifyContent="flex-end">
                    <img src={ebook} alt="ebooks developero" />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.ebookContainer}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <a href={hooksManual} target="_blank" rel="noreferrer">
                    <img
                      className={classes.ebookImg}
                      src={reactHooks}
                      alt="react hooks pdf"
                    />
                  </a>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box
                    display="flex"
                    flexWrap="wrap"
                    alignItems="center"
                    m={1}
                    css={{ height: "100%" }}
                  >
                    <Typography
                      color="primary"
                      variant="h4"
                      component="h2"
                      gutterBottom
                    >
                      React Hooks Manual Desde Cero
                    </Typography>
                    <Typography variant="subtitle1" component="p" gutterBottom>
                      Conoce los por qué, cómo y en qué casos aplicar cada hook.
                    </Typography>
                    <Typography variant="subtitle1" component="p" gutterBottom>
                      Vamos a revisar en cada hook cuáles son los escenarios
                      donde conviene aplicarlos y cómo hacerlo con buenas
                      prácticas.
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      href={hooksManual}
                      target="_blank"
                      fullWidth={isMobile}
                    >
                      Leer Ahora
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth={isMobile}
                      onClick={handleClickOpen}
                    >
                      Descargar
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper
              className={`${classes.ebookContainer} ${classes.reactPatternsBook}`}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <a href={reactPatterns} target="_blank" rel="noreferrer">
                    <img
                      className={classes.ebookImg}
                      src={patronesAvanzadosImg}
                      alt="patrones avanzados en react js pdf"
                    />
                  </a>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box
                    display="flex"
                    flexWrap="wrap"
                    alignItems="center"
                    m={1}
                    css={{ height: "100%" }}
                  >
                    <Typography
                      color="secondary"
                      variant="h4"
                      component="h2"
                      gutterBottom
                    >
                      Patrones Avanzados En React JS
                    </Typography>
                    <Typography variant="subtitle1" component="p" gutterBottom>
                      En este libro aprenderás a cómo crear componentes en React
                      JS realmente reutilizables, escalables y fáciles de
                      mantener a lo largo del tiempo.
                    </Typography>
                    <Typography variant="subtitle1" component="p" gutterBottom>
                      Esto es posible implementando los patrones avanzados en
                      React JS así como los principios SOLID que los
                      fundamentan.
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      href={reactPatterns}
                      target="_blank"
                      fullWidth={isMobile}
                    >
                      Leer Ahora
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.ebookContainer}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <a href={introJsTesting} target="_blank" rel="noreferrer">
                    <img
                      className={classes.ebookImg}
                      src={introTestingJS}
                      alt="intro testing js pdf"
                    />
                  </a>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box
                    display="flex"
                    flexWrap="wrap"
                    alignItems="center"
                    m={1}
                    css={{ height: "100%" }}
                  >
                    <Typography
                      color="primary"
                      variant="h4"
                      component="h2"
                      gutterBottom
                    >
                      Introducción al Testing en Javascript
                    </Typography>
                    <Typography variant="subtitle1" component="p" gutterBottom>
                      En este libro vas a partir desde cero comprendiendo paso a
                      paso los conceptos relacionados con las pruebas
                      automatizadas con un enfoque orientado a la demostración
                      de ejemplos y la práctica.
                    </Typography>
                    <Typography variant="subtitle1" component="p" gutterBottom>
                      Vas a tener una visión general del ecosistema de testing
                      en Javascript y un acercamiento a cómo crear: Unit
                      testing, Integration testing y e2e testing.
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      href={introJsTesting}
                      target="_blank"
                      fullWidth={isMobile}
                    >
                      Leer Ahora
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Dialog
          open={isDialogOpen}
          onClose={handleClose}
          aria-labelledby="formulario-descargar-ebook"
        >
          <DialogTitle>Descargar Ebook GRATIS</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Proporciona tu dirección de correo electrónico para suscribirte y
              obtener este ebook gratis.
            </DialogContentText>
            <Typography align="center">
              Tip: Revisa tu carpeta de SPAM
            </Typography>
            <SubscriptionForm
              actionUrl={reactHooksManualEbook}
              label="Obtendrás el ebook al confirmar tu suscripción"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
          </DialogActions>
        </Dialog>
      </Layout>
    </>
  )
}

export default Ebooks

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        ebooks {
          hooksManual
          reactPatterns
          introJsTesting
        }
      }
    }
  }
`
