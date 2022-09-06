import { css } from "@emotion/react";

const cssVariables = css`
  :root {
    // Color
    --gray-1: #f4f4f4;
    --gray-2: #cccccb;
    --gray-3: #b8b8b8;
    --gray-4: #6b6b6b;
    --green-1: #35b14a;
    --green-2: #2d963e;
    --green-3: #216f2e;
    --yellow-1: #fce200;
    --yellow-2: #eecb15;
    --piss-1: #deff00;
    --olive-1: #564f0a;
    --black: #000000;
    // Font Size
    --font-size-xs: 0.7rem;
    --font-size-s: 0.8rem;
    --font-size-m: 1rem;
    --font-size-l: 1.2rem;
    --font-size-xl: 1.4rem;
    // Font Family
    --font-family-primary: Helvetica, -apple-system, Arial, "Helvetica Neue",
      sans-serif;
    // Gap
    --gap-3xs: 0.25rem;
    --gap-xxs: 0.5rem;
    --gap-xs: 0.75rem;
    --gap-s: 1rem;
    --gap-m: 1.5rem;
    --gap-l: 2rem;
    --gap-xl: 2.5rem;
    --gap-xxl: 3rem;
    --gap-3xl: 4rem;
    --gap-4xl: 5rem;
    --gap-5xl: 6rem;
    --gap-6xl: 7rem;
    // Stuff
    --button-height: 3rem;
    --header-height: 6rem;
    --gap-page-top: calc(var(--header-height) + var(--gap-m));

    @media screen and (min-width: 650px) {
      --button-height: 2.5rem;
    }
  }
`;

export default cssVariables;
