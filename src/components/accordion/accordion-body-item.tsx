import React from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
  active: boolean;
};

const AccordionBodyItem = ({ children, active }: Props) => {
  const variants = {
    initial: {
      maxHeight: 0,
      opacity: 0,
    },
    animate: {
      maxHeight: 200,
      opacity: 1,
      transition: { duration: 0.2 },
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
`;
