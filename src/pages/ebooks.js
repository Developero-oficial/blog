import React, { useState } from "react"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

import { SubscriptionForm } from "../components/subscription-form"
import { useSubscriptionUrls } from "../hooks/useSubscriptionUrls"

import ebook from "../../content/assets/ebook.svg"
import patronesAvanzadosImg from "../../content/assets/patrones-avanzados-react.svg"
import reactHooks from "../../content/assets/react-hooks.svg"
import coverImg from "../../content/assets/developero-ebooks-op-cover.png"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const useStyles = makeStyles(theme => ({
  mainContent: {
    paddingBottom: theme.spacing(2),
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
  const { social, siteUrl } = data.site.siteMetadata
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
                    Mejora tus hablidades de desarrollo de software con estos
                    ebooks que te guiarán paso a paso. Algunos de ellos son
                    gratuitos.
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

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card className={classes.hooksBook}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="react-hooks"
                  image={reactHooks}
                  title="React Hooks Manual Desde Cero"
                  classes={{
                    img: classes.coverImg,
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React Hooks Manual Desde Cero
                  </Typography>
                  <Typography variant="body2" component="p">
                    <span role="img" aria-label="check">
                      ✅
                    </span>{" "}
                    Conoce los por qué, cómo y en qué casos aplicar cada hook.
                  </Typography>
                  <Typography variant="body2" component="p">
                    <span role="img" aria-label="check">
                      ✅
                    </span>{" "}
                    Buenas prácticas de código.
                  </Typography>
                  <Typography variant="body2" component="p">
                    <span role="img" aria-label="check">
                      ✅
                    </span>{" "}
                    Acceso a ejemplos con código fuente ejecutable y editable.
                  </Typography>
                  <Typography variant="body2" component="p">
                    <span role="img" aria-label="check">
                      ✅
                    </span>{" "}
                    Acceso a ejemplos con código fuente ejecutable y editable.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={handleClickOpen}
                >
                  Descargar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  href="https://amzn.to/2Gh1fdo"
                  target="_blank"
                >
                  Leer Ahora
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={classes.reactPatternsBook}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="patrones avanzados en react js"
                  image={patronesAvanzadosImg}
                  title="Patrones Avanzados En React JS"
                  classes={{
                    img: classes.coverImg,
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Patrones Avanzados En React JS
                  </Typography>
                  <Typography variant="body2" component="p">
                    <span role="img" aria-label="check">
                      ✅
                    </span>{" "}
                    Aprende a usar los patrones avanzados de UI.
                  </Typography>
                  <Typography variant="body2" component="p">
                    <span role="img" aria-label="check">
                      ✅
                    </span>{" "}
                    Aprende a usar los patrones avanzados de lógica.
                  </Typography>
                  <Typography variant="body2" component="p">
                    <span role="img" aria-label="check">
                      ✅
                    </span>{" "}
                    Refactorizaciones de componentes.
                  </Typography>
                  <Typography variant="body2" component="p">
                    <span role="img" aria-label="check">
                      ✅
                    </span>{" "}
                    Acceso a ejemplos con código fuente ejecutable y editable.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  href="https://amzn.to/2HRXhZj"
                  target="_blank"
                  fullWidth
                >
                  Leer Ahora
                </Button>
              </CardActions>
            </Card>
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
        title
        description
        siteUrl
        social {
          youtube
          facebook
          github
        }
      }
    }
  }
`
