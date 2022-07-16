import React from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isClosed: boolean;
  children: React.ReactNode;
};

const SlideUpModal = ({ isClosed, children }: Props) => {
  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut", delay: 1.5 },
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
        >
          {children}
        </SlideUpModalWrapper>
      )}
    </AnimatePresence>
  );
};

const SlideUpModalWrapper = styled(motion.div)`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 2;
  cursor: pointer;
`;

export default SlideUpModal;
