import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"

export default () => {
  const [isOnHomePage, setIsOnHomePage] = useState(false)
  useEffect(() => {
    setIsOnHomePage(window.location.pathname === "/")
  }, [])

  return (
    <Layout isOnHomePage={isOnHomePage}>
      <SEO title="Home" />
    </Layout>
  )
}
