import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'

import { NavBar } from '../nav-bar'
import { Logo } from '../logo'
import { Footer } from '../footer'

const logoStyles = {
  display: `block`,
  margin: `0 auto`,
  width: 48,
  height: 48,
}

const Layout = ({ location, social, children }) => {
  return (
    <>
      <CssBaseline />
      <Container disableGutters>
        <NavBar social={social} location={location}>
          <Logo style={logoStyles} />
        </NavBar>

        <main>
          {children}
        </main>

        <Footer socialLinks={social}>
          <Typography>
            © {new Date().getFullYear()}, Developero
          </Typography>
        </Footer>
      </Container>
    </>
  )
}

export default Layout
