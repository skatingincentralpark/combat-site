import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { m } from "framer-motion";
import styled from "@emotion/styled";
import Link from "@components/link";
import { headerVariants, headerInnerVariants } from "@lib/animate";
import { TextSm } from "@components/shared-styles/typography";
import useLockBodyScroll from "@hooks/useLockBodyScroll";
import Logo from "../../../public/images/tomaskii.png";
import Sunnies from "../../../public/images/sunnies-aussie.png";
import Skele from "../../../public/images/skele.png";
import Image from "@components/image";

const navLinks = [
  { href: "/", name: "Home" },
  { href: "/shop", name: "Shop" },
  { href: "/news", name: "News" },
  { href: "/lookbooks", name: "Lookbooks" },
];

const navText = [
  "Combat was a clandestine newspaper during the German occupation of France throughout the Second World War.  It’s purpose was counter-propaganda and anyone found with involvement would risk punishment of their entire family.  Despite this, 1,200 underground titles were being published, with a total circulation of two million copies at its peak - totalling nearly twelve million copies over the course of the war.",
  "Otters are active hunters, chasing prey in the water or searching the beds of rivers, lakes or the seas. Most species live beside water, but river otters usually enter it only to hunt or travel, otherwise spending much of their time on land to prevent their fur becoming waterlogged. Sea otters are considerably more aquatic and live in the ocean for most of their lives.",
];

const HeaderMenu = ({ closeNav }: { closeNav: () => void }) => {
  const refScrollable = useRef<HTMLDivElement>(null);
  useLockBodyScroll(refScrollable);

  const refVideo = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (refVideo.current) refVideo.current.playbackRate = 0.5;
  }, [refVideo.current]);

  const imageObject = {
    caption: "Menu Image",
    url: Skele.src,
    height: Skele.height,
    width: Skele.width,
    aspectRatio: Skele.height / Skele.width,
  };

  const imageObjectMobile = {
    caption: "Menu Image",
    url: Sunnies.src,
    height: Sunnies.height,
    width: Sunnies.width,
    aspectRatio: Sunnies.height / Sunnies.width,
    dominantColor: "#fff000",
  };

  return (
    <HeaderMenuWrapper {...headerVariants}>
      <HeaderMenuInner {...headerInnerVariants}>
        <HeaderMenuLeft ref={refScrollable}>
          <HeaderMenuNav>
            {navLinks.map((x, i) => (
              <NavLink key={i} onClick={closeNav} href={x.href}>
                {x.name}
              </NavLink>
            ))}
          </HeaderMenuNav>
          <MenuImageMobile>
            <Image image={imageObjectMobile} />
          </MenuImageMobile>
          <HeaderMenuText>
            {navText.map((x) => (
              <TextSm paragraph key={x.slice(0, 8)}>
                {x}
              </TextSm>
            ))}
          </HeaderMenuText>
        </HeaderMenuLeft>
        <MenuImageDesktop>
          <Image image={imageObject} />
        </MenuImageDesktop>
      </HeaderMenuInner>
    </HeaderMenuWrapper>
  );
};

export default HeaderMenu;

const HeaderMenuWrapper = styled(m.div)`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 6;
  width: 100%;
  background-color: white;
  font-weight: 300;
  border-bottom: 1px solid black;
`;
const HeaderMenuInner = styled(m.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow-y: auto;

  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;
const HeaderMenuLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;
const HeaderMenuNav = styled.nav`
  padding-top: 7rem;
  transition: padding 250ms;
  font-size: 1.4rem;

  @media screen and (min-width: 700px) {
    padding-top: 9rem;
  }
`;
const HeaderMenuText = styled.div`
  padding: var(--gap-s) var(--gap-s) var(--gap-6xl) var(--gap-s);
  max-width: 50rem;

  @media screen and (min-width: 700px) {
    padding: var(--gap-xl);
  }
`;
const MenuImageDesktop = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  border-left: 1px solid var(--gray-3);
  padding: var(--gap-4xl);
  padding-top: 9rem;
  display: none;

  @media screen and (min-width: 700px) {
    display: flex;
    align-items: center;
  }

  max-width: 80rem;
  height: 100%;
`;
const MenuImageMobile = styled.div`
  display: block;
  width: 50%;
  padding: var(--gap-m) 0;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const NavLink = ({
  children,
  onClick,
  href,
}: {
  children: React.ReactNode;
  onClick: () => void;
  href: string;
}) => {
  const router = useRouter();

  const isActive =
    router.pathname !== "/" && href === "/"
      ? false
      : router.pathname.includes(href);

  return (
    <StyledNavLink>
      <Link href={href} onClick={onClick}>
        <StyledDot isActive={isActive} />
        {children}
      </Link>
    </StyledNavLink>
  );
};

const StyledNavLink = styled(m.div)`
  background-color: var(--nav-link-bg-color);
  color: var(--nav-link-color);
  --nav-link-color: #000;
  --dot-color: #fff; // scoped to link so the dot can use it
  --dot-scale: scale(1);
  transition: background-color 0.1s, color 0.1s;

  & a {
    display: flex;
    align-items: center;
    height: 100%;
    flex-grow: 1;
    padding: var(--gap-3xs) var(--gap-xl);
  }
  &:hover {
    @media screen and (min-width: 700px) {
      --nav-link-bg-color: var(--piss-1);
      --dot-color: #000; // scoped to link so the dot can use it
    }
  }
  &:active {
    --nav-link-color: var(--piss-2);
    --nav-link-bg-color: var(--yellow-4);
    --dot-scale: scale(1.4);
  }
`;
const StyledDot = styled.span<{ isActive: boolean }>`
  display: inline-block;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
  border: 1px solid #000;
  margin-right: var(--gap-xxs);
  background-color: white;
  transform: var(--dot-scale);
  transition: background-color 0.25s, transform 0.25s;
  background-color: ${({ isActive }) =>
    isActive ? "#000" : "var(--dot-color)"};
}

  @media screen and (min-width: 700px) {
`;
