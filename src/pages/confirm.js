import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

export default function ConfirmPage({ location }) {
  return (
    <>
      <SEO title="Confirmar suscripción" />
      <Layout location={location}>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12} md={10}>
            <Typography variant="h3" component="h1" align="center" gutterBottom>
              Felicidades. Has dado el primer paso hacia mejorar tu carrera
            </Typography>

            <Typography variant="h4" align="center" gutterBottom>
              ¿Y ahora qué sigue?
            </Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography align="center" gutterBottom>
              1. Estás a punto de recibir un email con más detalles.
              <b> ¡Atención!</b> Hay una sorpresa de la que no había dicho.
            </Typography>

            <Typography align="center" gutterBottom>
              ¿Quieres descubrirla? Abre el email cuanto antes. Tip: Revisa
              carpeta de spam.
            </Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography align="center" gutterBottom>
              2. La carrera de desarrollo de software es <b>un gran reto.</b>
            </Typography>
            <Typography align="center" gutterBottom>
              ¿Quieres superarla? Forja la habilidad de ser{" "}
              <b>autodidacta y nunca te conformes con lo que sabes y tienes</b>,
              de ahora en adelante.
            </Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography align="center" gutterBottom>
              3. Uno de los <b>mayores secretos de mi éxito</b> es que comparto
              gratuitamente muchísima información de valor.
            </Typography>
            <Typography align="center" gutterBottom>
              ¿Quieres tener éxito? Comienza ayudando a otros.
            </Typography>
            <Typography align="center" gutterBottom>
              Comparte esta información con tus contactos en redes sociales.
            </Typography>
          </Grid>

          <Grid item xs={12} md={10}>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Button
                  style={{ backgroundColor: "#4267B2", color: "#ffffff" }}
                  target="_blank"
                  variant="contained"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopero.io%2F&amp;src=sdkpreparse"
                >
                  Compartir en Facebook
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={{ backgroundColor: "#0e76a8", color: "#ffffff" }}
                  target="_blank"
                  variant="contained"
                  href="http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fdevelopero.io%2F&amp;&source=developero.io"
                >
                  Compartir en LinkedIn
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={{ backgroundColor: "#4AC959", color: "#ffffff" }}
                  target="_blank"
                  variant="contained"
                  href="https://api.whatsapp.com/send?text=Esto te puede interesar: https%3A%2F%2Fdevelopero.io%2F&amp;"
                >
                  Compartir en WhatsApp
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}
