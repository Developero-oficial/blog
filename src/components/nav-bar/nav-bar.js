import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingBottom: theme.spacing(1),
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  toolbarLinkSelected: {
    color: theme.palette.secondary.main
  },
}));

const NavBar = ({ renderLogo, location, links }) => {
  const classes = useStyles()

  return (
    <AppBar position="static" color="transparent">
      <Toolbar component="nav" variant="dense" className={classes.toolbar}>
          {renderLogo()}

          <div>
            {
              links.map(({ path, label}) => (
                <Link
                  key={label}
                  component={GatsbyLink}
                  to={path}
                  className={`${classes.toolbarLink} ${location.pathname === path && classes.toolbarLinkSelected}`}>
                    {label}
                </Link>
              ))
            }
          </div>
      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  renderLogo: PropTypes.func.isRequired,
}

export default NavBar
