import React from "react";
import styled from "@emotion/styled";
import { m } from "framer-motion";

type Props = {
  children: React.ReactNode;
  active: boolean;
};

const AccordionBodyItem = ({ children }: Props) => {
  return (
    <AccordionBodyItemWrapper
      key="content"
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: {
          opacity: 1,
          height: "auto",
          transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] },
        },
        collapsed: {
          opacity: 0,
          height: 0,
          transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] },
        },
      }}
    >
      <AccordionBodyItemWrapperInner>{children}</AccordionBodyItemWrapperInner>
    </AccordionBodyItemWrapper>
  );
};

export default AccordionBodyItem;

const AccordionBodyItemWrapper = styled(m.div)`
  overflow: hidden;
`;
const AccordionBodyItemWrapperInner = styled.div`
  margin-top: var(--gap-s);

  @media screen and (min-width: 700px) {
    margin-top: 0;
    max-width: 30rem;
  }
`;
