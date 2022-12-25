import styled from "@emotion/styled";
import { m } from "framer-motion";

/*
 * Buttons
 */
const ButtonBase = styled.button`
  &:hover {
    @media screen and (min-width: 700px) {
      background-color: green;
    }
  }

  &:active {
    transform: scale(0.97);
  }

  & {
    transition: transform 100ms;
  }
`;

const ButtonBaseMotion = styled(m.button)`
  &:hover > * {
    @media screen and (min-width: 700px) {
      color: var(--green-3);
    }
  }

  &:active > * {
    transform: scale(0.8);
    color: red;
  }

  & > div {
    transition: transform 100ms;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LoadingStar = () => {
  return (
    <LoadingSpinner>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 245">
        <path d="m56,237 74-228 74,228L10,96h240" />
      </svg>
    </LoadingSpinner>
  );
};

const LoadingSpinner = styled.div`
  height: 100%;
  aspect-ratio: 1;
  animation: spin 0.75s linear infinite;
  transform-origin: center;
  margin: auto;
  pointer-events: none;
  fill: white;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export {
  /* Buttons */
  ButtonBase,
  ButtonBaseMotion,
  /* Loading Indicators */
  LoadingStar,
};
