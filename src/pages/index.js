import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageExcerpt from "../components/pagePreview"

export const HOME_PAGE_SLUG = "home"

export default ({ data }) => {
  const [homePage] = data.allWordpressPage.edges.filter(
    ({ node }) => node.slug === HOME_PAGE_SLUG
  )
  return (
    <Layout homePage={homePage}>
      <SEO title="Home" />
      <h1>Poslední příspěvky</h1>
      {data.allWordpressPost.edges.map(({ node }) => (
        <PageExcerpt
          key={node.id}
          excerpt={node.excerpt}
          date={node.date}
          title={node.title}
          slug={node.slug}
        />
      ))}
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
