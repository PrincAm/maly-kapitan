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

const MainContainer = styled.div`
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`

const LayoutInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${({ homePage }) => (homePage ? 0 : "100vh")};
  max-width: 160rem;
  margin: 0 auto;
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
    <MainContainer>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      {homePage && <Welcome content={homePage.node.content} />}
      <LayoutInner homePage={homePage}>
        <main>{children}</main>
        <Footer />
      </LayoutInner>
    </MainContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
