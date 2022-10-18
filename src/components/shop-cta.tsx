import styled from "@emotion/styled";
import { m } from "framer-motion";
import RadioButton from "@components/radio-button";
import { StyledButton } from "@components/shared-styles/buttons";

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
      <Button onClick={() => {}}>Add To Cart</Button>
    </ShopCtaWrapper>
  );
};

export default ShopCta;

const ShopCtaWrapper = styled(m.div)`
  width: 100%;
  margin-bottom: 2rem;

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
const Button = styled(StyledButton)`
  border-radius: 0 0 var(--gap-3xs) var(--gap-3xs);
`;
