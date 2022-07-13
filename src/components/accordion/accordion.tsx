import { useState } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import AccordionBodyItem from "./accordion-body-item";

type Props = {
  options: {
    label: String;
    text: String;
  }[];
};

const Accordion = ({ options }: Props) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <AccordionWrapper>
      <AccordionList>
        {options.map((option, i) => (
          <AccordionListItem
            key={i}
            onClick={() => {
              setActiveItem(i);
            }}
          >
            <AccordionListItemIndicator />
            {option.label}
          </AccordionListItem>
        ))}
      </AccordionList>
      <AccordionBody>
        <AnimatePresence exitBeforeEnter>
          {options.map((option, i) => {
            const active = activeItem === i;
            if (active)
              return (
                <AccordionBodyItem key={i + 99} active={active}>
                  {option.text}
                </AccordionBodyItem>
              );
          })}
        </AnimatePresence>
      </AccordionBody>
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;

  margin: var(--gap-xl) 0;
  padding: var(--gap-m) 0;
`;
const AccordionList = styled.div``;
const AccordionListItem = styled.div`
  font-weight: 400;
`;
const AccordionListItemIndicator = styled.div``;

const AccordionBody = styled.div`
  position: relative;
`;
