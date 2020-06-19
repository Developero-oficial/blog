import React from 'react'
import { Link } from "gatsby"

import './logo.module.css'

import logo from '../../../static/Logotipo_original.png'

export const Logo = () => {
  return (
    <figure>
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}>
          <img
            src={logo}
            alt="Developero"
            style={{
              display: `block`,
              margin: `0 auto`,
              width: 130,
              height: 130,
            }}
          />
      </Link>
    </figure>
  )
}
