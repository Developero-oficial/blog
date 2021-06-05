import React from "react"
import { Link, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { SocialShare } from "../components/social-share"

deckDeckGoHighlightElement()

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { title, description, social, siteUrl } = data.site.siteMetadata
  const { previous, next, slug } = pageContext

  const socialUrl = `${siteUrl}/${slug}`

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        img={post.frontmatter.coverImage.publicURL}
        url={socialUrl}
      />
      <Layout
        location={location}
        title={title}
        description={description}
        social={social}
      >
        <Box my={6}>
          <Grid container justify="center" spacing={4}>
            <Grid item xs={12}>
              <header>
                <Grid container direction="column" spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h4" component="h1" color="textPrimary">
                      {post.frontmatter.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      component="h2"
                      color="textSecondary"
                      gutterBottom
                    >
                      {post.frontmatter.description}
                    </Typography>
                  </Grid>
                </Grid>
              </header>
            </Grid>

            <Grid item xs={12}>
              <img
                src={post.frontmatter.coverImage.publicURL}
                alt="react js tutorial en espanol 2020"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>

            <Grid item xs={12}>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">Comparte el conocimiento</Typography>
              <SocialShare url={socialUrl} title={post.frontmatter.title} />
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={12}>
              <nav>
                <ul
                  style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                  }}
                >
                  <li>
                    {previous && (
                      <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && (
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
        social {
          youtube
          facebook
          github
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        coverImage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
`
