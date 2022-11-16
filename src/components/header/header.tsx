import { useState, lazy, Suspense } from "react";
import styled from "@emotion/styled";
import { AnimatePresence } from "framer-motion";
import CombatLogo from "../combat-logo";
import BackButton from "./backButton";
const Cart = lazy(() => import("@components/cart/cart"));
const HeaderMenu = lazy(() => import("./header-menu"));

const Header = ({ isLoading }: { isLoading: boolean }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((x) => !x);
  const closeNav = () => setNavOpen(false);

  return (
    <>
      <HeaderWrapper>
        <BackButton navOpen={navOpen} isLoading={isLoading} />
        <HeaderToggle onClick={toggleNav}>
          <CombatLogo isLoading={isLoading} />
        </HeaderToggle>
        {/* <Suspense fallback="">
          <Cart />
        </Suspense> */}
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

  &:hover {
    @media screen and (min-width: 700px) {
      background-color: var(--yellow-1);
    }
  }

  &:active {
    background-color: var(--yellow-2);
  }
`;
