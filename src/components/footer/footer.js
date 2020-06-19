import React from 'react'
import PropTypes from 'prop-types'

import './footer.module.css'

import { secondaryColor } from '../../utils/theme'

export const Footer = ({ socialLinks, children }) => {
  return (
    <footer>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={socialLinks.youtube}
            data-testid="link-social-youtube"
            style={{ color: secondaryColor }}>
            YouTube
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={socialLinks.facebook}
            data-testid="link-social-facebook"
            style={{ color: secondaryColor }}>
            Facebook
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={socialLinks.github}
            data-testid="link-social-github"
            style={{ color: secondaryColor }}
            >
            Github
          </a>
        </li>
      </ul>

      <p>
        {children}
      </p>
    </footer>
  )
}

Footer.propTypes = {
  socialLinks: PropTypes.shape({
    youtube: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
}
