import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"

export const HOME_PAGE_SLUG = "home"

export default ({ data }) => {
  const [homePage] = data.allWordpressPage.edges.filter(
    ({ node }) => node.slug === HOME_PAGE_SLUG
  )
  return (
    <Layout homePage={homePage}>
      <SEO title="Home" />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          content
          slug
          title
          status
          template
          format
          excerpt
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
    allWordpressPage {
      edges {
        node {
          id
          content
          slug
          title
        }
      }
    }
  }
`
