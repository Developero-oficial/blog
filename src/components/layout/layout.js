import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"

import { NavBar } from "../nav-bar"
import { Footer } from "../footer"

import { theme } from "../../utils/theme"

const Layout = ({ location, social, children }) => {
  return (
    <Container maxWidth="md">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar location={location} />
        <main>{children}</main>

        <Footer socialLinks={social} />
      </ThemeProvider>
    </Container>
  )
}

export default Layout
