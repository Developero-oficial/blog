/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import picImg from "../../../content/assets/profile-pic.jpeg"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
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
    <Grid container>
      <Grid item xs={1}>
        <img
          src={picImg}
          alt={author.name}
          style={{
            marginBottom: 0,
            width: 50,
            height: 50,
            borderRadius: "100%",
          }}
        />
      </Grid>
      <Grid
        item
        xs={10}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          style={{ verticalAlign: "middle" }}
          variant="subtitle1"
          component="p"
        >
          {author.name}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Bio
