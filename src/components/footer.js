import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import FacebookIcon from "../images/svgs/facebook-square-brands.svg"
import InstagramIcon from "../images/svgs/instagram-brands.svg"

import "../styles/footer.css"

const Footer = () => {
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
  return (
    <footer className="footer-container">
      <div className="footer-copyright">
        © 2020 malykapitan.cz
        <div>
          <a
            className="footer-mail"
            href="mailto:info@malykapitan.cz"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@malykapitan.cz
          </a>
        </div>
      </div>
      <Link to="/">
        <Img fluid={data.logo.childImageSharp.fluid} className="footer-logo" />
      </Link>
      <div className="footer-iconLinks">
        <a
          href="https://www.facebook.com/malyKapitan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className="footer-socialMedia-icon" />
        </a>
        <a
          href="https://www.instagram.com/littlecaptain_and_burrrka/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="footer-socialMedia-icon" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
