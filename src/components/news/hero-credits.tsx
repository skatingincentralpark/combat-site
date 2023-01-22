import styled from "@emotion/styled";
import { clamp } from "@lib/helpers";
import { type HeroTextOptions } from "types/newsTypes";

interface Props extends HeroTextOptions {
  children: React.ReactNode;
}

const HeroCredits = ({ children, ...props }: Props) => {
  return <CreditsStyled {...props}>{children}</CreditsStyled>;
};

export default HeroCredits;

const o = {
  sizes: {
    small: clamp(10, 11),
    medium: clamp(10, 11),
    large: clamp(10, 11),
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

const CreditsStyled = styled.small<HeroTextOptions>`
  line-height: 1.6em;
  letter-spacing: 0;
  width: 100%;
  margin-bottom: 0.6em;

  font-size: ${({ fontSize }) => o.sizes[fontSize || "medium"]};
  font-weight: ${({ fontWeight }) => o.weights[fontWeight || "light"]};

  @media screen and (min-width: 700px) {
    width: ${({ width }) => o.widths[width || 50]};
    text-align: ${({ textAlign }) => o.textAligns[textAlign || "left"]};
    ${({ containerAlign }) => o.containerAligns[containerAlign || "left"]};
  }
`;
