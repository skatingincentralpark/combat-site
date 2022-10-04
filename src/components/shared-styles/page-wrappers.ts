import styled from "@emotion/styled";

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
  height: 100%;
  padding-top: var(--gap-page-top);
  padding-bottom: var(--gap-xl);
  padding-left: ${({ px }) => (px ? gap[px] : 0)};
  padding-right: ${({ px }) => (px ? gap[px] : 0)};
`;

const StyledPageWrapperCentered = styled(StyledPageWrapper)<PageWrapperProps>`
  position: relative;
`;

export { StyledPageWrapper, StyledPageWrapperCentered };
