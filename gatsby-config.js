const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `An example to learn how to source data form WordPress`,
    subtitle: `Sourcing data from WordPress`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `gilded-strobes.000webhostapp.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `gilded-strobes.000webhostapp.com`,
              protocol: `https`,
              quality: 90,
              maxWidth: 550,
              tracedSVG: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    "gatsby-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/svgs/,
        },
      },
    },
  ],
}
