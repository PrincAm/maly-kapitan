import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import {
  animated,
  useTransition,
  useSpring,
  useChain,
  config,
} from "react-spring"

import { HOME_PAGE_SLUG } from "../pages/index"
import logo from "../images/logo.png"
import FacebookMediaIcon from "../images/svgs/facebook-square-brands.svg"
import InstagramMediaIcon from "../images/svgs/instagram-brands.svg"

const Nav = styled(animated.nav)`
  position: absolute;
  top: 0;
  left: 0;
  background: pink; /* TODO change bg color */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    margin: 0;
    padding: 0;
  }
`

const Li = styled(animated.li)`
  list-style: none;
  margin-left: 10rem;

  a {
    color: #363636;
    text-shadow: none;
    font-size: 4.5rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 4.7rem;
  }
  a:hover {
    color: #4f868e;
    transition: color 0.5s ease;
  }
`
const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: none;
  margin-right: 10rem;
`

const LogoImage = styled.img`
  height: 14rem;
  width: 14rem;
`

const SocialMediasContainer = styled.div`
  display: flex;
`

const SocialMediaIconStyles = css`
  height: 4rem;
  width: 4rem;
  &:hover {
    color: #363636;
    transition: color 0.5s ease;
  }
`

const FacebookIcon = styled(FacebookMediaIcon)`
  ${SocialMediaIconStyles}
`

const InstagramIcon = styled(InstagramMediaIcon)`
  ${SocialMediaIconStyles}
`

const SocialMedias = () => (
  <SocialMediasContainer>
    <a href="https://www.facebook.com/malyKapitan/" target="_blank">
      <FacebookIcon />
    </a>
    <a
      href="https://www.instagram.com/littlecaptain_and_burrrka/"
      target="_blank"
    >
      <InstagramIcon />
    </a>
  </SocialMediasContainer>
)

const icons = [
  {
    name: "logo",
    component: <LogoImage src={logo} />,
  },
  {
    name: "socialMedia",
    component: <SocialMedias />,
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
  const iconsRef = useRef()

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

  const iconsTransition = useTransition(
    isMenuOpened ? icons : [],
    item => item.name,
    {
      ref: iconsRef,
      trail: 400 / icons.length,
      from: { opacity: 0, transform: "translateY(20px)" },
      enter: { opacity: 1, transform: "translateY(0)" },
      leave: { opacity: 0, transform: "translateY(20px)" },
    }
  )

  useChain(isMenuOpened ? [navRef, liRef] : [liRef, navRef], [
    0,
    isMenuOpened ? 0.4 : 0.6,
  ])

  useChain(isMenuOpened ? [navRef, iconsRef] : [iconsRef, navRef], [
    0,
    isMenuOpened ? 0.4 : 0.6,
  ])

  return (
    <Nav className="menu" style={springProps}>
      <ul>
        {liTransitions.map(({ item, key, props }) => (
          <Li key={key} style={props}>
            <Link to={item.slug}>{item.title}</Link>
          </Li>
        ))}
      </ul>
      <IconsContainer>
        {iconsTransition.map(({ item, key, props }) => (
          <animated.div key={key} style={props}>
            {item.component}
          </animated.div>
        ))}
      </IconsContainer>
    </Nav>
  )
}

export default Menu