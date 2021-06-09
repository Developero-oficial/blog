import React from "react"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CardHeader from "@material-ui/core/CardHeader"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: "#F3F3EE",
    borderRadius: 5,
    boxShadow: "none",
  },
  link: {
    textDecoration: "none",
  },
}))

export const BlogListItem = ({ node }) => {
  const classes = useStyles()
  const title = node.frontmatter.title || node.fields.slug

  return (
    <article>
      <Card classes={{ root: classes.card }}>
        <CardHeader
          title={
            <Link to={node.fields.slug} className={classes.link}>
              <Typography variant="h5" component="h2" color="primary">
                {title}
              </Typography>
            </Link>
          }
          subheader={
            <Typography variant="body2">{node.frontmatter.date}</Typography>
          }
        />
        <Link to={node.fields.slug}>
          <CardMedia
            image={node.frontmatter.coverImage.publicURL}
            title={title}
            style={{ paddingTop: "56.25%", height: 0 }}
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
