import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import logo from "../images/logo.png"
import Hamburger from "./hamburger"
import Menu from "./menu"

import "./header.css"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const [isMenuOpened, setMenuOpened] = useState(false)

  useEffect(() => {
    if (isMenuOpened) {
      document.documentElement.style.overflow = "hidden"
      document.body.scroll = "no"
    } else {
      document.documentElement.style.overflow = "scroll"
      document.body.scroll = "yes"
    }
  }, [isMenuOpened])

  return (
    <div className="header-container">
      <Link to="/">
        <div className="header-logo-container">
          <Img
            fluid={data.logo.childImageSharp.fluid}
            className="header-logo"
          />
          <span className="header-companyName">malý kapitán</span>
        </div>
      </Link>
      <Hamburger isMenuOpened={isMenuOpened} onOpenMenu={setMenuOpened} />
      <Menu isMenuOpened={isMenuOpened} onOpenMenu={setMenuOpened} />
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
