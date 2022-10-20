import styled from "@emotion/styled";
import { clamp } from "@lib/helpers";

interface HeadlineOptions {
  fontSize: "small" | "medium" | "large";
  fontWeight?: "light" | "regular" | "bold";
  width?: 30 | 50 | 60 | 100;
  textAlign?: "left" | "right" | "center";
  containerAlign?: "left" | "right" | "center";
}

interface Props extends HeadlineOptions {
  children: React.ReactNode;
}

const HeroHeadlineSwitcher = ({ children, ...props }: Props) => {
  return <Headline {...props}>{children}</Headline>;
};

export default HeroHeadlineSwitcher;

const o = {
  sizes: {
    small: clamp(34, 80),
    medium: clamp(50, 100),
    large: clamp(50, 120),
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

const Headline = styled.h1<HeadlineOptions>`
  font-weight: 400;
  line-height: 1.1em;
  letter-spacing: -0.02em;
  width: 100%;
  margin-bottom: 0.6em;
  font-size: ${({ fontSize }) => o.sizes[fontSize || "medium"]};
  font-weight: ${({ fontWeight }) => o.weights[fontWeight || "regular"]};

  @media screen and (min-width: 700px) {
    width: ${({ width }) => o.widths[width || 50]};
    text-align: ${({ textAlign }) => o.textAligns[textAlign || "left"]};
    ${o.containerAligns.right};
  }
`;
