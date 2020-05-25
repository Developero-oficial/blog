import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import NavBar from './nav-bar'

const Layout = ({ location, title, description, social, children }) => {
  const header = (
    <>
      <h1
        style={{
          ...scale(1),
          fontWeight: '600',
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      <h2 style={{
        marginTop: 0,
        marginBottom: rhythm(1.5),
        fontWeight: '600',
        ...scale(0.2),
      }}>
        {description}
      </h2>
    </>
  )
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>

      <NavBar social={social} location={location} />

      <hr />

      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Developero
      </footer>
    </div>
  )
}

export default Layout
