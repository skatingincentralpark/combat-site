import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import RadioButton from "./radio-button";

type Props = {
  sizes: string[];
  selectedSize: string;
  setSelectedSize: Function;
};

const ShopCta = ({ sizes, selectedSize, setSelectedSize }: Props) => {
  return (
    <ShopCtaWrapper>
      <RadioGroup>
        {sizes.map((size) => (
          <RadioButton
            key={size}
            value={size}
            name="size"
            selected={selectedSize}
            onClick={setSelectedSize}
          >
            {size.toUpperCase()}
          </RadioButton>
        ))}
      </RadioGroup>
      <StyledButton onClick={() => {}}>Add To Cart</StyledButton>
    </ShopCtaWrapper>
  );
};

export default ShopCta;

const ShopCtaWrapper = styled(motion.div)``;
const RadioGroup = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const StyledButton = styled.button`
  color: white;
  font-weight: 600;
  border-radius: 0 0 var(--gap-xs) var(--gap-xs);
  padding: var(--gap-s) var(--gap-l);
  background-color: var(--green-1);
  width: 100%;
  height: 3rem;
  cursor: pointer;

  &:hover {
    background-color: var(--green-2);
  }
  &:active {
    background-color: var(--green-3);
  }
`;
