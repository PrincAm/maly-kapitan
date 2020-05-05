import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"

const PostsInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding-top: 4rem;
`

const Posts = ({ title }) => {
  const data = useStaticQuery(graphql`
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
    }
  `)
  return (
    <PostsInner>
      <h1>{title}</h1>
      {data.allWordpressPost.edges.map(({ node }) => (
        <PostPreview
          key={node.id}
          excerpt={node.excerpt}
          date={node.date}
          title={node.title}
          slug={node.slug}
        />
      ))}
    </PostsInner>
  )
}

export default Posts
