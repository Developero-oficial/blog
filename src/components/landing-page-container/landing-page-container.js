import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    padding: `${theme.spacing(8)}px 0px`,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  technologyContainer: {
    marginTop: theme.spacing(4),
  },
  technologyElement: {
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

        <Grid container className={classes.technologyContainer}>
          {
            technologies.map(({ name, description, subDescription }) => (
              <Grid
                key={name}
                item
                xs={12}
                md={4}
                className={classes.technologyElement}
              >
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="h2" align="center" gutterBottom>
                      {name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h3"
                      color="textSecondary"
                      align="center"
                      gutterBottom
                    >
                      {description}
                    </Typography>
                    <Typography align="center" gutterBottom>
                      {subDescription}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </>
  )
}
