import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { HOME_PAGE_SLUG } from "../pages/index"
import logo from "../images/gatsby-icon.png"
import Hamburger from "./hamburger"

const HeaderContainer = styled.header`
  margin-bottom: 1.45rem;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 5rem;
  /* max-width: 960px; */
`

const Links = styled.div`
  display: flex;
  align-items: center;
`

const LinkContainer = styled.div`
  margin-right: 0.75rem;
  a {
    color: #363636;
    text-shadow: none;
  }
  h6 {
    margin-top: 1.2rem;
  }
`
const Logo = styled.img`
  height: 2rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  text-shadow: none;
`

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPage {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `)

  const { node: homeNode } = data.allWordpressPage.edges.find(
    ({ node }) => node.slug === HOME_PAGE_SLUG
  )

  const menuNodes = data.allWordpressPage.edges.filter(
    ({ node }) => node.slug !== HOME_PAGE_SLUG
  )

  return (
    <HeaderContainer>
      <Menu>
        <Link to="/">
          <LogoContainer>
            <Logo src={logo} />
            <b>malý kapitán</b>
          </LogoContainer>
        </Link>
        <Hamburger />
      </Menu>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
