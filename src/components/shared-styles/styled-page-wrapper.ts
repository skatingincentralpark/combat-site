import styled from "@emotion/styled";

type PageWrapperProps = {
  px?: keyof typeof gap;
};

const gap = {
  xs: "var(--gap-xs)",
  s: "var(--gap-s)",
  m: "var(--gap-m)",
  l: "var(--gap-l)",
  xl: "var(--gap-xl)",
  xxl: "var(--gap-xxl)",
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
