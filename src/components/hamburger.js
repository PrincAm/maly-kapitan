import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"

const HamburgerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  margin: 2rem 5rem 0 0;
`

const Bar = styled.div`
  position: relative;
  width: 2.2rem;
  height: 0.2rem;
  background-color: ${({ isMenuOpened }) =>
    isMenuOpened ? "#f7f7f7" : "#363636"};
  margin-bottom: 0.4rem;
  transition: 0.5s;
`

const FirstBar = styled(Bar)`
    transform: ${({ isMenuOpened }) =>
      isMenuOpened ? "rotate(-45deg) translate(-0.45rem, 0.45rem)" : "none"};
  }
`

const SecondBar = styled(Bar)`
  opacity: ${({ isMenuOpened }) => (isMenuOpened ? 0 : 1)};
`

const ThirdBar = styled(Bar)`
  transform: ${({ isMenuOpened }) =>
    isMenuOpened ? "rotate(45deg) translate(-0.40rem, -0.40rem)" : "none"};
`

const Hamburger = ({ onOpenMenu, isMenuOpened }) => {
  return (
    <HamburgerContainer onClick={() => onOpenMenu(!isMenuOpened)}>
      <FirstBar isMenuOpened={isMenuOpened} />
      <SecondBar isMenuOpened={isMenuOpened} />
      <ThirdBar isMenuOpened={isMenuOpened} />
    </HamburgerContainer>
  )
}

export default Hamburger
