const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Malý Kapitán šiperka `,
    subtitle: `Mnoho informací, postřehů a fotek`,
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
      resolve: `gatsby-plugin-cloudinary-image-gallery`,
      options: {
        cloudName: process.env.GATSBY_CLOUDINARY_CLOUDNAME,
        apiKey: process.env.GATSBY_CLOUDINARY_API_KEY,
        apiSecret: process.env.GATSBY_CLOUDINARY_API_SECRET,
        folders: ["gatsby"],
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Šiperka Malý Kapitán",
        short_name: "Malý Kapitán",
        start_url: "/",
        background_color: "#F7F7F7",
        theme_color: "#F7F7F7",
        display: "standalone",
        // icon: "src/images/logo_small.png",
      },
    },
  ],
}
