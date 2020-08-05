import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"
import Welcome from "./welcome"
import Footer from "./footer"

import "../styles/main.css"

const GlobalStyle = createGlobalStyle`
  body {
    background: #F7F7F7;
  }
`

const Layout = ({ isOnHomePage, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout-container">
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      {isOnHomePage && <Welcome />}
      <main className={`layout-main ${isOnHomePage ? "home" : ""}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
