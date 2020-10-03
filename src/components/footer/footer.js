import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"
import Container from "@material-ui/core/Container"
import YouTubeIcon from "@material-ui/icons/YouTube"
import GitHubIcon from "@material-ui/icons/GitHub"
import FacebookIcon from "@material-ui/icons/Facebook"

import { SubscriptionForm } from "../subscription-form"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.dark,
    marginTop: theme.spacing(4),
    borderTop: `4px solid #00ed65`,
    paddingBottom: theme.spacing(2),
    color: "#ffffff",
  },
  footer: {
    marginTop: theme.spacing(4),
  },
  newsLetetterContainer: {
    backgroundColor: "#F3F3EE",
    borderRadius: 5,
    // padding: 8,
  },
  link: {
    textDecoration: "none",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}))

export const Footer = ({ socialLinks }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Container maxWidth="md">
        <Grid container className={classes.footer} spacing={4}>
          <Grid item xs={12} md={4} className={classes.newsLetetterContainer}>
            <SubscriptionForm />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box display="flex" justifyContent="flex-end" my={2}>
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
      </Container>
    </div>
  )
}

Footer.propTypes = {
  socialLinks: PropTypes.shape({
    youtube: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
}
