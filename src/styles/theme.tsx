import { Theme } from "@emotion/react";

const theme: Theme = {
  fonts: {
    primary: "IBM Plex Mono",
    primaryBold: "Helvetica",
    primaryBlack: "Helvetica",
    secondary: "Courier New",
  },
  colors: {
    textPrimary: "#000000",
    textSecondary: "#A4A6A9",
    gray1: "#F4F4F4",
    gray2: "#CCCCCB",
    gray3: "#6B6B6B",
    green1: "#35B14A",
    green2: "#359446",
    green3: "#166821",
    yellow1: "#FCE200",
    yellow2: "#EECB15",
    olive1: "#564F0A",
  },
  fontSize: {
    xs: "0.7rem",
    s: "0.8rem",
    m: "1rem",
    l: "1.2rem",
    xl: "1.4rem",
  },
  gap: {
    xs: "0.25rem",
    s: "0.5rem",
    m: "0.75rem",
    l: "1rem",
    xl: "1.25rem",
    xxl: "1.5rem",
  },
  mediaQuery: {
    xs: "696px",
    s: "768px",
    m: "978px",
    l: "1200px",
    xl: "1400px",
  },
};

export default theme;
