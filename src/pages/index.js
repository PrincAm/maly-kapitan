import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { node } from "prop-types"

export const HOME_PAGE_SLUG = "home"

export default ({ data }) => {
  const [homePage] = data.allWordpressPage.edges.filter(
    ({ node }) => node.slug === HOME_PAGE_SLUG
  )
  return (
    <Layout>
      <SEO title="Home" />
      <div dangerouslySetInnerHTML={{ __html: homePage.node.content }} />
      <h1>Posts</h1>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={`/post/${node.slug}`}>
            <h3>{node.title}</h3>
          </Link>
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
