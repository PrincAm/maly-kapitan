import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"

import Header from "./header"
import Welcome from "./welcome"
import Footer from "./footer"

import "../styles/main.css"

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={classNames("layout-main", { homepage: isOnHomePage })}>
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
