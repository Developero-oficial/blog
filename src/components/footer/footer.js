import React from 'react'
import PropTypes from 'prop-types'

import './footer.module.css'

export const Footer = ({ socialLinks, children }) => {
  return (
    <footer>
      <h3>Redes sociales</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={socialLinks.youtube} data-testid="link-social-youtube">
            YouTube
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={socialLinks.facebook} data-testid="link-social-facebook">
            Facebook
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={socialLinks.github} data-testid="link-social-github">
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
