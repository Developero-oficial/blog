import React from "react"
import { graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Bio } from "../components/bio"
import coverImg from "../../static/tdd-flow.svg"

const tddTutorials = [
  {
    title: "Tutorial de React JS y TDD desde cero",
    description: "Usando Jest y Testing Library como herramientas de pruebas.",
    url: "https://tddreactjs.com/",
  },
  {
    title: "Curso premium de TDD con React JS",
    description:
      "Mejora tus habilidades en React usando TDD - Jest, React Testing Library, MSW, React Router, Hooks y más!",
    url:
      "https://www.udemy.com/course/tdd-react-js/?referralCode=F40803D2C4D2934AB038",
  },
]

const useStyles = makeStyles(() => ({
  subtitle: {
    fontWeight: "bold",
  },
}))

const TestDrivenDevelopment = ({ data, location }) => {
  const { siteUrl } = data.site.siteMetadata
  const classes = useStyles()
  const isMobile = useMediaQuery("(max-width:600px)")

  return (
    <>
      <SEO
        title="★ Aprende Test Driven Development (TDD) | Desarrollo guiado por pruebas desde cero en español con tutoriales y ejemplos"
        description="Bienvenido al mega post de TEST-DRIVEN DEVELOPMENT ➤ Sube tu nivel de seniority AHORA MISMO"
        url={`${siteUrl}/test-driven-development`}
      />
      <Layout location={location}>
        <Container maxWidth="sm">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4" component="h1" gutterBottom>
                ¿Qué es Test Driven Development o Desarrollo dirigido por
                pruebas?
              </Typography>

              <Box my={2}>
                <Bio />
              </Box>

              <img src={coverImg} alt="desarrollo dirigido por pruebas flujo" />

              <Typography paragraph>
                Test Driven Development o desarrollo dirigido por pruebas es una
                técnica para desarrollar software que consiste en ciclos cortos
                de código en los que primero escribes una prueba automatizada
                que falle, después haces lo mínimo necesario para que pase y
                finalmente haces refactor.
              </Typography>

              <Typography paragraph>
                Fue creado por Kent Beck como parte de la metodología de eXtreme
                Programming (XP) con la promesa de tener varios beneficios como
                veremos más adelante.
              </Typography>

              <Typography paragraph>
                Te voy a compartir mi experiencia usando TDD, los prejuicios que
                tenía al incio así como consejos y tips para que puedas
                beneficiarte y <b>subir tu nivel de seniority rápidamente.</b>
              </Typography>

              <Typography paragraph>
                Actualmente disfruto mucho programando con TDD, me gusta la
                experiencia de desarrollo y siento que mi dopamina recorre mi
                cuerpo cada vez que veo los tests que pasan en la terminal.
                Espero que pronto este sea tu caso también.
              </Typography>

              <Typography paragraph>
                Pero ¿Cómo aplicar TDD? ¿En qué consiste? Te voy a explicar el
                flujo de desarrollo a continuación.
              </Typography>

              <Typography
                variant="h5"
                component="h2"
                className={classes.subtitle}
              >
                Ciclo Red, Green, Refactor
              </Typography>

              <Typography paragraph>
                El ciclo de Red, Green, Refactor es la esencia de TDD y consiste
                en:
              </Typography>

              <Typography paragraph>
                <span style={{ color: "#b71c1c" }}>RED:</span> Comenzar creando
                una prueba automatizada que falle de un inicio. Por lo común,
                una prueba que falla tiene un color rojo en los tests runners.
              </Typography>

              <Typography paragraph>
                <span style={{ color: "#33691e" }}>GREEN:</span> Hacer lo mínimo
                necesario para que la prueba pase. Por lo común, una prueba que
                pasa tiene un color verde en un test runner.
              </Typography>

              <Typography paragraph>
                REFACTOR: Aplicar técnicas de refactor y buenas prácticas en el
                código creado hasta ahora. Principios SOLID u otros, por
                ejemplo.
              </Typography>

              <Typography paragraph>
                Puedes ver un ejemplo de TDD en el siguiente vídeo de menos de 3
                minutos.
              </Typography>

              <iframe
                width="100%"
                height={isMobile ? "auto" : "315"}
                src="https://www.youtube.com/embed/Cu9FzBtoEoo?controls=0"
                title="Conoce TDD con Javascript"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4" component="h1" gutterBottom>
                    Test Driven Development con ejemplos.
                  </Typography>
                  <Typography gutterBottom>
                    Debajo tendrás acceso a diferentes tutoriales y recursos que
                    puedes usar para aprender a usar TDD con una tecnología en
                    particular.
                  </Typography>
                </Grid>

                {tddTutorials.map(({ title, description, url }) => (
                  <Grid item xs={12} key={title}>
                    <Typography variant="h6" component="h2" color="primary">
                      <Link color="inherit" href={url} target="_blank">
                        - {title}
                      </Link>
                    </Typography>
                    <Typography>{description}</Typography>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="h4" component="h1" gutterBottom>
                ¿Cuáles son las Ventajas de Test Driven Development?
              </Typography>

              <Typography paragraph>
                Desde que comencé a probar los dulces sabores del TDD aspiro a
                siempre tener oportunidad de disfrutarlo en cualquier desarrollo
                que haga, sea personal o de trabajo.
              </Typography>

              <Typography paragraph>
                No estoy exagerando. A continuación te comparto las ventajas que
                considero que obtendrás si comienzasa aplicar TDD en tus
                proyectos.
              </Typography>

              <Typography
                variant="h5"
                component="h2"
                className={classes.subtitle}
              >
                Confianza en los cambios de código
              </Typography>

              <Typography paragraph>
                Imagina estar en un proyecto en el que cada vez que agregas
                nueva funcionalidad, en vez de preocuparte en si estás rompiendo
                algo, tuvieras la tranquilidad de que tus cambios se integran en
                perfecta armonía.
              </Typography>

              <Typography paragraph>
                O imagina que cuando hagas deploy a producción, en lugar de
                sentir ansiedad o quedarte hasta tarde haciendo reparaciones de
                emergencia, puedas pasar el resto del día agusto con tu familia,
                amigos o como gustes.
              </Typography>

              <Typography paragraph>
                Pues bien, eso lo puedes obtener cuando tienes un proyecto
                maduro en el que tu equipo implementa TDD.
              </Typography>

              <Typography paragraph>
                Si combinas TDD con una metodología ágil (de verdad y no sólo
                hacer juntitas de "estatus") y una cultura de Devops (como CI y
                CD), la gran parte de las cosas que puedan salir mal, serán
                detectadas a tiempo y trabajadas.
              </Typography>

              <Typography paragraph>
                Ahora bien, no digo que nunca habrá complicaciones. Problemas
                siempre habrán y en parte por eso tenemos trabajo.
              </Typography>

              <Typography paragraph>
                Lo que digo es: dado como un hecho incuestionable que siempre
                tendremos incertidumbre y problemas, hacer desarrollo dirigido
                por pruebas, una cultura ágil y de Devops, tú y tu equipo
                estarán mejor preparados para afrontarlos.
              </Typography>

              <Typography paragraph>
                De lo anterior, lo único que tú como desarrollador sí puedes
                controlar, es tu trabajo.
              </Typography>

              <Typography paragraph>
                No puedes controlar si en tu empresa hay una cultura ágil, o una
                de desarrollo en cascada (waterfall), o una tóxica a menos que
                tengas una posición de sufientemente peso como para alinear las
                cosas.
              </Typography>

              <Typography paragraph>
                Nota: si estás en un ambiente tóxico, salte lo antes posible,
                hay muchas empresas deseosas de contratarte y con un ambiente
                favorable para tu crecimiento profesional y salud mental. No le
                tengas miedo al éxito.
              </Typography>

              <Typography
                variant="h5"
                component="h2"
                className={classes.subtitle}
              >
                Código de mayor calidad.
              </Typography>

              <Typography paragraph>
                La naturaleza de TDD es ser una herramienta que nos ayude a
                guiar el diseño de nuestro software de una manera limpia,
                estructurada, con buenas prácticas y con todo lo necesario para
                que pueda seguir evolucionando.
              </Typography>

              <Typography paragraph>
                Y es que todo el ciclo consiste en ir creando fragmentos de
                código que resuelven una necesidad (pruebas automatizadas en
                base a funcionalidad) y asegurándonos de que está bien
                desarrollado (aplicando principios como SOLID, YAGNI, KISS, DRY,
                etc).
              </Typography>

              <Typography paragraph>
                Y para que lo anterior sea posible,{" "}
                <b>
                  es indispensable comenzar primero con las pruebas
                  automatizadas porque éstas van a ser nuestra guía de cómo ir
                  escribiendo el código y no al revés.
                </b>
              </Typography>

              <Typography paragraph>
                Escribir primero el código y luego los tests como se hace
                tradicionalmente NO nos permite tener el diseño emergente de
                nuestro software.
              </Typography>

              <Typography paragraph>
                Sin comenzar por las pruebas automatizadas, no podemos tener el
                ciclo virtuoso de tener garantía que cumplimos los requisitos
                con el menor esfuerzo y que aplicamos buenas prácticas conforme
                avanzamos en el desarrollo.
              </Typography>

              <Typography
                variant="h5"
                component="h2"
                className={classes.subtitle}
              >
                Desarrollo profesional como ingeniero de software
              </Typography>

              <Typography paragraph>
                Para aplicar TDD necesitas tener conocimientos de testing y de
                refactor, lo cuál involucra las buenas prácticas con los
                principios de desarrollo de software que diferencian entre
                código de mala calidad y código de calidad mundial.
              </Typography>

              <Typography paragraph>
                Tienes que comprender los diferentes tipos de pruebas: unit
                testing, integration testing, e2e testing. Las diferentes
                técnicas de refactor, a abstraer mejor, a solucionar problemas
                de manera más estructurada, en fin. Lo que llamamos buenas
                prácticas.
              </Typography>

              <Typography
                variant="h5"
                component="h2"
                className={classes.subtitle}
              >
                Experiencia de desarrollo
              </Typography>

              <Typography paragraph>
                Personalmente disfruto más desarrollar programas con test driven
                que hacerlo de manera tradicional.
              </Typography>

              <Typography paragraph>
                Probablemente sea porque trabajo en el ecosistema de Javascript
                el cuál ha madurado bastante en cuanto al testing automatizado e
                incluso el análisis estático de código.
              </Typography>

              <Typography paragraph>
                La verdad es que me siento muy bien cuando voy creando las
                pruebas, hago que pasen, mejoro el código constantemente y tengo
                garantía de que el programa hace lo que tiene que hacer.
              </Typography>

              <Typography variant="h4" component="h1" gutterBottom>
                Técnicas y estrategias
              </Typography>

              <Typography paragraph>
                En el libro de{" "}
                <a href="https://amzn.to/3zlL8Ss">
                  Test Driven Development By Example
                </a>{" "}
                del autor Kent Beck (lectura recomendada), nos comparte de
                estrategias para implementar TDD de una manera más rápida y
                estructurada.
              </Typography>

              <Typography
                variant="h5"
                component="h2"
                className={classes.subtitle}
              >
                Implementación obvia
              </Typography>

              <Typography paragraph>
                Como su nombre lo indica, la implementación obvia es hacer que
                tus pruebas pasen correctamente haciendo la implementación más
                simple y que pueda lograr que pasen otros tests derivados si los
                agregas.
              </Typography>

              <Typography paragraph>
                Por ejemplo, una función que sume dos números, la implementación
                obvia es retornar n1 + n2, y no importa cuántas pruebas hagas
                pasando diferentes números a la función, siempre van a pasar.
              </Typography>

              <Typography
                variant="h5"
                component="h2"
                className={classes.subtitle}
              >
                Implementación falsa.
              </Typography>

              <Typography paragraph>
                La técnica de implementación falsa consiste en hacer que la
                prueba inicial pase con éxito por medio de un "fake" o respuesta
                "hardcodeada", llevando así el concepto de lo mínimo posible a
                su máxima expresión.
              </Typography>

              <Typography paragraph>
                Es recomendable aplicarla cuando en un inicio no puedes hacer la
                implementación obvia.
              </Typography>

              <Typography
                variant="h5"
                component="h2"
                className={classes.subtitle}
              >
                Triangulación.
              </Typography>

              <Typography paragraph>
                Esta técnica consiste en ir aplicando fakes que satisfagan las
                pruebas, y conforme vayas agregando más pruebas, vas
                evolucionando tu implementación de estar usando fakes, a hacer
                la implementación real y satisfactoria.
              </Typography>

              <Typography paragraph>
                Es recomendada cuando no tienes ni idea de cómo vas a resolver
                el problema en la etapa inicial de tus tests.
              </Typography>

              <Typography paragraph>
                Por ejemplo, si haces una función que te retorne la suma de dos
                números, entonces la implementación obvia es hacer que la
                función retorne n1 + n2.
              </Typography>

              <Typography paragraph>
                Pero si haces una función que te retorne un cálculo algebraico
                complejo que no estás familiarizado del todo, probablemente sea
                buena idea comenzar retornando un valor fake "hardcodeado" e ir
                iterando con un set de pruebas diferentes en los que dados
                ciertos inputs a la función
              </Typography>

              <Typography variant="h4" component="h1" gutterBottom>
                TDD y metodologías ágiles como Scrum
              </Typography>

              <Typography paragraph>
                TDD hace mucha armonía con las metodologías ágiles como Scrum
                porque ambos se alinean en el desarrollo iterativo y progresivo
                de software en base a requisitos establecidos y un feedback
                rápido y constante.
              </Typography>

              <Typography paragraph>
                SCRUM es conocido como un marco de trabajo para gestionar
                proyectos de software, fuera del ámbito técnico. Es aquí donde
                lo complementamos con Test Driven.
              </Typography>

              <Typography paragraph>
                La única constante en un proyecto es el cambio. Hay que asumirlo
                y estar listos para abrazarlo cuando llegue con su respectiva
                negociación y no sentir ansiedad o estrés.
              </Typography>

              <Typography paragraph>
                Para que el flujo de desarrollo funcione correctamente, tenemos
                que tener historias de usuario bien hechas (aplicando las "3 C"
                por ejemplo), con criterios de aceptación bien definidos y las
                estimaciones de los equipos.
              </Typography>

              <Typography paragraph>
                Si para el momento en el que vas a codear no tienes una imagen
                completa de lo que la historia de usuario debe tener, o si los
                criterios de aceptación son muy ambiguos, entonces por más
                buenas prácticas que apliques en tu código con TDD, de poco va a
                servir porque tu código no vas a estar resolviendo el problema
                real que deberías resolver (que quizá ni siquiera nadie sepa aún
                cuál es).
              </Typography>

              <Typography variant="h4" component="h1" gutterBottom>
                TDD VS BDD
              </Typography>

              <Typography paragraph>
                BDD o Behauvior Driven Development por sus siglas en inglés, es
                una variación de TDD cuya diferencia radica en usar un lenguaje
                común (Given, When, Then) para personas técnicas y no técnicas
                del equipo y diseñando las pruebas en base al mismo.
              </Typography>

              <Typography paragraph>
                Para este punto, las pruebas están orientadas al usuario y su
                comportamiento en el sistema en lugar de la funcionalidad del
                sistema por sí mismo.
              </Typography>

              <Typography variant="h4" component="h1" gutterBottom>
                TDD VS ATDD
              </Typography>

              <Typography paragraph>
                ATDD o Acceptance Test Driven Development por sus siglas en
                inglés, es una variación de TDD cuya diferencia radica en hacer
                las pruebas automatizadas usando los criterios de aceptación de
                manera explícita.
              </Typography>

              <Typography paragraph>
                Para ello se necesita practicar una metodología ágil de manera
                correcta, lo que conlleva a tener una colaboración de calidad en
                el equipo.
              </Typography>

              <Typography paragraph>
                El proceso consiste en implementar las ceremonias ágiles
                correspondientes de la metodología ágil en cuestión, y una vez
                que el equipo tiene claro los criterios de aceptación, diseñar
                las pruebas en base a los mismos.
              </Typography>

              <Typography paragraph>
                Es común que este tipo de pruebas los haga un QA (Quality
                Assurance) pero no está restringido necesariamente a un rol en
                particular del equipo de desarrollo.
              </Typography>

              <Typography variant="h4" component="h1" gutterBottom>
                Mitos y conceptos erróneos
              </Typography>

              <Typography paragraph>
                A continuación te comparto cuáles son los principales mitos y
                prejuicios que he experimentado y visto de quienes me rodean con
                la esperanza de ayudarte en tu camino ninja (ok no).
              </Typography>

              <Typography
                variant="h5"
                component="h2"
                className={classes.subtitle}
              >
                Es contraintuitivo hacer una prueba de algo que aún no he
                creado.
              </Typography>

              <Typography paragraph>
                Al inicio en mi carrera como programador junior, no tenía
                experiencia creando pruebas automatizadas e incluso creía que
                eran una pérdida de tiempo (Ja, tan equivocado que estaba...).
              </Typography>

              <Typography paragraph>
                Mi día típico de trabajo consistía básicamente en:
              </Typography>

              <List>
                <ListItem>
                  <ListItemText primary="1 - Leer los criterios de aceptación del ticket de Jira." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="2 - Pensar cómo cumplirlos en base al proyecto actual." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3 - Ponerme a codear como loco." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="4 - Hacer pruebas manuales (yei...) para validar que no estuviera rompiendo algo" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="5 - Si acaso (casi nunca) hacer un test." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="6 - Mandar el Pull Request al repo (obvio sin Continuous Integration ni Continuous Deployment)." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="7 - Rezar que QA no me dijera con una sonrisa malvada que no cumplía con X criterio o peor, que había generado un bug nuevo en otra parte vete tu a saber." />
                </ListItem>
              </List>

              <Typography paragraph>
                Conforme fui madurando mis habilidades al enfrentarme a nuevos
                retos y{" "}
                <b>aprendiendo de desarrolladores con más experiencia que yo</b>
                , fui dándome cuenta que había una mejor manera de crear código.
              </Typography>

              <Typography paragraph>
                La primera vez que escuché sobre el desarrollo dirigido por
                pruebas, me pareció de lo más contraintuitivo del mundo.
              </Typography>

              <Typography paragraph>
                Es decir,{" "}
                <b>
                  ¿Cómo rayos iba a crear primero una prueba de algo que aún no
                  desarrollaba?
                </b>{" "}
                este fue <b> mi primer prejuicio.</b>
              </Typography>

              <Typography paragraph>
                Ahora me doy cuenta que pensar eso es de lo más normal al
                principio, por lo que si es justo lo que estás pensando mientras
                me lees, no te preocupes.
              </Typography>

              <Typography paragraph>
                Este prejuicio es normal porque comúnmente aprendemos a
                programar yendo directo a codear la solución de un problema y
                ver el resultado con una prueba manual (un output en la consola,
                algo visual en el navegador, una respuesta de un request, etc).
              </Typography>

              <Typography paragraph>
                Entonces comenzar primero con una prueba y luego codear la
                solución, es contrario a nuestra intuición.
              </Typography>

              <Typography paragraph>
                En realidad, lo único que cambia con TDD es que comienzas con
                una prueba automatizada que va a validar tu solución,{" "}
                <b>tal como lo harías como si ya funcionara.</b>
              </Typography>

              <Typography paragraph>
                También me he dado cuenta que este prejuicio surge cuando tienes
                pocos conocimientos de cómo crear pruebas automatizadas y de la
                tecnología que estés usando.
              </Typography>

              <Typography paragraph>
                Si ese es tu caso, te recomiendo que entonces adquieras
                experiencia creando tests de manera tradicional para que obengas
                más confianza y sepas cómo van los tiros.
              </Typography>

              <Typography
                variant="h5"
                component="h2"
                className={classes.subtitle}
              >
                Crear tests es una pérdida de tiempo, ¡Las cosas urgen!
              </Typography>

              <Typography paragraph>
                Por esta mala creencia es por la que me resistía a crear pruebas
                automatizadas, principalmente cuando estaba en momentos muy
                demandantes.
              </Typography>

              <Typography paragraph>
                Y es que resulta natural pensar: vale, por hacer esta
                funcionalidad de me toma X tiempo, PERO si incluyo pruebas, me
                tomará 2X por ejemplo.
              </Typography>

              <Typography paragraph>
                El error en este pensamiento es que{" "}
                <b>
                  ¡los tests deben ser considerados como parte del desarrollo de
                  la funcionalidad!
                </b>
              </Typography>

              <Typography paragraph>
                ¿Por qué? porque tenemos que resolver problemas del presente{" "}
                <b>
                  con soluciones que nos ayuden a avanzar más rápido en los
                  problemas del futuro.
                </b>
              </Typography>

              <Typography paragraph>
                ¿Cómo así? Sí, tal como lo lees. Hacer los tests es una{" "}
                <b>inversión</b> de esfuerzo que nos retornará ahorro de tiempo
                en el futuro.
              </Typography>

              <Typography paragraph>
                Si tengo pruebas automatizadas bien hechas que me alertan cuando
                hago cambios que rompen una funcionalidad, no me tengo que
                esperar hasta que QA o peor, el usuario final lo reporte (lo que
                puede ocasionar pérdidas para la empresa).
              </Typography>

              <Typography paragraph>
                Gracias a "hacer lo mínimo necesario para que pase la prueba"
                también nos ayuda a evitar optimizaciones prematuras que
                probablemente nunca necesitaremos{" "}
                <b>(principio YAGNI, You Aren't Gonna Need It)</b>.
              </Typography>

              <Typography paragraph>
                En virtud a las pruebas automatizadas, tengo un feedback mucho
                más rápido de si estoy haciendo las cosas bien que estar
                haciendo las mismas pruebas manuales repetidas veces (IUGH...!).
              </Typography>

              <Typography paragraph>
                Es nuestra responsabilidad hacer nuestro trabajo bien hecho.{" "}
                <b>
                  {" "}
                  Somos profesionales que aspiran a programar con la más alta
                  calidad posible.
                </b>
              </Typography>

              <Typography paragraph>
                Así que la próxima ves que tu Project Manager te presione
                diciendo que no hagas las pruebas, tienes un argumento qué
                ofrecer.
              </Typography>

              <Typography paragraph>
                Haz un favor a tu YO del futuro, te lo agradecerá.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  )
}

export default TestDrivenDevelopment

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`
