import React from 'react'
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'

export const BlogListItem = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug

  return (
    <article>
      <Card>
        <CardHeader
          title={(
            <Link to={node.fields.slug}>
              {title}
            </Link>
          )}
          subheader={<small>{node.frontmatter.date}</small>}
        />
        <Link to={node.fields.slug}>
        <CardMedia
          image={node.frontmatter.coverImage.publicURL}
          title={title}
          style={{ paddingTop: '56.25%', height: 0, }}
        />
        </Link>
        <CardContent>
          <section>
            <Typography
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </section>
        </CardContent>
      </Card>
    </article>
  )
}
