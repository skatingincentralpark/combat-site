import { useRouter } from "next/router";
import { default as NextImage } from "next/image";
import { m } from "framer-motion";
import styled from "@emotion/styled";
import Link from "../link";
import { headerVariants } from "@lib/animate";
import { TextSm } from "@components/shared-styles/typography";

const navLinks = [
  { href: "/", name: "Home" },
  { href: "/shop", name: "Shop" },
  { href: "/shop-2", name: "Shop POC" },
  { href: "/design-system", name: "Design System" },
  { href: "/news", name: "News" },
  { href: "/lookbooks", name: "Lookbooks" },
];

const navText = [
  'Once installed, trojans may perform a range of malicious actions. Many tend to contact one or more Command and Control (C2) servers across the Internet and await instruction. Since individual trojans typically use a specific set of ports for this communication, it can be relatively simple to detect them. Moreover, other malware could potentially "take over" the trojan, using it as a proxy for malicious action. [13]',
  'In German-speaking countries, spyware used or made by the government is sometimes called govware. Govware is typically a Trojan software used to intercept communications from the target computer. Some countries like Switzerland and Germany have a legal framework governing the use of such software. [14] [15] Examples of govware trojans include the Swiss MiniPanzer and MegaPanzer [16] and the German "state trojan" nicknamed R2D2. [14] German govware works by exploiting security gaps unknown to the general public and accessing smartphone data before it becomes encrypted via other applications. [17]',
];

const HeaderMenu = ({ closeNav }: { closeNav: () => void }) => {
  return (
    <HeaderMenuWrapper {...headerVariants()}>
      <HeaderMenuInner>
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
            src="/images/earth-laughs-in-flowers.png"
            layout="fill"
            objectFit="contain"
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
  padding: var(--gap-xl);
  max-width: 50rem;
`;
const MenuImageDesktop = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  border-left: 1px solid var(--gray-3);
  padding: var(--gap-4xl);
  display: none;

  @media screen and (min-width: 700px) {
    display: block;
  }

  & > div {
    position: relative;
    height: 100%;
    width: 100%;
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
  right: var(--gap-l);
  bottom: var(--gap-l);
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
    padding: var(--gap-3xs) var(--gap-xl);
    display: flex;
    align-items: center;
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
