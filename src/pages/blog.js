import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Posts from "../components/posts"

const Blog = () => (
  <Layout>
    <Seo title="Blog" />
    <Posts title="Blog" />
  </Layout>
)

export default Blog
