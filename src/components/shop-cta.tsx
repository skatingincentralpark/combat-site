import styled from "@emotion/styled";
import { m } from "framer-motion";
import RadioButton from "@components/radio-button";
import { StyledButton } from "@components/shared-styles/buttons";
import Link from "next/link";

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
      <Row>
        <Button onClick={() => {}}>Add To Cart</Button>
        <StyledLink href="/shop">View All</StyledLink>
      </Row>
    </ShopCtaWrapper>
  );
};

export default ShopCta;

const ShopCtaWrapper = styled(m.div)`
  width: 100%;
  margin-bottom: var(--gap-xs);
`;
const RadioGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: var(--gap-xxs);
`;
const Button = styled(StyledButton)`
  border-radius: var(--gap-xxs);
  font-weight: 600;
  transition: transform 200ms;

  &:active {
    transform: scale(0.95);
  }
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const StyledLink = styled(Link)`
  white-space: nowrap;
  margin-left: var(--gap-s);
  padding: 0 var(--gap-s);
  color: var(--gray-4);
`;
