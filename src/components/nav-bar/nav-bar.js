import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'

import { secondaryColor } from '../../utils/theme'

import styles from './nav-bar.module.css'

const NavBar = ({ children, location }) => {
  return (
    <div className={styles.container}>
      {children}
      <nav>
        <ul>
          <li className={location.pathname === '/' ? styles.selected : ''}>
            <Link to="/" data-testid="link-blog" style={{ color: secondaryColor }}>
              Blog
            </Link>
          </li>
          <li className={location.pathname === '/about' ? styles.selected : ''}>
            <Link to="/about" data-testid="link-about" style={{ color: secondaryColor }}>
              Sobre el autor
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

NavBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

export default NavBar
