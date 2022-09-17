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
  "From the essays of Emerson, to the stories of the Beat, these vanguards of individualism, freedom and improvisation give us comfort and confidence to work towards these values - the values which we believe are key to living a fulfilling life.",
  "We are moved firstly by the lessons written, and finally, from the atmosphere created by their words.",
  "Recondo is a repository of ideas expressed through strong technical foundations in design and well made goods.",
  "At its core, Recondo constructs end-to-end experiences through garments, site design, and visual - auditory media.",
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
              src="/images/luxun.png"
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
            src="/images/luxun.png"
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
  font-size: var(--font-size-xl);

  @media screen and (min-width: 700px) {
    padding-top: calc(var(--header-height) + 4rem);
  }
`;
const HeaderMenuText = styled.div`
  font-size: var(--font-size-m);
  padding: var(--gap-l);
  max-width: 50rem;
`;
const MenuImageDesktop = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  border-left: 1px solid #000;
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
  height: 200px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: var(--gap-l) 0 0 0;

  & > div:last-of-type {
    position: relative;
    height: 300%;
    width: 100%;
  }

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
  return (
    <StyledNavLink>
      <Link href={href} onClick={onClick}>
        <StyledDot />
        {children}
      </Link>
    </StyledNavLink>
  );
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
      --nav-link-color: #fff;
      --nav-link-bg-color: var(--yellow-1);
      --dot-color: #fff; // scoped to link so the dot can use it
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
