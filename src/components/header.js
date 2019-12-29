import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { HOME_PAGE_SLUG } from "../pages/index"

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
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        {data.allWordpressPage.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.slug === HOME_PAGE_SLUG ? "/" : node.slug}
              activeStyle={{ color: "red" }}
            >
              <h2>{node.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
