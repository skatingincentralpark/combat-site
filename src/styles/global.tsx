import { Global, css } from "@emotion/react";
import cssVariables from "./css-variables";

const GlobalStyles = () => {
  const styles = [
    cssVariables,
    css`
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

      html,
      body,
      body > div:first-of-type {
        height: 100%;
      }
      html {
        background: white;
        /* font-family: var(--font-family-primary), "Courier New", Courier,
          monospace; */
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: clamp(12px, 0.8vw, 18px);
        line-height: clamp(1.3em, 1.4em, 2em);
        font-weight: 300;
        color: var(--font-family-primary);
        overflow-y: scroll;
        min-height: fit-content;
      }
      * {
        box-sizing: border-box;
      }
      body {
        padding: 0;
        margin: 0;
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
        margin: 0;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        text-decoration: inherit;
        overflow-wrap: break-word;
      }
    `,
  ];

  return <Global styles={styles} />;
};

export default GlobalStyles;
