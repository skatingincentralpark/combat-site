import styled from "@emotion/styled";
import { clamp } from "@lib/helpers";

interface CreditsOptions {
  fontSize?: "small" | "medium" | "large";
  fontWeight?: "light" | "regular" | "bold";
  width?: 30 | 50 | 60 | 100;
  textAlign?: "left" | "right" | "center";
  containerAlign?: "left" | "right" | "center";
}

interface Props extends CreditsOptions {
  children: React.ReactNode;
}

const HeroCredits = ({ children, ...props }: Props) => {
  return <Credits {...props}>{children}</Credits>;
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
    50: `50%`,
    60: `60%`,
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
    center: `margin: auto`,
  },
};

const Credits = styled.small<CreditsOptions>`
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
