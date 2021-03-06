import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"

import Header from "./header"
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

  const [isScrolled, setSrolled] = useState(false)
  const handleScroll = () => {
    const position = window.pageYOffset
    if (position > 70) {
      setSrolled(true)
    } else {
      setSrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="layout-container">
      <Header
        siteTitle={data.site.siteMetadata.title}
        isScrolled={isScrolled}
      />
      <main className={classNames("layout-main", { homepage: isOnHomePage })}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isOnHomePage: PropTypes.bool,
}

Layout.defaultProps = {
  isOnHomePage: false,
}

export default Layout
