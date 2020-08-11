import React, { useRef } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import {
  animated,
  useTransition,
  useSpring,
  useChain,
  config,
} from "react-spring"

import logo from "../images/logo.png"
import FacebookMediaIcon from "../images/svgs/facebook-square-brands.svg"
import InstagramMediaIcon from "../images/svgs/instagram-brands.svg"

const Nav = styled(animated.nav)`
  position: absolute;
  top: 0;
  left: 0;
  background: pink;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    margin: 0;
    padding: 0;
  }
  @media (max-width: 767px) {
    padding-top: 2rem;
    flex-direction: column;
    align-items: flex-start;
  }
`

const Li = styled(animated.li)`
  list-style: none;
  margin-left: 10rem;
  @media (max-width: 767px) {
    margin-left: 2rem;
  }

  a {
    color: #363636;
    text-shadow: none;
    font-size: 4.5rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 4.7rem;
    @media (max-width: 767px) {
      font-size: 3rem;
      line-height: 3.4rem;
    }
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
  @media (max-width: 767px) {
    margin-right: 2rem;
    flex-direction: row;
  }
`

const LogoImage = styled.img`
  height: 14rem;
  width: 14rem;
  @media (max-width: 767px) {
    margin-left: 2rem;
    height: 10rem;
    width: 10rem;
  }
`

const SocialMediasContainer = styled.div`
  display: flex;
  @media (max-width: 767px) {
    margin-left: 2rem;
  }
`

const SocialMediaIconStyles = css`
  height: 4.7rem;
  width: 4.7rem;
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

const Links = styled.div`
  display: flex;
  flex-direction: column;
`

const Mail = styled.a`
  font-weight: 500;
  &:hover {
    color: #363636;
    transition: color 0.5s ease;
  }
  @media (max-width: 767px) {
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
`

const SocialMedias = () => (
  <Links>
    <SocialMediasContainer>
      <a
        href="https://www.facebook.com/malyKapitan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://www.instagram.com/littlecaptain_and_burrrka/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </a>
    </SocialMediasContainer>
    <Mail
      href="mailto:info@malykapitan.cz"
      target="_blank"
      rel="noopener noreferrer"
    >
      info@malykapitan.cz
    </Mail>
  </Links>
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

const prepareMenuItems = edges => {
  const items = edges
    .sort((a, b) => a.node.menu_order - b.node.menu_order)
    .map(node => node.node)
  items.push(
    {
      id: "blog",
      title: "blog",
      slug: "blog",
    },
    {
      id: "gallery",
      title: "galerie",
      slug: "gallery",
    }
  )
  items.unshift({
    id: "home",
    title: "domů",
    slug: "",
  })
  return items
}

const Menu = ({ isMenuOpened, onMenuOpen }) => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPage {
        edges {
          node {
            id
            slug
            title
            menu_order
          }
        }
      }
    }
  `)

  const navRef = useRef()
  const liRef = useRef()
  const iconsRef = useRef()

  const springProps = useSpring({
    ref: navRef,
    config: config.default,
    from: { width: "0%" },
    to: { width: isMenuOpened ? "100%" : "0%" },
  })

  const menuItems = prepareMenuItems(data.allWordpressPage.edges)
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

  const handleLinkClick = () => {
    onMenuOpen(false)
  }

  return (
    <Nav className="menu" style={springProps}>
      <ul>
        {liTransitions.map(({ item, key, props }) => (
          <Li key={key} style={props}>
            <Link to={`/${item.slug}`} onClick={handleLinkClick}>
              {item.title}
            </Link>
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
