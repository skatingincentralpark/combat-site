import styled from "@emotion/styled";
import { clamp } from "@lib/helpers";

interface SubheadlineOptions {
  fontSize: "small" | "medium" | "large";
  fontWeight?: "light" | "regular" | "bold";
  width?: 30 | 50 | 60 | 100;
  textAlign?: "left" | "right" | "center";
  containerAlign?: "left" | "right" | "center";
}

interface Props extends SubheadlineOptions {
  children: React.ReactNode;
}

const HeroSubheadlineSwitcher = ({ children, ...props }: Props) => {
  return <Subheadline {...props}>{children}</Subheadline>;
};

export default HeroSubheadlineSwitcher;

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

const Subheadline = styled.h2<SubheadlineOptions>`
  font-weight: 400;
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
