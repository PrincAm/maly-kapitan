import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

// import { rhythm } from "../utils/typography"
import { HOME_PAGE_SLUG } from "../pages/index"
import logo from "../images/gatsby-icon.png"

const HeaderContainer = styled.header`
  margin-bottom: 1.45rem;
  position: sticky;
  top: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
`

const Links = styled.div`
  display: flex;
  align-items: center;
`

const LinkContainer = styled.div`
  margin-right: 0.75rem;
  a {
    text-shadow: none;
  }
  h6 {
    margin-top: 1.2rem;
  }
`
const Logo = styled.img`
  height: 2rem;
  margin: 0.5rem;
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
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

  return (
    <HeaderContainer>
      <Menu>
        <LogoContainer>
          <Logo src={logo} />
          <b>maly-kapitan</b>
        </LogoContainer>
        <Links>
          {data.allWordpressPage.edges.map(({ node }) => (
            <LinkContainer key={node.id}>
              <h6>
                <Link
                  to={node.slug === HOME_PAGE_SLUG ? "/" : node.slug}
                  activeStyle={{ color: "#3282b8" }}
                >
                  {node.title}
                </Link>
              </h6>
            </LinkContainer>
          ))}
        </Links>
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
