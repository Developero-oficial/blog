import React from 'react'
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const BlogListItem = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug

  return (
    <article>
      <Card>
        <CardContent>
          <header>
            <Typography variant="h4" component="h2" gutterBottom>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </Typography>
            <small>{node.frontmatter.date}</small>
          </header>
          <section>
            <p
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
