import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  mainContent: {
    padding: `${theme.spacing(8)}px 0px`,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  technologyContainer: {
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
  },
}));

export const LandingPageContainer = ({ technologies }) => {
  const classes = useStyles()
  return (
    <>
      <Grid container>
        <Grid item xs={12} className={classes.mainContent}>
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            Developero
          </Typography>

          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Cursos y tutoriales de programación
          </Typography>
        </Grid>

        <Grid container>
          {
            technologies.map(({ name }) => (
              <Grid item xs={12} md={4} className={classes.technologyContainer}>
                <Typography align="center" gutterBottom>
                  {name}
                </Typography>
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </>
  )
}
