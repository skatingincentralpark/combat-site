import React from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const PageTransitionWrapper = ({ children }: Props) => {
  const router = useRouter();

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <StyledMotionDiv
        key={router.pathname}
        variants={variants}
        initial="initial"
        exit="exit"
        animate="animate"
      >
        {children}
      </StyledMotionDiv>
    </AnimatePresence>
  );
};

export default PageTransitionWrapper;

const StyledMotionDiv = styled(motion.div)`
  height: 100%;
  width: 100%;
`;
