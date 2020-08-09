import PropTypes from "prop-types"
import React from "react"
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
  @media (max-width: 767px) {
    margin: 2.3rem 2rem 0 0;
  }
`

const Bar = styled.div`
  position: relative;
  width: 2.2rem;
  height: 0.2rem;
  background-color: ${({ isMenuOpened }) =>
    isMenuOpened ? "#f7f7f7" : "#000"};
  margin-bottom: 0.4rem;
  transition: 0.5s;
  @media (max-width: 767px) {
    height: 0.25rem;
  }
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
  @media (max-width: 767px) {
    transform: ${({ isMenuOpened }) =>
      isMenuOpened ? "rotate(45deg) translate(-0.45rem, -0.45rem)" : "none"};
  }
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

Hamburger.propTypes = {
  onOpenMenu: PropTypes.bool.isRequired,
  isMenuOpened: PropTypes.func.isRequired,
}
