import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import logo from "../images/gatsby-icon.png"

const FooterInner = styled.footer`
  height: 4rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Copyright = styled.div`
  opacity: 0.7;
`

const Logo = styled.img`
  height: 2rem;
  margin: 0.5rem;
`

const DivPlaceholder = styled.div`
  width: 5rem;
`

const Footer = () => (
  <FooterInner>
    <Copyright>© 2020, maly-kapitan.cz</Copyright>
    <Logo src={logo} />
    <div>
      made by{" "}
      <a href="https://www.adamblazek.com/" target="_blank">
        adam blažek
      </a>
    </div>
  </FooterInner>
)

export default Footer
