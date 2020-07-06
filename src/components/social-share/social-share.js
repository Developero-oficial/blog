import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import TwitterIcon from '@material-ui/icons/Twitter'
import RedditIcon from '@material-ui/icons/Reddit'
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	RedditShareButton,
} from 'react-share'

const styles = { fontSize: 38, marginRight: 8 }

export const SocialShare = ({ url, title }) => {
  return (
    <>
      <FacebookShareButton url={url}>
        <FacebookIcon style={{ ...styles, color: '#3b5998' }} />
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={title}>
        <LinkedInIcon style={{ ...styles, color: '#0077b5' }} />
      </LinkedinShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon style={{ ...styles, color: '#1da1f2' }} />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsAppIcon style={{ ...styles, color: '#128c7e' }} />
      </WhatsappShareButton>
      <RedditShareButton url={url} title={title}>
        <RedditIcon style={{ ...styles, color: '#ff4500' }} />
      </RedditShareButton>
    </>
  )
}
