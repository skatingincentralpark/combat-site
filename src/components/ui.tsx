import styled from "@emotion/styled";
import { m } from "framer-motion";

const ButtonBase = styled.button`
  &:hover > * {
    @media screen and (min-width: 700px) {
      color: var(--green-3);
    }
  }

  &:active > * {
    transform: scale(0.8);
    color: red;
  }

  & > * {
    transition: transform 100ms;
  }
`;

const ButtonBaseMotion = styled(m.button)`
  &:active {
    opacity: 0.7;
  }

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

export { ButtonBase, ButtonBaseMotion };
