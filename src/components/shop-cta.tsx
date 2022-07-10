import styled from "@emotion/styled";
import { motion } from "framer-motion";
import RadioButton from "./radio-button";

type Props = {
  sizes: string[];
  selectedSize: string;
  setSelectedSize: Function;
};

const ShopCta = ({ sizes, selectedSize, setSelectedSize }: Props) => {
  const variants = {
    initial: {
      y: "100%",
    },
    animate: {
      y: "0",
    },
  };

  return (
    <ShopCtaWrapper
      variants={variants}
      initial="initial"
      exit="initial"
      animate="animate"
    >
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

const ShopCtaWrapper = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0;
  width: 100%;

  @media screen and (min-width: 650px) {
    position: inherit;
    max-width: 17.5rem;
    min-width: 15rem;
  }
`;
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
  height: var(--button-height);
  cursor: pointer;

  &:hover {
    background-color: var(--green-2);
  }
  &:active {
    background-color: var(--green-3);
  }
`;
