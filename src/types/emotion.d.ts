import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    fonts: {
      primary: string;
      primaryBold: string;
      primaryBlack: string;
      secondary: string;
    };
    colors: {
      textPrimary: string;
      textSecondary: string;
      gray1: string;
      gray2: string;
      gray3: string;
      green1: string;
      green2: string;
      green3: string;
      yellow1: string;
      yellow2: string;
      olive1: string;
    };
    fontSize: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    gap: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    mediaQuery: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
  }
}
