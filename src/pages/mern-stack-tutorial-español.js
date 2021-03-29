import React from "react"
import { graphql } from "gatsby"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const getUri = ({ location, siteUrl }) => {
  return `${siteUrl}${location.pathname}`
}

const courseItems = [
  {
    title: "Estructura recomendada de un proyecto con MERN",
    uri: "https://www.youtube.com/embed/p9RfYt6PGRc?controls=0",
    description:
      "¿Cómo debería estructurar una app MERN? En este vídeo vamos a ver el demo de una app creada con el stack MERN full stack javascript y conoceremos la arquitectura de la app.",
  },
  {
    title: "Inicar el server en el backend con Node y Express",
    uri: "https://www.youtube.com/embed/6B93HxW7VAk?controls=0",
    description:
      "Vamos a aprender cómo iniciar nuestro server web de API rest en backend con node y express.",
  },
  {
    title: "¿Cuáles son las buenas prácticas con Node y Express?",
    uri: "https://www.youtube.com/embed/u7YtoQ6oQYw?controls=0",
    description:
      "En este vídeo vamos a ver buenas prácticas al configurar una api rest con nodejs y express esto como parte de nuestra app.",
  },
  {
    title:
      "¿Cómo conectar MongoDB con nuestra api de Node y Express (incluyendo variables de entorno)?",
    uri: "https://www.youtube.com/embed/AcuLiP8-Rm4?controls=0",
    description:
      "Cómo conectarnos a una base de datos de MongoDB con Node js con buenas prácticas y usando variables de entorno!",
  },
  {
    title: "¿Cómo manejar errores de MongoDB en la API?",
    uri: "https://www.youtube.com/embed/ePhAPsYjLuU?controls=0",
    description:
      "Vamos a aprender cómo manejar un error de conexión en MongoDB utilizando promesas y la sintaxis async await en un server de nodejs y expressjs.",
  },
  {
    title: "¿Cómo definir un modelo con Mongoose (MongoDB)?",
    uri: "https://www.youtube.com/embed/i8dmIZyQSfM?controls=0",
    description:
      "En este vídeo vamos a aprender cómo definir un modelo para nuestra base de datos en Mongo como parte de nuestra app fullstack js.",
  },
  {
    title: "¿Cómo definir rutas (endpoints) en Express de manera recomendada?",
    uri: "https://www.youtube.com/embed/q2405XjHuMI?controls=0",
    description:
      "Vamos a aprender cómo agregar un endpoint de tipo POST usando nodejs y expressjs para guardar un producto en Mongodb.",
  },
  {
    title: "¿Cómo guardar datos en mongo (mongoose)?",
    uri: "https://www.youtube.com/embed/lgwNcl-dXZE?controls=0",
    description:
      "Vamos a utilizar un modelo definido con mongoose para guardar datos en mongodb en esta api rest por medio de un request de tipo POST.",
  },
  {
    title: "¿Cómo subir una imagen en Node y Express?",
    uri: "https://www.youtube.com/embed/5myaDp47Dbo?controls=0",
    description:
      "Vamos a aprender cómo almacenar imágenes en nuestra api rest hecha con node.js y express.js de manera sencilla y rápida.",
  },
  {
    title: "¿Cómo guardar una imagen en MongoDB (manera recomendada)?",
    uri: "https://www.youtube.com/embed/nI1-xvhcWYM?controls=0",
    description:
      "En este tutorial del full stack MERN vamos a aprender una estrategia recomendada para guardar imágenes en nuestra base de datos de MongoDB.",
  },
  {
    title: "¿Cómo obtener un listado de datos en un endpoint GET?",
    uri: "https://www.youtube.com/embed/V0Oyk7Qjk1k?controls=0",
    description:
      "En este vídeo vamos a aprender cómo crear un endpoint GET para consultar colecciones en nuestra base de datos de MongoDB.",
  },
  {
    title: "¿Cómo iniciar una app en React en el stack MERN?",
    uri: "https://www.youtube.com/embed/L6mXMVM2u9A?controls=0",
    description:
      "Vamos a iniciar nuestra app de React js desde cero como parte del tutorial MERN stack.",
  },
  {
    title: "Buenas prácticas en React JS",
    uri: "https://www.youtube.com/embed/HFIB_5QQUsM?controls=0",
    description:
      "Haz componentes con las BUENAS PRACTICAS de REACT JS. Separar la UI en componentes, aplicar el Principio de responsabilidad única (SRP), hacer una jerarquía de componentes, codificar los componentes en versiones estáticas y recomendaciones personales es lo que verás en este vídeo!",
  },
  {
    title: "Tutorial de React Hooks 100% práctico",
    uri: "https://www.youtube.com/embed/3UVRlbxlF0g?controls=0",
    description: "Aprende a usar HOOKS desde CERO con BUENAS PRACTICAS.",
  },
  {
    title: "¿Cómo hacer refactor de componentes grandes en React JS?",
    uri: "https://www.youtube.com/embed/bf2gK8DJBPU?controls=0",
    description:
      "Vamos a aprender a hacer más codigo limpio en nuestros componentes de react js aplicando buenas practicas de desarrollo y de refactor de codigo.",
  },
  {
    title:
      "¿Cómo usar el hook useEffect adecuadamente en React JS (componentDidMount)?",
    uri: "https://www.youtube.com/embed/AeMHuFb85ts?controls=0",
    description:
      "Cómo usar useEffect en el montado solamente, con saneamiento y sin saneamiento con ejemplos desde cero.",
  },
  {
    title:
      "¿Cómo consumir una api en React con hooks aplicando buenas prácticas?",
    uri: "https://www.youtube.com/embed/GlXMtV0ylK0?controls=0",
    description:
      "Cómo consumir datos de una API con react hooks BUENAS PRACTICAS.",
  },
  {
    title: "¿Cómo hacer renderizado condicional en React JS?",
    uri: "https://www.youtube.com/embed/LEMLqB4l1FM?controls=0",
    description: "",
  },
  {
    title: "¿Cómo mostrar un modal en React JS y hooks?",
    uri: "https://www.youtube.com/embed/5gs7Vm3tYgs?controls=0",
    description: "",
  },
  {
    title: "¿Cómo manejar formularios de manera adecuada en React JS y hooks?",
    uri: "https://www.youtube.com/embed/kUes93_rCjs?controls=0",
    description:
      "En este vídeo vamos a ver cómo manejar formularios en React paso a paso.",
  },
  {
    title: "¿Cómo consumir una API usando Axios en React JS?",
    uri: "https://www.youtube.com/embed/UXAQUGbDJZw?controls=0",
    description: "",
  },
  {
    title: "¿Cómo hacer un listado en React JS?",
    uri: "https://www.youtube.com/embed/VIaoQwXs0jw?controls=0",
    description: "",
  },
]

