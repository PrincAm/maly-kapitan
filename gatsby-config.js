module.exports = {
  siteMetadata: {
    title: `An example to learn how to source data form WordPress`,
    subtitle: `Sourcing data from WordPress`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        baseUrl: `gilded-strobes.000webhostapp.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
      }
    }
  ],
}
