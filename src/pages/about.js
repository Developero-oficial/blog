import React from 'react'
import { graphql } from "gatsby"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

import { rhythm } from "../utils/typography"

import screenshotFan from '../../static/screenshot-fan.png'

const AboutPage = ({ data, location }) => {
  const { title, description, social } = data.site.siteMetadata

  return (
    <Layout location={location} title={title} description={description} social={social}>
      <SEO title="Sobre el autor" />
      <h1
        style={{
          marginTop: rhythm(2),
          marginBottom: rhythm(2),
          fontWeight: 'bold',
        }}
      >
        Sobre el autor
      </h1>

      <div>
        <p>
          Hola <span role="img">👋</span>, soy <strong>Juan Correa</strong>, creador de <strong>Developero</strong> <span>role="img">😁</span>.
        </p>

        <p>
          Soy un <strong>desarrollador de software</strong> experimentado en aplicaciones web con más de 5 años de experiencia.
          He trabajando en ambientes corporativos así como en startups (startups es lo mejor, en mi opinión) y como freelancer <span role="img">👨‍💻</span>.
        </p>

        <p>
          Cree el <a target="_blank" href={social.youtube} rel="noreferrer">canal de YouTube de Developero</a> en el año 2016 con los siguientes propósitos:
        </p>

        <ul>
          <li>Poder ayudar a otros desarrolladores a aprender tecnologías web y así lograr sus metas.</li>
          <li>Aprender más sobre tecnologías.</li>
          <li>Crear un ingreso extra.</li>
        </ul>
      </div>

      <h2>Aprender a programar gratis</h2>

      <div>
        <p>
          <strong>Aprender a programar</strong> hoy en día puede tener un costo de $0 mientras tengas una computadora y acceso a internet.
          Hay montones de recursos gratis disponibles para quien los quiera tomar y <strong>Developero</strong> es uno de ellos 💪.
        </p>

        <p>
          A través del tiempo, algunas personas me han escrito por medio de la <a target="_blank" rel="noreferrer" href={social.facebook}>fanpage de facebook </a> compartiendo que lograron
          conseguir sus metas con ayuda de los contenidos que he creado.
        </p>

        <p>
          Aunque yo pienso que mis contenidos - y los de internet
          en general - son sólo las herramientas disponibles para quien desee usarlas, y el logro debe adjudicarse en quien usó las herramientas
          y no las herramientas per se.
        </p>

        <figure>
          <img
            src={screenshotFan}
            alt="Captura de pantalla fan"
            style={{
              display: `block`,
              margin: `1.5em auto`,
            }}
          />
          <figcaption
            style={{
              textAlign: `center`,
            }}
          >
            Captura de pantalla <a
              href="https://www.facebook.com/DeveloperoOficial/photos/a.497228547148752/652144578323814/?type=3&theater"
              target="_blank"
              rel="noreferrer"
            >tomada el 23 de Junio del 2017.</a>
          </figcaption>
        </figure>

        <p>
          Este blog es una extensión más para poder llegar y ayudar a más personas en el mundo de la programación.
        </p>

        <p>
          Espero leerte seguido por aquí o por las diferentes redes sociales, cualquier duda que tengas, siéntete libre de contactarme
          por medio de la fanpage envidando un mensaje al buzón, comentando en algún vídeo de YouTube o mandando un correo a {` `}
          <a href="mailto:developero.apps@gmail.com">developero.apps@gmail.com</a>.
        </p>
      </div>
    </Layout>
  )
};

export default AboutPage;

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
