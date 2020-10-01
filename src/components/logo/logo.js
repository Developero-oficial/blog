import React from "react"
import { Link } from "gatsby"

import "./logo.module.css"

import logo from "../../../static/Logotipo_original.png"

const defaultStyles = {
  display: `block`,
  margin: `0 auto`,
  width: 130,
  height: 130,
}

export const Logo = ({ style = defaultStyles }) => {
  return (
    <figure>
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        <img src={logo} alt="Developero" style={style} />
      </Link>
    </figure>
  )
}
