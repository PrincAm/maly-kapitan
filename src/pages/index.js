import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const HOME_PAGE_SLUG = "home"

export default ({ data }) => {
  const [homePage] = data.allWordpressPage.edges.filter(
    ({ node }) => node.slug === HOME_PAGE_SLUG
  )
  return (
    <Layout homePage={homePage}>
      <SEO title="Home" />
      <h1>Posts</h1>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            <Link to={`/post/${node.slug}`}>{node.title}</Link>
          </h3>
          <div dangerouslySetInnerHTML={{ __html: node.content }} />
        </div>
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
