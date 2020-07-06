import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import { BlogListItem } from '../blog-list-item'

const useStyles = makeStyles((theme) => ({
  mainContent: {
    padding: `${theme.spacing(8)}px 0px`,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  postsContainer: {
    marginTop: theme.spacing(4),
  }
}));

export const BlogContainer = ({ posts }) => {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={12} className={classes.mainContent}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Developero Blog
        </Typography>

        <Typography variant="body1" component="h3" color="textPrimary" align="center" gutterBottom>
          Navega por las publicaciones más recientes sobre desarrollo de software.
        </Typography>
      </Grid>

      <Grid container className={classes.postsContainer} spacing={3}>
          {
            posts.map(({ node }) => (
              <Grid item xs={12} md={4} key={node.fields.slug}>
                <BlogListItem node={node} />
              </Grid>
            ))
          }
      </Grid>
    </>
  )
}
