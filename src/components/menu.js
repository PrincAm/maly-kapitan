import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import {
  animated,
  useTransition,
  useSpring,
  useChain,
  config,
} from "react-spring"

import { HOME_PAGE_SLUG } from "../pages/index"
import logo from "../images/logo.png"

// const MenuContainer = styled.div`
//   position: absolute;
//   /* display: ${({ isMenuOpened }) => (isMenuOpened ? "visible" : "none")}; */
//   height: 100vh;
//   width: 100%;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.9);
//   overflow-x: hidden;
//   transition: 0.5s;
// `

// const MenuContent = styled.div`
//   position: relative;
//   top: 25%;
//   width: ${({ isMenuOpened }) => (isMenuOpened ? "100%" : 0)};
//   text-align: center;
//   margin-top: 30px;
// `

const LogoImage = styled.img`
  height: 4rem;
  /* margin: 0.5rem 0.5rem 0.5rem 0; */
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  text-shadow: none;
`

const Nav = styled(animated.nav)`
  position: absolute;
  top: 0;
  left: 0;
  background: pink;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    margin: 0;
    padding: 0;
  }
`

const Li = styled(animated.li)`
  list-style: none;

  a {
    color: #363636;
    text-shadow: none;
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 1.3;
  }
`

const Logo = () => (
  <LogoContainer>
    <LogoImage src={logo} />
    <b>malý kapitán</b>
  </LogoContainer>
)

const links = [
  {
    name: "logo",
    component: <Logo />,
  },
  {
    name: "logo2",
    component: <Logo />,
  },
  {
    name: "logo3",
    component: <Logo />,
  },
]

const Menu = ({ isMenuOpened }) => {
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

  const menuItems = data.allWordpressPage.edges.map(node =>
    node.node.slug === HOME_PAGE_SLUG
      ? {
          id: node.node.id,
          title: node.node.title,
          slug: "/",
        }
      : node.node
  )

  const navRef = useRef()
  const liRef = useRef()
  const linksRef = useRef()

  const springProps = useSpring({
    ref: navRef,
    config: config.default,
    from: { width: "0%" },
    to: { width: isMenuOpened ? "100%" : "0%" },
  })

  const liTransitions = useTransition(
    isMenuOpened ? menuItems : [],
    item => item.id,
    {
      ref: liRef,
      trail: 400 / menuItems.length,
      from: { opacity: 0, transform: "translateY(20px)" },
      enter: { opacity: 1, transform: "translateY(0)" },
      leave: { opacity: 0, transform: "translateY(20px)" },
    }
  )

  const linksTransition = useTransition(
    isMenuOpened ? links : [],
    item => item.name,
    {
      ref: linksRef,
      trail: 400 / links.length,
      from: { opacity: 0, transform: "translateY(20px)" },
      enter: { opacity: 1, transform: "translateY(0)" },
      leave: { opacity: 0, transform: "translateY(20px)" },
    }
  )

  useChain(
    isMenuOpened ? [navRef, liRef, linksRef] : [linksRef, liRef, navRef],
    [0, isMenuOpened ? 0.4 : 0.6]
  )

  return (
    <Nav className="menu" style={springProps}>
      <ul>
        {liTransitions.map(({ item, key, props }) => (
          <Li key={key} style={props}>
            <Link to={item.slug} activeStyle={{ color: "#4f868e" }}>
              {item.title}
            </Link>
          </Li>
        ))}
      </ul>
      {linksTransition.map(({ item, key, props }) => item.component)}
    </Nav>
  )
}

export default Menu
