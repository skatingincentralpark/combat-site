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
    --yellow-3: #faff5a;
    --yellow-4: #f6ff00;
    --piss-1: #deff00;
    --piss-2: #aec900;
    --olive-1: #564f0a;
    --text-primary: #000000;
    --text-secondary: #a4a6a9;
    // Font Size
    --font-size-xs: 0.7rem;
    --font-size-s: 0.8rem;
    --font-size-m: 1rem;
    --font-size-l: 1.2rem;
    --font-size-xl: 1.4rem;
    // Font Family
    --font-primary: "Jost", Helvetica, Helvetica, -apple-system, Arial,
      sans-serif, Courier New;
    --font-mono: "Bitcount Mono Single Bk Circle", "Courier New", Courier,
      monospace;
    // Gap
    --gap-4xs: 0.25rem; // 3px to 3.25px
    --gap-3xs: 0.5rem; // 6px to 6.5px
    --gap-xxs: 0.75rem; // 9px to 9.75px
    --gap-xs: 1rem; // 12px to 13px
    --gap-s: 1.25rem;
    --gap-m: 1.5rem;
    --gap-l: 2rem;
    --gap-xl: 2.5rem;
    --gap-xxl: 3rem;
    --gap-3xl: 4rem;
    --gap-4xl: 5rem;
    --gap-5xl: 6rem;
    --gap-6xl: 7rem;
    // Border Radius
    --border-radius-m: 3rem;
    // Stuff
    --button-height: 3rem;
    --header-height: 5rem;
    --gap-page-top: calc(var(--header-height) + var(--gap-s));

    @media screen and (min-width: 650px) {
      --button-height: 2.5rem;
    }
  }
`;

export default cssVariables;
