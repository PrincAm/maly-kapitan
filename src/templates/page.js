import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = ({ data }) => {
  const { title, content } = data.wordpressPage

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
