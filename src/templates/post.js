import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Layout>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
