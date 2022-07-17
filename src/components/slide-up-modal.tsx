import React from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isClosed: boolean;
  children: React.ReactNode;
  delay?: number;
  backgroundColor?: string;
};

const SlideUpModal = ({
  isClosed,
  children,
  delay,
  backgroundColor,
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
          backgroundColor={backgroundColor}
        >
          {children}
        </SlideUpModalWrapper>
      )}
    </AnimatePresence>
  );
};

type StyledProps = {
  backgroundColor?: string;
};

const SlideUpModalWrapper = styled(motion.div)<StyledProps>`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : ""};
  z-index: 2;
  cursor: pointer;
`;

export default SlideUpModal;
