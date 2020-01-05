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
    "gatsby-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
