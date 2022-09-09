import { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { m, AnimatePresence } from "framer-motion";
import Link from "./link";
import { useRouter } from "next/router";
import CombatLogo from "./combat-logo";

// Header Functionality:
//    - Change background-color depending on page (take prop through a layout component / regex)
//    - Change background-color and logo height if nav is open
//    - Increase animation speed when loading (css-variable)

const Header = () => {
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
  const navigateToShop = () => router.push("/shop");

  const parentVariants = {
    hidden: {
      y: "-100%",

      transition: {
        ease: "easeIn",
      },
    },
    show: {
      y: 0,

      transition: {
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const variantsBackButton = {
    initial: {
      width: 0,
      backgroundColor: "#d9ff00",
    },
    animate: {
      width: "var(--back-button-width)",
      backgroundColor: "var(--yellow-1)",
    },
    exit: {
      width: 0,
      backgroundColor: "#fff",
    },
  };

  return (
    <>
      <HeaderWrapper>
        <AnimatePresence>
          {isShopPath && !navOpen && (
            <HeaderBackButton
              onClick={navigateToShop}
              variants={variantsBackButton}
              initial="initial"
              exit="exit"
              animate="animate"
            >
              back
            </HeaderBackButton>
          )}
        </AnimatePresence>
        <HeaderToggle onClick={toggleNav}>
          <CombatLogo />
        </HeaderToggle>
      </HeaderWrapper>
      <AnimatePresence>
        {navOpen && (
          <HeaderMenuWrapper
            variants={parentVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <HeaderMenuInner>
              <HeaderMenuNav>
                <NavLink key={1}>
                  <Link href="/" onClick={closeNav}>
                    <StyledDot />
                    Home
                  </Link>
                </NavLink>
                <NavLink key={2}>
                  <Link href="/shop" onClick={closeNav}>
                    <StyledDot />
                    Shop
                  </Link>
                </NavLink>
                <NavLink key={3}>
                  <Link href="/news" onClick={closeNav}>
                    <StyledDot />
                    News
                  </Link>
                </NavLink>
                <NavLink key={4}>
                  <Link href="/lookbooks" onClick={closeNav}>
                    <StyledDot />
                    Lookbooks
                  </Link>
                </NavLink>
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
          </HeaderMenuWrapper>
        )}
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

  background-color: white;
`;
const HeaderToggle = styled.button`
  padding: var(--gap-s);
  background-color: #000;

  flex-grow: 1;

  height: 100%;
  cursor: pointer;

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
  --back-button-width: 10rem;
  width: var(--back-button-width);
  height: 100%;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;

  background-color: var(--yellow-1);
`;
const HeaderMenuWrapper = styled(m.div)`
  position: fixed;
  top: 0;
  left: 0;

  overflow-y: auto;
  z-index: 7;

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
const StyledDot = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: var(--gap-s);
  background-color: var(--dot-color);
  transform: var(--dot-scale);
  transition: background-color 0.25s, transform 0.25s;
`;
const HeaderMenuText = styled.div`
  font-size: var(--font-size-m);
  padding: var(--gap-s);

  max-width: 50rem;
`;

const NavLink = ({ children }: { children: React.ReactNode }) => {
  const childVariants = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
    show: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return <StyledNavLink variants={childVariants}>{children}</StyledNavLink>;
};

const StyledNavLink = styled(m.div)`
  border-bottom: 1px solid var(--gray-3);
  background-color: var(--nav-link-bg-color);
  color: var(--nav-link-color);
  --nav-link-color: black;
  --dot-color: var(--yellow-2); // scoped to link so the dot can use it
  --dot-scale: scale(1);

  & a {
    padding: var(--gap-xs);
  }
  &:first-of-type {
    border-top: 1px solid var(--gray-3);
  }
  &:hover {
    @media screen and (min-width: 700px) {
      background-color: var(--yellow-1);
      --nav-link-color: var(--yellow-1);
      --nav-link-bg-color: var(--yellow-1);
      --dot-color: var(--yellow-1); // scoped to link so the dot can use it
      --dot-scale: scale(1.2);
    }
  }
  &:active {
    --nav-link-color: white;
    --nav-link-bg-color: var(--yellow-2);
    --dot-color: white; // scoped to link so the dot can use it
    --dot-scale: scale(1.4);
  }
`;
