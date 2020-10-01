import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"
import YouTubeIcon from "@material-ui/icons/YouTube"
import GitHubIcon from "@material-ui/icons/GitHub"
import FacebookIcon from "@material-ui/icons/Facebook"

const useStyles = makeStyles(theme => ({
  container: {
    paddingBottom: theme.spacing(2),
    borderTop: `2px solid #00ed65`,
  },
  link: {
    textDecoration: "none",
  },
}))

export const Footer = ({ socialLinks }) => {
  const classes = useStyles()

  return (
    <Box my={8}>
      <Grid container className={classes.container} spacing={1}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" my={2}>
            <Link
              target="_blank"
              rel="noopener"
              color="inherit"
              href={socialLinks.youtube}
              className={classes.link}
            >
              <YouTubeIcon fontSize="large" />
            </Link>

            <Link
              target="_blank"
              rel="noopener"
              color="inherit"
              href={socialLinks.github}
              className={classes.link}
            >
              <GitHubIcon fontSize="large" />
            </Link>

            <Link
              target="_blank"
              rel="noopener"
              color="inherit"
              href={socialLinks.facebook}
              className={classes.link}
            >
              <FacebookIcon fontSize="large" />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center">
            © {new Date().getFullYear()}, Developero
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

Footer.propTypes = {
  socialLinks: PropTypes.shape({
    youtube: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
}
