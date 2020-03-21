import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const FooterInner = styled.footer`
  height: 4rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const DivPlaceholder = styled.div`
  width: 5rem;
`

const Footer = () => (
  <FooterInner>
    <DivPlaceholder />
    <div>© 2020, maly-kapitan.cz</div>
    <div>
      made by{" "}
      <a href="https://www.adamblazek.com/" target="_blank">
        adam blažek
      </a>
    </div>
  </FooterInner>
)

export default Footer
