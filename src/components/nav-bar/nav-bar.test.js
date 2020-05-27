import React from 'react'
import renderer from 'react-test-renderer'

import NavBar from './'

describe('NavBar', () => {
  let root = null

  beforeEach(() => {
    const props = {
      social: {
        youtube: 'youtube',
        facebook: 'facebook',
        github: 'github',
      },
      location: { pathname: '' },
    }

    root = renderer.create(<NavBar {...props} />).root
  })

  describe('when NavBar is mounted', () => {
    it('should renders correctly', () => {
      expect(root).toBeTruthy()
    })

    it('should renders the blog navigation links', () => {
      const blogLinkText = root.findByProps({ 'data-testid': 'link-blog' }).children[0].props.children
      const aboutLinkText = root.findByProps({ 'data-testid': 'link-about' }).children[0].props.children
      const youtubeLinkText = root.findByProps({ 'data-testid': 'link-social-youtube' }).children[0]
      const facebookLinkText = root.findByProps({ 'data-testid': 'link-social-facebook' }).children[0]
      const githubLinkText = root.findByProps({ 'data-testid': 'link-social-github' }).children[0]

      expect(blogLinkText).toBe('Blog')
      expect(aboutLinkText).toBe('Sobre el autor')
      expect(youtubeLinkText).toBe('YouTube')
      expect(facebookLinkText).toBe('Facebook')
      expect(githubLinkText).toBe('Github')
    })
  })
})
