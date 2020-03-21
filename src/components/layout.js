import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"
import Welcome from "./welcome"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
    body {
      background: #F7F7F7;
    }

  `

const LayoutInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding-right: 1.0875rem;
`

const Layout = ({ homePage, children }) => {
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
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      {homePage && <Welcome content={homePage.node.content} />}
      <LayoutInner>
        <main>{children}</main>
        <Footer />
      </LayoutInner>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