const MernStackTutorial = ({ data, location }) => {
  const { siteUrl } = data.site.siteMetadata
  return (
    <>
      <SEO
        title="MERN Stack Tutorial en Español - Developero"
        description="Tutorial de MERN Stack en Español Gratis desde cero y 100% práctico"
        url={getUri({ location, siteUrl })}
      />
      <Layout location={location}>
        <Grid container direction="column">
          <Grid item>
            <Box mt={4}>
              <Typography
                variant="h4"
                component="h1"
                color="primary"
                gutterBottom
              >
                Tutorial de MERN Stack en Español Gratis desde cero
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <Typography variant="h6" component="p" gutterBottom>
              Bienvenido al tutorial gratuito del Stack MERN (MongoDB, Express,
              React y Node) en español en el que aprenderás a hacer una app full
              stack Javascript de productos desde cero.
            </Typography>
          </Grid>
        </Grid>

        <Box my={8} />
        <Grid container spacing={2}>
          {courseItems.map(({ title, uri, description }) => (
            <>
              <Grid item key={title}>
                <Grid container direction="row" spacing={4}>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box>
                      <iframe
                        width="100%"
                        height="234px"
                        src={uri}
                        title={title}
                        frameBorder="0"
                        allowFullScreen
                        margin="auto"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Typography
                      color="primary"
                      variant="h5"
                      component="h2"
                      gutterBottom
                    >
                      {title}
                    </Typography>
                    <Typography>{description}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Box my={2} width="100%">
                <Divider />
              </Box>
            </>
          ))}
        </Grid>
      </Layout>
    </>
  )
}

export default MernStackTutorial

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
