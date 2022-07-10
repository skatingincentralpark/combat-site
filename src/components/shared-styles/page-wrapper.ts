import styled from "@emotion/styled";

type PageWrapperProps = {
  px?: keyof typeof gap;
};

const gap = {
  xs: "--gap-xs",
  s: "--gap-s",
  m: "--gap-m",
  l: "--gap-l",
  xl: "--gap-xl",
  xxl: "--gap-xxl",
};

const PageWrapper = styled.div<PageWrapperProps>`
  width: 100%;
  height: 100%;
  padding-top: var(--gap-page-top);
  padding-left: ${({ px }) => (px ? gap[px] : 0)};
  padding-right: ${({ px }) => (px ? gap[px] : 0)};
`;

export { PageWrapper };
