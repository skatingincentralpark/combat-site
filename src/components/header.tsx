import { useState } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import Svg from "./svg";
import Link from "./link";

//TO:DO: Create a HeaderLinkComponent
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((x) => !x);

  const variants = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: "0",
    },
    exit: {
      y: "-100%",
    },
  };

  return (
    <>
      <StyledHeader>
        <button onClick={toggleNav}>
          <Svg src="/svg/combat-title.svg" width="18rem" priority />
        </button>
      </StyledHeader>
      <AnimatePresence>
        {navOpen && (
          <HeaderMenu
            variants={variants}
            initial="initial"
            exit="exit"
            animate="animate"
          >
            <HeaderMenuInner>
              <HeaderMenuNav>
                <StyledNavLink>
                  <Link href="/" onClick={toggleNav}>
                    <StyledDot />
                    Home
                  </Link>
                </StyledNavLink>
                <StyledNavLink>
                  <Link href="/shop" onClick={toggleNav}>
                    <StyledDot />
                    Shop
                  </Link>
                </StyledNavLink>
                <StyledNavLink>
                  <Link href="/" onClick={toggleNav}>
                    <StyledDot />
                    News
                  </Link>
                </StyledNavLink>
                <StyledNavLink>
                  <Link href="/" onClick={toggleNav}>
                    <StyledDot />
                    Lookbook
                  </Link>
                </StyledNavLink>
              </HeaderMenuNav>
              <HeaderMenuText>
                <p>
                  From the essays of Emerson, to the stories of the Beat, these
                  vanguards of individualism, freedom and improvisation give us
                  comfort and confidence to work towards these values - the
                  values which we believe are key to living a fulfilling life.
                </p>
                <p>
                  We are moved firstly by the lessons written, and finally, from
                  the atmosphere created by their words.
                </p>
                <p>
                  Recondo is a repository of ideas expressed through strong
                  technical foundations in design and well made goods.
                </p>
                <p>
                  At its core, Recondo constructs end-to-end experiences through
                  garments, site design, and visual - auditory media.
                </p>
              </HeaderMenuText>
            </HeaderMenuInner>
          </HeaderMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 9;

  display: flex;
  flex-direction: row;

  width: 100%;
  height: var(--header-height);

  align-items: center;
  justify-content: flex-start;

  background-color: white;

  & > button {
    padding: var(--gap-l);

    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  &:hover {
    background-color: var(--yellow-1);
  }

  &:active {
    background-color: var(--yellow-2);
  }
`;

const HeaderMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;

  overflow-y: auto;
  z-index: 8;

  width: 100%;
  height: 100vh;

  background-color: white;

  font-weight: 300;
`;

const HeaderMenuInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderMenuNav = styled.nav`
  padding-top: var(--header-height);
  display: flex;
  flex-direction: column;

  transition: padding 0.25s;

  font-size: var(--font-size-xl);

  @media screen and (min-width: 700px) {
    padding-top: calc(var(--header-height) + 4rem);
  }
`;
const StyledNavLink = styled.div`
  padding: var(--gap-xs) 0;
  border-bottom: 1px solid var(--gray-3);
  background-color: var(--nav-link-bg-color);
  color: var(--nav-link-color);
  --nav-link-color: black;
  --nav-link-bg-color: white;
  --dot-color: var(--yellow-2); // scoped to link so the dot can use it
  --dot-scale: scale(1);

  & a {
    padding: var(--gap-m);
  }
  &:first-of-type {
    border-top: 1px solid var(--gray-3);
  }
  &:hover {
    --nav-link-color: var(--yellow-1);
    --nav-link-bg-color: var(--yellow-1);
    --dot-color: var(--yellow-1); // scoped to link so the dot can use it
    --dot-scale: scale(1.2);
  }
  &:active {
    --nav-link-color: white;
    --nav-link-bg-color: var(--yellow-2);
    --dot-color: white; // scoped to link so the dot can use it
    --dot-scale: scale(1.4);
  }
`;
const StyledDot = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: var(--gap-l);
  background-color: var(--dot-color);
  transform: var(--dot-scale);
  transition: background-color 0.25s, transform 0.25s;
`;
const HeaderMenuText = styled.div`
  font-size: var(--font-size-m);
  padding: var(--gap-l);

  max-width: 50rem;
`;
