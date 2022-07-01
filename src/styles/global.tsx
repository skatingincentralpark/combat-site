import { Global, css, useTheme } from "@emotion/react";

const GlobalStyles = () => {
  const theme = useTheme();

  const styles = css`
    :root {
      --gray-1: #f4f4f4;
      --gray-2: #cccccb;
      --gray-3: #6b6b6b;
      --green-1: #35b14a;
      --green-2: #359446;
      --green-3: #166821;
      --yellow-1: #fce200;
      --yellow-2: #eecb15;
      --olive-1: #564f0a;
      --text-primary: #000000;
      --text-secondary: #a4a6a9;
      --font-size-xs: 0.7rem;
      --font-size-s: 0.8rem;
      --font-size-m: 1rem;
      --font-size-l: 1.2rem;
      --font-size-xl: 1.4rem;
      --font-family-primary: IBM Plex Mono;
      --gap-xs: 0.25rem;
      --gap-s: 0.5rem;
      --gap-m: 0.75rem;
      --gap-l: 1rem;
      --gap-xl: 1.25rem;
      --gap-xxl: 1.5rem;
    }

    @font-face {
      font-family: "IBM Plex Mono";
      src: url(/fonts/IBMPlexMono-Regular.ttf) format("truetype");
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }
    @font-face {
      font-family: "IBM Plex Mono";
      src: url(/fonts/IBMPlexMono-ExtraLight.ttf) format("truetype");
      font-style: normal;
      font-weight: 200;
      font-display: swap;
    }
    @font-face {
      font-family: "IBM Plex Mono";
      src: url(/fonts/IBMPlexMono-Light.ttf) format("truetype");
      font-style: normal;
      font-weight: 300;
      font-display: swap;
    }

    html {
      height: 100%;
      background: white;
      font-family: var(--font-family-primary);
      font-size: 13px;
      font-weight: 200;
      line-height: 1.2em;
      color: var(--font-family-primary);
      overflow-y: scroll;

      @media screen and (min-width: 700px) {
        font-size: 13px;
      }

      @media screen and (min-width: 1600px) {
        font-size: 15px;
      }
    }
    * {
      box-sizing: border-box;
    }
    body {
      height: 100%;
      padding: 0;
      margin: 0;

      & > div {
        height: 100%;
      }
    }
    ::selection {
      color: #010101;
      background-color: black;
    }
    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }
    input,
    button,
    textarea,
    select {
      font: inherit;
    }
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    span,
    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font-size: inherit;
      font-family: inherit;
      font-weight: inherit;
      text-decoration: inherit;
      overflow-wrap: break-word;
    }
  `;

  return <Global styles={styles} />;
};

export default GlobalStyles;
