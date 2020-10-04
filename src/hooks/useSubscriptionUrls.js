import { useStaticQuery, graphql } from "gatsby"

export const useSubscriptionUrls = () => {
  const {
    site: {
      siteMetadata: {
        subscriptionUrls: { feeds, reactHooksManualEbook },
      },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            subscriptionUrls {
              feeds
              reactHooksManualEbook
            }
          }
        }
      }
    `
  )

  return { feeds, reactHooksManualEbook }
}
