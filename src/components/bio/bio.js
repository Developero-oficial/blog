/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { rhythm } from "../../utils/typography"

const Bio = ({ date }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            youtube
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <Grid container direction="column">
      <Grid item xs={12} style={{ display: 'flex' }}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <div>
          <Typography variant="caption" component="p">
            {author.name}, {author.summary}.
          </Typography>
          <Typography variant="caption">
            {date}
          </Typography>
        </div>
      </Grid>
    </Grid>
  )
}

export default Bio
