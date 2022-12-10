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

/*
 * Page Wrappers
 */
// const HomePageWrapper = styled.main`
//   margin-top: var(--header-height);
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
// `;
// const ShopPageWrapper = styled.main`
//   padding-top: var(--header-height);
//   padding: var(--gap-m) var(--gap-xxl) var(--gap-m) var(--gap-xxl);
//   height: 100%;
//   display: flex;
// `;
// const NewsPageWrapper = styled(m.main)`
//   width: 100%;
//   height: fit-content;
//   padding-top: var(--gap-page-top);
//   padding-bottom: var(--gap-xl);
//   padding-left: 0;
//   padding-right: 0;

//   max-width: 50rem; // test on bigger screen --> could use clamp
//   margin: auto;

//   @media screen and (min-width: 700px) {
//     padding-top: 12rem;
//     padding-left: var(--gap-s);
//     padding-right: var(--gap-s);
//   }
// `;

export {
  /* Buttons */
  ButtonBase,
  ButtonBaseMotion,
  /* Layouts */
};
