import React from 'react'
import { render, screen } from '@testing-library/react'

import { NavBar } from './'

describe('NavBar', () => {
  beforeEach(() => {
    const props = {
      social: {
        youtube: 'youtube',
        facebook: 'facebook',
        github: 'github',
      },
      location: { pathname: '' },
    }

    render(<NavBar {...props} />).root
  })

  describe('when NavBar is mounted', () => {
    it('should renders the blog navigation links', async () => {
      const blogLinkText = await screen.findByText('Blog')
      const aboutLinkText = await screen.findByText('Sobre el autor')
      const youtubeLinkText = await screen.findByText('YouTube')
      const facebookLinkText = await screen.findByText('Facebook')
      const githubLinkText = await screen.findByText('Github')

      expect(blogLinkText).toBeTruthy()
      expect(aboutLinkText).toBeTruthy()
      expect(youtubeLinkText).toBeTruthy()
      expect(facebookLinkText).toBeTruthy()
      expect(githubLinkText).toBeTruthy()
    })
  })
})
