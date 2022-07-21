import React from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isClosed: boolean;
  children?: React.ReactNode;
  delay?: number;
  backgroundcolor?: string;
  padding?: string;
  displaydesktop?: string;
};

const SlideUpModal = ({
  isClosed,
  children,
  delay,
  backgroundcolor,
  padding,
  displaydesktop,
}: Props) => {
  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: delay ? delay : 0,
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {!isClosed && (
        <SlideUpModalWrapper
          variants={variants}
          initial="initial"
          exit="exit"
          animate="animate"
          backgroundcolor={backgroundcolor}
          padding={padding}
          displaydesktop={displaydesktop}
        >
          {children}
        </SlideUpModalWrapper>
      )}
    </AnimatePresence>
  );
};

type StyledProps = {
  backgroundcolor?: string;
  padding?: string;
  displaydesktop?: string;
};

const SlideUpModalWrapper = styled(motion.div)<StyledProps>`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${({ backgroundcolor }) =>
    backgroundcolor ? backgroundcolor : ""};
  z-index: 2;
  cursor: pointer;
  padding: ${({ padding }) => padding && padding};

  @media screen and (min-width: 650px) {
    display: ${({ displaydesktop }) => displaydesktop};
  }
`;

export default SlideUpModal;
