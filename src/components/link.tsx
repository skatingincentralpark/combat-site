import { default as NextLink } from "next/link";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
};

const Link = ({ children, href, onClick }: Props) => {
  return (
    <StyledLink href={href} onClick={onClick}>
      {children}
    </StyledLink>
  );
};

export default Link;

const StyledLink = styled(NextLink)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
