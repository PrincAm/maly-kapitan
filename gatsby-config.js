const path = require(`path`)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

module.exports = {
  siteMetadata: {
    title: 'Malý Kapitán šiperka',
    subtitle: 'Osobní psí Kapitánovi stránky',
    description: 'Mnoho informací, postřehů a fotek o psím plemeni šiperka'
  },
  plugins: [
    "gatsby-plugin-netlify-cache",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `307424.w24.wedos.ws/data`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `307424.w24.wedos.ws/data`,
              protocol: `http`,
              quality: 90,
              maxWidth: 550,
              tracedSVG: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUDNAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `gatsby/`,
        maxResults: 50,
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
        icon: "src/images/logo_small.png",
      },
    },
  ],
}
