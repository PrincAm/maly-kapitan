import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const MenuContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #4f868e;
  color: #f7f7f7;
  opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
`

const Menu = ({ isOpened }) => (
  <MenuContainer>
    <Link to="/">
      <LogoContainer>
        <Logo src={logo} />
        <b>malý kapitán</b>
      </LogoContainer>
    </Link>
    <Links>
      <LinkContainer>
        <h6>
          <Link to="/" activeStyle={{ color: "#4f868e" }}>
            {homeNode.title}
          </Link>
        </h6>
      </LinkContainer>
      <LinkContainer>
        <h6>
          <Link to="/blog" activeStyle={{ color: "#4f868e" }}>
            Blog
          </Link>
        </h6>
      </LinkContainer>
      {menuNodes.map(({ node }) => (
        <LinkContainer key={node.id}>
          <h6>
            <Link
              to={node.slug === HOME_PAGE_SLUG ? "/" : node.slug}
              activeStyle={{ color: "#4f868e" }}
            >
              {node.title}
            </Link>
          </h6>
        </LinkContainer>
      ))}
    </Links>
  </MenuContainer>
)

export default Menu
