import React from "react"
import { Link } from "gatsby"

import styles from './nav-bar.module.css'

const NavBar = ({ social, location }) => {

  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li className={location.pathname === '/' ? styles.selected : ''}>
            <Link to="/">
              Blog
            </Link>
          </li>
          <li className={location.pathname === '/about' ? styles.selected : ''}>
            <Link to="/about">
              Sobre el autor
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href={social.youtube}>YouTube</a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href={social.facebook}>Facebook</a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href={social.github}>Github</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
