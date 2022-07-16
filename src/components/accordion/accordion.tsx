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
        {options.map((option, i) => {
          const active = activeItem === i;
          return (
            <AccordionListItem
              key={i}
              onClick={() => setActiveItem(i)}
              onTouchStart={() => setActiveItem(i)}
            >
              <AccordionListItemIndicator active={active} />
              {option.label}
            </AccordionListItem>
          );
        })}
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

type ActiveProp = {
  active: boolean;
};

const AccordionWrapper = styled(motion.div)`
  border-top: 0.5px solid var(--olive-1);
  border-bottom: 0.5px solid var(--olive-1);

  padding: var(--gap-l) 0;

  @media screen and (min-width: 700px) {
    display: flex;
  }
`;
const AccordionList = styled.div`
  flex-shrink: 0;
`;
const AccordionListItem = styled.div`
  font-weight: 400;
  cursor: pointer;

  display: flex;
  align-items: center;

  background-color: var(--nav-link-bg-color);
  color: var(--nav-link-color);

  padding-right: var(--gap-l);

  --dot-color: #ffffff0; // scoped to link so the dot can use it

  &:hover {
    @media screen and (min-width: 700px) {
      --nav-link-bg-color: var(--yellow-4);
      --dot-color: var(--yellow-4); // scoped to link so the dot can use it
      outline: 0.5px solid black;
    }
  }

  &:active {
    --nav-link-bg-color: var(--yellow-3);
    --dot-color: var(--yellow-3); // scoped to link so the dot can use it
    outline: 0.5px solid black;
  }
`;
const AccordionListItemIndicator = styled.span<ActiveProp>`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: var(--gap-l);

  border: 0.5px solid black;
  background-color: ${({ active }) => (active ? "black" : "var(--dot-color)")};
  transition: background-color 0.25s, transform 0.25s;
`;

const AccordionBody = styled.div``;
