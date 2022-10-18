import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { default as NextImage } from "next/image";
import { m } from "framer-motion";
import styled from "@emotion/styled";
import Link from "../link";
import { headerVariants } from "@lib/animate";
import { TextSm } from "@components/shared-styles/typography";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

const navLinks = [
  { href: "/", name: "Home" },
  { href: "/shop", name: "Shop" },
  { href: "/shop-2", name: "Shop POC" },
  { href: "/design-system", name: "Design System" },
  { href: "/news", name: "News" },
  { href: "/news/item-1", name: "News Item Variation 1" },
  { href: "/news/item-2", name: "News Item Variation 2" },
  { href: "/news/item-3", name: "News Item Variation 3" },
  { href: "/lookbooks", name: "Lookbooks" },
];

const navText = [
  // 'Once installed, trojans may perform a range of malicious actions. Many tend to contact one or more Command and Control (C2) servers across the Internet and await instruction. Since individual trojans typically use a specific set of ports for this communication, it can be relatively simple to detect them. Moreover, other malware could potentially "take over" the trojan, using it as a proxy for malicious action. [13]',
  // 'In German-speaking countries, spyware used or made by the government is sometimes called govware. Govware is typically a Trojan software used to intercept communications from the target computer. Some countries like Switzerland and Germany have a legal framework governing the use of such software. [14] [15] Examples of govware trojans include the Swiss MiniPanzer and MegaPanzer [16] and the German "state trojan" nicknamed R2D2. [14] German govware works by exploiting security gaps unknown to the general public and accessing smartphone data before it becomes encrypted via other applications. [17]',
  "Combat was a clandestine newspaper during the German occupation of France throughout the Second World War.  It’s purpose was counter-propaganda and anyone found with involvement would risk punishment of their entire family.  Despite this, 1,200 underground titles were being published, with a total circulation of two million copies at its peak - totalling nearly twelve million copies over the course of the war.",
  "Otters are active hunters, chasing prey in the water or searching the beds of rivers, lakes or the seas. Most species live beside water, but river otters usually enter it only to hunt or travel, otherwise spending much of their time on land to prevent their fur becoming waterlogged. Sea otters are considerably more aquatic and live in the ocean for most of their lives.",
];

const HeaderMenu = ({ closeNav }: { closeNav: () => void }) => {
  const refScrollable = useRef<HTMLDivElement>(null);
  useLockBodyScroll(refScrollable);

  const [imageLoaded, setImageLoaded] = useState(false);

  const doFadeIn = () => {
    setImageLoaded(true);
  };

  const refVideo = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (refVideo.current) refVideo.current.playbackRate = 0.5;
  }, [refVideo.current]);

  return (
    <HeaderMenuWrapper {...headerVariants()}>
      <HeaderMenuInner ref={refScrollable}>
        <HeaderMenuNav>
          {navLinks.map((x, i) => (
            <NavLink key={i} onClick={closeNav} href={x.href}>
              {x.name}
            </NavLink>
          ))}
        </HeaderMenuNav>
        <MenuImageMobile>
          <div>
            <NextImage
              src="/images/earth-laughs-in-flowers.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </MenuImageMobile>
        <HeaderMenuText>
          {navText.map((x) => (
            <TextSm paragraph key={x.slice(0, 8)}>
              {x}
            </TextSm>
          ))}
        </HeaderMenuText>
      </HeaderMenuInner>
      <MenuImageDesktop>
        <div>
          <NextImage
            src="/images/skull/1.png"
            layout="fill"
            objectFit="contain"
            className={`transparent ${imageLoaded ? "hasLoaded" : ""}`}
            onLoadingComplete={doFadeIn}
          />
          <NextImage
            src="/images/skull/2.png"
            layout="fill"
            objectFit="contain"
            className={`transparent ${imageLoaded ? "hasLoaded" : ""}`}
            onLoadingComplete={doFadeIn}
          />
          <NextImage
            src="/images/skull/3.png"
            layout="fill"
            objectFit="contain"
            className={`transparent ${imageLoaded ? "hasLoaded" : ""}`}
            onLoadingComplete={doFadeIn}
          />
          <NextImage
            src="/images/skull/4.png"
            layout="fill"
            objectFit="contain"
            className={`transparent ${imageLoaded ? "hasLoaded" : ""}`}
            onLoadingComplete={doFadeIn}
          />
        </div>
      </MenuImageDesktop>
    </HeaderMenuWrapper>
  );
};

export default HeaderMenu;

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
  display: flex;
  flex-direction: row;

  & video {
    border: 1px solid black;
  }
`;
const HeaderMenuInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;
const HeaderMenuNav = styled.nav`
  padding-top: calc(var(--header-height) + 2rem);
  transition: padding 250ms;
  font-size: 1.4rem;

  @media screen and (min-width: 700px) {
    padding-top: calc(var(--header-height) + 4rem);
  }
`;
const HeaderMenuText = styled.div`
  padding: var(--gap-s);
  max-width: 50rem;

  @media screen and (min-width: 700px) {
    padding: var(--gap-xl);
  }
`;
const MenuImageDesktop = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  border-left: 1px solid var(--gray-3);
  padding: var(--gap-4xl);
  padding-top: 9rem;
  display: none;

  @media screen and (min-width: 700px) {
    display: block;
  }

  & > div {
    position: relative;
    height: 100%;
    width: 100%;
  }

  & img {
    &.transparent {
      opacity: 0;
      transition: opacity 0.25s linear;
      will-change: opacity;
    }
    &.hasLoaded {
      opacity: 1;
    }
  }
`;
const MenuImageMobile = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: var(--gap-l) 0 0 0;
  position: absolute;
  right: var(--gap-xl);
  bottom: var(--gap-xl);
  height: 10rem;
  width: 10rem;
  opacity: 0.2;
  animation: fadeOut 2s ease infinite alternate;

  @media screen and (min-width: 700px) {
    display: none;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: rotate(0deg);
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.2;
      transform: rotate(360deg);
    }
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

  return (
    <StyledNavLink>
      <Link href={href} onClick={onClick}>
        <StyledDot isActive={router.pathname === href} />
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
  /* font-family: "Bitcount Mono Single Lt Circle", "Courier New", Courier,
    monospace;
  -webkit-font-smoothing: initial;
  font-size: 1.6rem; */

  & a {
    display: flex;
    align-items: center;
    height: 100%;
    flex-grow: 1;
    padding: var(--gap-3xs) var(--gap-s);

    @media screen and (min-width: 700px) {
      padding: var(--gap-3xs) var(--gap-xl);
    }
  }
  &:hover {
    @media screen and (min-width: 700px) {
      /* --nav-link-color: #fff; */
      --nav-link-bg-color: var(--piss-1);
      --dot-color: #000; // scoped to link so the dot can use it
    }
  }
  &:active {
    --nav-link-color: var(--piss-2);
    --nav-link-bg-color: var(--yellow-4);
    /* --dot-color: var(--piss-1); // scoped to link so the dot can use it */
    --dot-scale: scale(1.4);
  }
`;
const StyledDot = styled.span<{ isActive: boolean }>`
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  border: 1px solid #000;
  margin-right: var(--gap-xs);
  background-color: ${({ isActive }) =>
    isActive ? "#000" : "var(--dot-color)"};
  transform: var(--dot-scale);
  transition: background-color 0.25s, transform 0.25s;
`;
