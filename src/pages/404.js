import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "captain_sleeping.jpg" }) {
        childImageSharp {
          resolutions(width: 400, height: 400) {
            ...GatsbyImageSharpResolutions_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>404 NENALEZENO</h1>
      <p>Hledáte stránku, která neexistuje :(</p>
      <Img
        resolutions={data.image.childImageSharp.resolutions}
        key={data.image.childImageSharp.resolutions.src}
      />
    </Layout>
  )
}

export default NotFoundPage
