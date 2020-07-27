import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import logo from "../images/logo.png"
import Hamburger from "./hamburger"
import Menu from "./menu"

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const Links = styled.div`
  display: flex;
  align-items: center;
`

const LinkContainer = styled.div`
  a {
    color: #363636;
    text-shadow: none;
  }
  h6 {
    margin-top: 1.2rem;
  }
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  text-shadow: none;
  margin: 1.45rem 0 0 5rem;
`
const Logo = styled(Img)`
  height: 3.2rem;
  width: 3.2rem;
  margin-bottom: 0;
`
const CompanyName = styled.span`
  color: #000;
  font-size: 1.3rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-left: 0.5rem;
`

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

  console.log(data)

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
    <HeaderContainer>
      <Link to="/">
        <LogoContainer>
          <Logo fluid={data.logo.childImageSharp.fluid} />
          <CompanyName>malý kapitán</CompanyName>
        </LogoContainer>
      </Link>
      <Hamburger isMenuOpened={isMenuOpened} onOpenMenu={setMenuOpened} />
      <Menu isMenuOpened={isMenuOpened} onOpenMenu={setMenuOpened} />
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
