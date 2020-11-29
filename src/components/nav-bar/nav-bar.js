import React, { useState } from "react"
import { Link as GatsbyLink } from "gatsby"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import withWidth from "@material-ui/core/withWidth"
import Grid from "@material-ui/core/Grid"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"
import PropTypes from "prop-types"

const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  brandLink: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    borderRadius: 5,
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      textDecoration: "none",
    },
  },
  toolbarLinkSelected: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  highlightPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
  },
  highlightSecondary: {
    backgroundColor: theme.palette.secondary.main,
    color: "#555555",
  },
}))

const navBarLinks = [
  {
    path: "/about",
    label: "Acerca De",
  },
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "/courses-premium",
    label: "Cursos premium",
    highlightPrimary: true,
  },
  {
    path: "/ebooks",
    label: "Ebooks",
    highlightSecondary: true,
  },
]

const NavBar = ({ location, width }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const renderLinks = () =>
    navBarLinks.map(({ path, label, highlightPrimary, highlightSecondary }) => {
      const className = `${classes.toolbarLink} ${
        location.pathname === path && classes.toolbarLinkSelected
      }
      ${highlightPrimary && classes.highlightPrimary}
      ${highlightSecondary && classes.highlightSecondary}
      `
      return (
        <Grid item key={label}>
          <Link component={GatsbyLink} to={path} className={className}>
            {label}
          </Link>
        </Grid>
      )
    })

  const renderDrawIcon = () => (
    <IconButton
      color="primary"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="end"
    >
      <MenuIcon />
    </IconButton>
  )

  return (
    <Toolbar component="nav" variant="dense" className={classes.toolbar}>
      <Container maxWidth="md">
        <Grid
          container
          alignItems="center"
          alignContent="center"
          justify="space-between"
        >
          <Grid item xs={2}>
            <Typography variant="h5" variantMapping={{ h5: "h1" }}>
              <Link to="/" component={GatsbyLink} className={classes.brandLink}>
                Developero
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              {width === "xs" ? renderDrawIcon() : renderLinks()}
            </Grid>
          </Grid>

          <SwipeableDrawer
            anchor="left"
            open={open}
            onOpen={handleDrawerOpen}
            onClose={handleDrawerClose}
          >
            <List>
              {navBarLinks.map(({ path, label }) => (
                <ListItem button key={label}>
                  <Link to={path} component={GatsbyLink}>
                    {label}
                  </Link>
                </ListItem>
              ))}
            </List>
          </SwipeableDrawer>
        </Grid>
      </Container>
    </Toolbar>
  )
}

NavBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  width: PropTypes.string.isRequired,
}

export default withWidth()(NavBar)
