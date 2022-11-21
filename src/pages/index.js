import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Welcome from "../components/welcome"

const Index = () => {
  const [isOnHomePage, setIsOnHomePage] = useState(false)
  useEffect(() => {
    setIsOnHomePage(window.location.pathname === "/")
  }, [])

  return (
    <Layout isOnHomePage={isOnHomePage}>
      <Seo title="Home" />
      <Welcome />
    </Layout>
  )
}

export default Index
