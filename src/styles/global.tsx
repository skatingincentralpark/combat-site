import { Global, css } from "@emotion/react";
import cssVariables from "./css-variables";

const GlobalStyles = () => {
  const styles = [
    cssVariables,
    css`
      /* html,
      body,
      body > div:first-of-type {
        height: 100%;
        -webkit-tap-highlight-color: none;
      }

      ::selection {
        color: var(--green-3);
        background: var(--piss-1);
      }

      html {
        background: white;
        font-size: 12px;
        line-height: 1.4em;
        font-weight: 300;
        color: var(--black);
        -webkit-font-smoothing: antialiased;

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
        overflow-y: auto;
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
      blockquote,
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
      } */
    `,
  ];

  return <Global styles={styles} />;
};

export default GlobalStyles;
