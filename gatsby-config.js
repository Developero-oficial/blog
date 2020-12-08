module.exports = {
  siteMetadata: {
    title: `Developero`,
    author: {
      name: `Juan Correa`,
      summary: `autodidacta, curioso y apasionado en el desarrollo de software`,
    },
    description: `Ebooks, Cursos, Tutoriales, Videos y más sobre ✅ DESARROLLO  DE SOFTWARE Y APPS DEL MUNDO REAL en Developero`,
    siteUrl: `https://developero.io`,
    social: {
      youtube: `https://www.youtube.com/c/developero`,
      facebook: "https://www.facebook.com/DeveloperoOficial/",
      github: "https://github.com/Developero-oficial",
    },
    friends: {
      tddreactjs: "http://tddreactjs.com/",
    },
    subscriptionUrls: {
      feeds: "https://developero.ipzmarketing.com/f/adJdhFI4A9w",
      reactHooksManualEbook:
        "https://developero.ipzmarketing.com/f/YhELNu9F9IU",
    },
    premiumCourses: {
      tddReact:
        "https://www.udemy.com/course/tdd-react-js/?referralCode=F40803D2C4D2934AB038",
    },
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=1]":
                  "MuiBox-root MuiBox-root-2 MuiTypography-h4 MuiTypography-colorTextPrimary",
                "heading[depth=2]":
                  "MuiBox-root MuiBox-root-2 MuiTypography-h5 MuiTypography-colorTextPrimary",
                paragraph: "MuiTypography-body1 MuiTypography-gutterBottom",
              },
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Developero Blog`,
        short_name: `Developero`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#90a4ae`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/awesome-sitemap.xml`,
        exclude: ["/about/", "/blog/", "/confirm/"],
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
