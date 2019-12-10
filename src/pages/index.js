import React from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/header"

export default ({ data }) => {
  return (
    <>
      <h1>Posts</h1>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.id}>
          <h1>{node.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: node.content }} />
        </div>
      ))}
      <h1>Pages</h1>
      {data.allWordpressPage.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.slug}>
            <h2>{node.title}</h2>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.content }} />
        </div>
      ))}
    </>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          slug
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
