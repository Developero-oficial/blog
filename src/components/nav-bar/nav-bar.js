import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'

import styles from './nav-bar.module.css'

const NavBar = ({ social, location }) => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li className={location.pathname === '/' ? styles.selected : ''}>
            <Link to="/" data-testid="link-blog">
              Blog
            </Link>
          </li>
          <li className={location.pathname === '/about' ? styles.selected : ''}>
            <Link to="/about" data-testid="link-about">
              Sobre el autor
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href={social.youtube} data-testid="link-social-youtube">
              YouTube
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href={social.facebook} data-testid="link-social-facebook">
              Facebook
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href={social.github} data-testid="link-social-github">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

NavBar.propTypes = {
  social: PropTypes.shape({
    youtube: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

export default NavBar
