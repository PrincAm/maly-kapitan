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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-width: 960px;
  margin: 0 auto;
  padding: 1.5rem 1.0875rem 0;
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
    <div>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      {homePage && <Welcome content={homePage.node.content} />}
      <LayoutInner>
        <main>{children}</main>
        <Footer />
      </LayoutInner>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
