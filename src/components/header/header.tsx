import { useState, lazy, Suspense } from "react";
import styled from "@emotion/styled";
import { AnimatePresence } from "framer-motion";
import CombatLogo from "../combat-logo";
import BackButton from "./backButton";
import Cart from "@components/cart/cart";
const HeaderMenu = lazy(() => import("./header-menu"));

const Header = ({ isLoading }: { isLoading: boolean }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const closeNav = () => setNavOpen(false);
  const closeCart = () => setCartOpen(false);

  const toggleNav = () => {
    setNavOpen((x) => !x);
    closeCart();
  };
  const toggleCart = () => {
    setCartOpen((x) => !x);
    closeNav();
  };

  return (
    <>
      {/* <Cart navOpen={navOpen} cartOpen={cartOpen} toggleCart={toggleCart} /> */}
      <HeaderWrapper>
        <BackButton navOpen={navOpen} isLoading={isLoading} />
        <HeaderToggle onClick={toggleNav}>
          <CombatLogo isLoading={isLoading} />
          <Circle />
        </HeaderToggle>
      </HeaderWrapper>

      <Suspense fallback="">
        <AnimatePresence>
          {navOpen && <HeaderMenu closeNav={closeNav} />}
        </AnimatePresence>
      </Suspense>
    </>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: var(--header-height);
  align-items: center;
  justify-content: flex-start;
`;
const HeaderToggle = styled.button`
  position: relative;
  padding: var(--gap-s) var(--gap-xl);
  background-color: #000;
  flex-grow: 1;
  height: 100%;
  cursor: pointer;
  width: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    @media screen and (min-width: 700px) {
      background-color: var(--yellow-1);

      & > div {
        background-color: yellow;
        transform: scale(0.9);
      }
    }
  }

  &:active {
    background-color: var(--yellow-2);
    & > div {
      background-color: #f200ff;
      transform: scale(1.1);
    }
  }
`;
const Circle = styled.div`
  height: 100%;
  aspect-ratio: 1 / 1;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.2s;
`;
