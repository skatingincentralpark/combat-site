import { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { m, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import CombatLogo from "../combat-logo";
import Cart from "../cart/cart";
import { headerBackButtonVariants } from "@lib/animate";
import HeaderMenu from "./header-menu";

const Header = ({ isLoading }: { isLoading: boolean }) => {
  const router = useRouter();
  const checkIfShopPath = useCallback(
    () => router.pathname.match(/\/shop\//),
    [router.pathname]
  );

  const [navOpen, setNavOpen] = useState(false);
  const [isShopPath, setIsShopPath] = useState(checkIfShopPath || null);

  useEffect(() => {
    setIsShopPath(checkIfShopPath());
  }, [router.pathname, checkIfShopPath]);

  const toggleNav = () => setNavOpen((x) => !x);
  const closeNav = () => {
    setNavOpen(false);
    setIsShopPath(null);
  };
  const navigateToShop = () => router.push("/shop-2");

  return (
    <>
      <HeaderWrapper>
        <AnimatePresence>
          {isShopPath && !navOpen && (
            <HeaderBackButton
              onClick={navigateToShop}
              {...headerBackButtonVariants()}
            >
              back
            </HeaderBackButton>
          )}
        </AnimatePresence>

        <HeaderToggle onClick={toggleNav} navOpen={navOpen}>
          <CombatLogo isLoading={isLoading} />
        </HeaderToggle>

        <Cart />
      </HeaderWrapper>

      <AnimatePresence>
        {navOpen && <HeaderMenu closeNav={closeNav} />}
      </AnimatePresence>
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
const HeaderToggle = styled.button<{ navOpen: boolean }>`
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
const HeaderBackButton = styled(m.button)`
  height: 100%;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
`;
