import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/posts"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <Posts title="Blog" />
  </Layout>
)

export default Blog
