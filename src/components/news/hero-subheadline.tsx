import styled from "@emotion/styled";
import { clamp } from "@lib/helpers";
import { type HeroTextOptions } from "types/newsTypes";

interface Props extends HeroTextOptions {
  children: React.ReactNode;
}

const HeroSubheadline = ({ children, ...props }: Props) => {
  return <SubheadlineStyled {...props}>{children}</SubheadlineStyled>;
};

export default HeroSubheadline;

const o = {
  sizes: {
    small: clamp(24, 36),
    medium: clamp(24, 46),
    large: clamp(24, 46),
  },
  weights: {
    light: 300,
    regular: 400,
    bold: 600,
  },
  widths: {
    30: `30%`,
    40: `40%`,
    50: `50%`,
    60: `60%`,
    70: `70%`,
    100: `100%`,
  },
  textAligns: {
    left: `left`,
    right: `right`,
    center: `center`,
  },
  containerAligns: {
    left: `margin-right: auto`,
    right: `margin-left: auto`,
    center: `margin-left: auto; margin-right: auto`,
  },
};

const SubheadlineStyled = styled.h2<HeroTextOptions>`
  line-height: 1.4em;
  letter-spacing: -0.02em;
  width: 100%;
  margin-bottom: 0.6em;

  font-size: ${({ fontSize }) => o.sizes[fontSize || "medium"]};
  font-weight: ${({ fontWeight }) => o.weights[fontWeight || "regular"]};

  @media screen and (min-width: 700px) {
    width: ${({ width }) => o.widths[width || 50]};
    text-align: ${({ textAlign }) => o.textAligns[textAlign || "left"]};
    ${({ containerAlign }) => o.containerAligns[containerAlign || "left"]};
  }
`;
