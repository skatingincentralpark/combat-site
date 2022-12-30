import { useContext } from "react";
import styled from "@emotion/styled";
import { m } from "framer-motion";
import RadioButton from "@components/radio-button";
import { StyledButton } from "@components/shared-styles/buttons";
import Link from "next/link";
import CartContext from "@lib/cart-context";
import { transientOptions } from "@lib/helpers";
import { LoadingStar } from "./ui";

type Props = {
  variants: {
    id: string;
    quantityAvailable: number;
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
  const availabilityLoading = typeof selectedSize === "undefined";
  const { isLoading } = useContext(CartContext);
  const loading = isLoading || availabilityLoading;

  return (
    <ShopCtaWrapper>
      <RadioGroup
        style={{
          ["--radio-border-color" as any]: loading
            ? "var(--gray-3)"
            : "var(--gray-1)",
        }}
      >
        {variants?.map((variant, i) => (
          <RadioButton
            key={variant.title}
            index={i}
            value={variant.title}
            name="size"
            selected={selectedSize}
            onClick={setSelectedSize}
            available={loading ? false : variant.quantityAvailable > 0}
          >
            {variant.title.toUpperCase()}
          </RadioButton>
        ))}
      </RadioGroup>
      <Row>
        <Button $available={loading} onClick={submit}>
          {loading ? <LoadingStar /> : "Add To Cart"}
        </Button>
        <StyledLink $available={loading} href="/shop">
          View All
        </StyledLink>
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
const Button = styled(StyledButton, transientOptions)<{ $available: boolean }>`
  background-color: ${({ $available }) => $available && "var(--gray-1)"};
  color: ${({ $available }) => ($available ? "var(--gray-3)" : "white")};
  pointer-events: ${({ $available }) => $available && "none"};
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const StyledLink = styled(Link, transientOptions)<{ $available: boolean }>`
  white-space: nowrap;
  margin-left: var(--gap-s);
  padding: 0 var(--gap-s);
  color: var(--gray-4);
  transition: opacity 200ms;
  pointer-events: ${({ $available }) => $available && "none"};
  opacity: ${({ $available }) => $available && 0.2};
`;
