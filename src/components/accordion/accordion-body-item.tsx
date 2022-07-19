import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
  active: boolean;
};

const AccordionBodyItem = ({ children }: Props) => {
  const variants = {
    initial: {
      maxHeight: 0,
      opacity: 0,
    },
    animate: {
      maxHeight: 200,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.7,
      },
    },
    exit: {
      maxHeight: 0,
      opacity: 0,
    },
  };

  return (
    <AccordionBodyItemWrapper
      variants={variants}
      initial="initial"
      exit="exit"
      animate="animate"
    >
      <AccordionBodyItemWrapperInner>{children}</AccordionBodyItemWrapperInner>
    </AccordionBodyItemWrapper>
  );
};

export default AccordionBodyItem;

const AccordionBodyItemWrapper = styled(motion.div)`
  overflow: hidden;
`;
const AccordionBodyItemWrapperInner = styled.div`
  margin-top: var(--gap-l);

  @media screen and (min-width: 700px) {
    margin-top: 0;
    margin-left: 7rem;
    max-width: 30rem;
  }
`;
