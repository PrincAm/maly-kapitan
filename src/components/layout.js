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

const LayoutContainer = styled.div`
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 3rem;
  max-width: 60rem;
  min-height: ${({ homePage }) => (homePage ? 0 : "100vh")};
  figure {
    text-align: -webkit-center;
  }
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
    <LayoutContainer>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      {homePage && <Welcome content={homePage.node.content} />}
      <Main homePage={homePage}>{children}</Main>
      <Footer />
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
