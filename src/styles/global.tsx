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
        font-family: var(--font-family-primary);
        font-size: 12px;
        line-height: 1.4em;
        font-weight: 300;
        color: var(--black);
        overflow-y: scroll;
        min-height: fit-content;

        @media screen and (min-width: 1550px) {
          font-size: 13px;
        }

        &.is-loading,
        &.is-loading * {
          cursor: wait !important;
        }
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
