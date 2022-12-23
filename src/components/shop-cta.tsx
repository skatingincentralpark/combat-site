import styled from "@emotion/styled";
import { m } from "framer-motion";
import RadioButton from "@components/radio-button";
import { StyledButton } from "@components/shared-styles/buttons";
import Link from "next/link";

type Props = {
  variants: {
    id: string;
    available: boolean;
    title: string;
  }[];
  selectedSize?: number | undefined;
  setSelectedSize: Function;
  submit: () => void;
};

const ShopCta = ({
  variants,
  selectedSize,
  setSelectedSize,
  submit,
}: Props) => {
  const framerVariants = {
    initial: {
      y: "100%",
    },
    animate: {
      y: "0",
    },
  };

  const availabilityLoading = typeof selectedSize === "undefined";

  return (
    <ShopCtaWrapper
      variants={framerVariants}
      initial="initial"
      exit="initial"
      animate="animate"
    >
      <RadioGroup>
        {variants?.map((variant, i) => (
          <RadioButton
            key={variant.title}
            index={i}
            value={variant.title}
            name="size"
            selected={selectedSize}
            onClick={setSelectedSize}
            available={availabilityLoading ? false : variant.available}
          >
            {variant.title.toUpperCase()}
          </RadioButton>
        ))}
      </RadioGroup>
      <Row>
        <Button available={availabilityLoading} onClick={submit}>
          {availabilityLoading ? "Waiting..." : "Add To Cart"}
        </Button>
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
const Button = styled(StyledButton)<{ available: boolean }>`
  border-radius: var(--gap-xxs);
  font-weight: 600;
  transition: background-color 0.3s, color 0.3s, transform 0.3s, opacity 0.5s;

  background-color: ${({ available }) => available && "var(--gray-2)"};
  color: ${({ available }) => (available ? "var(--gray-3)" : "white")};
  pointer-events: ${({ available }) => available && "none"};

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
