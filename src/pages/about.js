import React from "react"
import { graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

import screenshotFan from "../../static/screenshot-fan.png"

const AboutPage = ({ data, location }) => {
  const { social } = data.site.siteMetadata

  return (
    <>
      <SEO title="Acerca de" />
      <Layout location={location}>
        <Grid container justify="center" spacing={5} style={{ marginTop: 16 }}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h1" gutterBottom>
              Acerca de Developero
            </Typography>

            <Typography gutterBottom paragraph>
              Hola{" "}
              <span role="img" aria-label="saludo">
                👋
              </span>
              , soy <strong>Juan Correa</strong>, creador de{" "}
              <strong>Developero</strong>{" "}
              <span role="img" aria-label="sonrisa">
                😁
              </span>
            </Typography>

            <Typography gutterBottom paragraph>
              Soy un <strong>desarrollador de software</strong> experimentado en
              aplicaciones web con más de 5 años de trayectoria. He trabajando
              en ambientes corporativos así como en startups (startups es lo
              mejor, en mi opinión) y como freelancer{" "}
              <span role="img" aria-label="computadora">
                👨‍💻
              </span>
              .
            </Typography>

            <Typography gutterBottom paragraph>
              Cree el{" "}
              <a target="_blank" href={social.youtube} rel="noreferrer">
                canal de YouTube de Developero
              </a>{" "}
              en el año 2016 con los siguientes propósitos:
            </Typography>

            <Typography>
              <span role="img" aria-label="muscle">
                💪
              </span>{" "}
              Poder ayudar a otros desarrolladores a aprender tecnologías web y
              así lograr sus metas.
            </Typography>
            <Typography>
              <span role="img" aria-label="nerd">
                🤓
              </span>{" "}
              Aprender más sobre tecnologías.
            </Typography>
            <Typography>
              <span role="img" aria-label="money-face">
                🤑
              </span>{" "}
              Crear un ingreso extra.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom>
              Aprender a programar gratis
            </Typography>

            <Typography paragraph>
              <strong>Aprender a programar</strong> hoy en día puede tener un
              costo de $0 mientras tengas una computadora y acceso a internet.
              Hay montones de recursos gratis disponibles para quien los quiera
              tomar y <strong>Developero</strong> es uno de ellos 💪.
            </Typography>

            <Typography paragraph>
              A través del tiempo, algunas personas me han escrito por medio de
              la{" "}
              <a target="_blank" rel="noreferrer" href={social.facebook}>
                fanpage de facebook{" "}
              </a>{" "}
              compartiendo que lograron conseguir sus metas con ayuda de los
              contenidos que he creado.
            </Typography>

            <Typography paragraph>
              Aunque yo pienso que mis contenidos - y los de internet en general
              - son sólo las herramientas disponibles para quien desee usarlas,
              y el logro debe adjudicarse en quien usó las herramientas y no las
              herramientas per se.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <img
              src={screenshotFan}
              alt="Captura de pantalla fan"
              style={{
                width: `100%`,
                height: `100%`,
              }}
            />
            <figcaption
              style={{
                textAlign: `center`,
              }}
            >
              Captura de pantalla{" "}
              <a
                href="https://www.facebook.com/DeveloperoOficial/photos/a.497228547148752/652144578323814/?type=3&theater"
                target="_blank"
                rel="noreferrer"
              >
                tomada el 23 de Junio del 2017.
              </a>
            </figcaption>
          </Grid>

          <Grid item xs={12}>
            <Typography paragraph>
              Este blog es una extensión más para poder llegar y ayudar a más
              personas en el mundo de la programación.
            </Typography>

            <Typography paragraph>
              Espero leerte seguido por aquí o por las diferentes redes
              sociales, cualquier duda que tengas, siéntete libre de contactarme
              por medio de la fanpage envidando un mensaje al buzón, comentando
              en algún vídeo de YouTube o mandando un correo a {` `}
              <a href="mailto:developero.apps@gmail.com">
                developero.apps@gmail.com
              </a>
              .
            </Typography>
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

export default AboutPage

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
