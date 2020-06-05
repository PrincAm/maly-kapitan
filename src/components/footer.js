import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import logo from "../images/logo.png"
import FacebookIcon from "../images/svgs/facebook-square-brands.svg"
import InstagramIcon from "../images/svgs/instagram-brands.svg"

const FooterInner = styled.footer`
  height: 4rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5rem;
`

const Copyright = styled.div`
  opacity: 0.7;
`

const Logo = styled.img`
  height: 4rem;
  margin: 0.5rem;
`

const IconLinks = styled.div`
  display: flex;
  svg {
    height: 2rem;
    padding-left: 0.5rem;
    color: #363636;
    transition: color 0.5s ease;
  }
  svg:hover {
    color: #4f868e;
  }
`

const Footer = () => (
  <FooterInner>
    <Copyright>
      © 2020, malykapitan.cz
      <div>
        made by{" "}
        <a href="https://www.adamblazek.com/" target="_blank">
          adam blažek
        </a>
      </div>
    </Copyright>
    <Link to="">
      <Logo src={logo} />
    </Link>
    <IconLinks>
      <a href="https://www.facebook.com/malyKapitan/" target="_blank">
        <FacebookIcon />
      </a>
      <a
        href="https://www.instagram.com/littlecaptain_and_burrrka/"
        target="_blank"
      >
        <InstagramIcon />
      </a>
    </IconLinks>
  </FooterInner>
)

export default Footer
