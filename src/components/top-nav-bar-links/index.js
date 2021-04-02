import React, { useState } from "react"
import { Link as GatsbyLink } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Link from "@material-ui/core/Link"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
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
  hide: {
    display: "none",
  },
  menu: {
    color: "#1717ff",
    textDecoration: "none",
  },
  toolbarLinkSelected: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  highlightPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
  },
}))

export const TopNavBarLinks = ({ location, navBarLinks }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const renderLink = ({ label, path, highlightPrimary }) => {
    const className = `${classes.toolbarLink} ${
      location.pathname === path && classes.toolbarLinkSelected
    }
    ${highlightPrimary && classes.highlightPrimary}
    `
    return (
      <Grid item key={label}>
        <Link component={GatsbyLink} to={path} className={className}>
          {label}
        </Link>
      </Grid>
    )
  }

  return navBarLinks.map(({ path, label, highlightPrimary, items }) => {
    if (!items) {
      return renderLink({ path, label, highlightPrimary })
    }

    return (
      <Grid item key={label}>
        <a
          href=""
          aria-controls="simple-menu"
          onClick={handleMenuClick}
          onMouseOver={handleMenuClick}
          onFocus={handleMenuClick}
          className={`${classes.toolbarLink} ${classes.menu}`}
        >
          {label}
        </a>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {items.map(subItem => (
            <MenuItem onClick={handleMenuClose} key={subItem.label}>
              <Link component={GatsbyLink} to={subItem.path}>
                {subItem.label}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    )
  })
}
