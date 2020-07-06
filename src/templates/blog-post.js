import React from "react"
import { Link, graphql } from "gatsby"
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'

import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { title, description, social } = data.site.siteMetadata
  const { previous, next } = pageContext

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Layout location={location} title={title} description={description} social={social}>
        <Grid container justify="center" spacing={10} style={{ marginTop: 16 }}>
          <Grid item xs={12} md={8}>
            <article>
              <header>
                <Grid container direction="column" spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h4" component="h1" color="textPrimary">
                      {post.frontmatter.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                      {post.frontmatter.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Bio date={post.frontmatter.date} />
                  </Grid>
                </Grid>
              </header>

              <Divider style={{ margin: '24px auto'}} />

              <img
                src={post.frontmatter.coverImage.publicURL}
                alt="react js tutorial en espanol 2020"
                style={{ width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />

              <section dangerouslySetInnerHTML={{ __html: post.html }} />

            </article>

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
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
