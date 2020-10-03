import React from "react"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"

import { NavBar } from "../nav-bar"
import { Footer } from "../footer"

import { theme } from "../../utils/theme"

const Layout = ({ location, social, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar location={location} />
      <Container maxWidth="md">
        <main>{children}</main>
      </Container>

      <Footer socialLinks={social} />
    </ThemeProvider>
  )
}

export default Layout
