import React from "react"

import { rhythm } from "../../utils/typography"
import { NavBar } from '../nav-bar'
import { Logo } from '../logo'
import { Footer } from '../footer'

const Layout = ({ location, social, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <NavBar social={social} location={location}>
        <Logo />
      </NavBar>

      <hr style={{ margin: 'calc(1.75rem - 1px) 0'}} />

      <main>{children}</main>

      <Footer socialLinks={social}>
        © {new Date().getFullYear()}, Developero
      </Footer>
    </div>
  )
}

export default Layout
