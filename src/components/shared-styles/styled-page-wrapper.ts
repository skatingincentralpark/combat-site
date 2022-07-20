import styled from "styled-components";

type PageWrapperProps = {
  px?: keyof typeof gap;
};

const gap = {
  xs: "var(--gap-3xs)",
  s: "var(--gap-xxs)",
  m: "var(--gap-xs)",
  l: "var(--gap-s)",
  xl: "var(--gap-m)",
  xxl: "var(--gap-l)",
};

const StyledPageWrapper = styled.div<PageWrapperProps>`
  width: 100%;
  height: fit-content;
  padding-top: var(--gap-page-top);
  padding-bottom: var(--gap-page-top);
  padding-left: ${({ px }) => (px ? gap[px] : 0)};
  padding-right: ${({ px }) => (px ? gap[px] : 0)};
`;

export { StyledPageWrapper };
