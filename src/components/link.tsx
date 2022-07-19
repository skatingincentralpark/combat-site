import { default as NextLink } from "next/link";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
};

const Link = ({ children, href, onClick }: Props) => {
  return (
    <NextLink href={href}>
      <StyledLink onClick={onClick}>{children}</StyledLink>
    </NextLink>
  );
};

export default Link;

const StyledLink = styled.a`
  position: relative;
  display: block;
  width: 100%;
  cursor: pointer;
`;
