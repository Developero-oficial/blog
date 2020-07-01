import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

import { NavBar } from '../nav-bar'
import { Logo } from '../logo'
import { Footer } from '../footer'

import { theme } from '../../utils/theme'

const logoStyles = {
  display: `block`,
  margin: `0 auto`,
  width: 48,
  height: 48,
}

const navBarLinks = [
  {
    path: '/',
    label: 'Inicio',
  },
  {
    path: '/blog',
    label: 'Developero Blog',
  },
  {
    path: '/about',
    label: 'Sobre el autor',
  },
]

const Layout = ({ location, social, children }) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <NavBar
          location={location}
          links={navBarLinks}
          renderLogo={() => <Logo style={logoStyles} />}
        />
        <Container>
          <main>
            {children}
          </main>

          <Footer socialLinks={social} styles={{ marginTop: 32 }}>
            <Typography>
              © {new Date().getFullYear()}, Developero
            </Typography>
          </Footer>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Layout
