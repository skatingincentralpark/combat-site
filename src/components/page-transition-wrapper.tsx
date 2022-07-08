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
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -100,
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
        transition={{ type: "spring", damping: 10, stiffness: 30 }}
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
