import { useState } from "react";
import styled from "@emotion/styled";
import { AnimatePresence } from "framer-motion";
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
            <AccordionListItem key={i} onClick={() => setActiveItem(i)}>
              <AccordionListItemIndicator active={active} />
              {option.label}
            </AccordionListItem>
          );
        })}
      </AccordionList>
      <AccordionBody>
        <AnimatePresence initial={false}>
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

const AccordionWrapper = styled.div`
  border-top: 0.5px solid var(--olive-1);
  border-bottom: 0.5px solid var(--olive-1);

  padding: var(--gap-m) 0;

  @media screen and (min-width: 700px) {
    display: flex;
  }
`;
const AccordionList = styled.div`
  flex-shrink: 0;

  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;
const AccordionListItem = styled.button`
  font-weight: 600;
  cursor: pointer;

  margin-right: var(--gap-s);
  text-align: left;

  background-color: var(--nav-link-bg-color);
  color: var(--nav-link-color);

  @media screen and (min-width: 700px) {
    padding: 0 var(--gap-s) 0 var(--gap-xxs);
  }

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
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  margin-right: var(--gap-s);

  border: 0.5px solid black;
  background-color: ${({ active }) => (active ? "black" : "var(--dot-color)")};
  transition: background-color 0.25s, transform 0.25s;
`;

const AccordionBody = styled.div`
  @media screen and (min-width: 700px) {
    margin-left: 7rem;
  }
`;
