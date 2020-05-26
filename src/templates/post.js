import React, { Component } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Date = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;
`

const Post = ({ data }) => {
  const { title, date, content } = data.wordpressPost

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <Date>{date}</Date>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date(formatString: "DD.MM.YYYY")
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
