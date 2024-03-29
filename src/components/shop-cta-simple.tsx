import { useContext } from "react";
import styled from "@emotion/styled";
import { m } from "framer-motion";
import { StyledButton } from "@components/shared-styles/buttons";
import Link from "next/link";
import CartContext from "@lib/cart-context";
import { transientOptions } from "@lib/helpers";
import { LoadingStar } from "./ui";
import RadioButtonNew from "./radio-button-new/radio-button-new";

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

const ShopCtaSimple = ({
  variants,
  selectedSize,
  setSelectedSize,
  submit,
}: Props) => {
  const availabilityLoading = typeof selectedSize === "undefined";
  const { isLoading } = useContext(CartContext);
  const loading = isLoading || availabilityLoading;

  const sizesHardcoded = ["Small", "Medium", "Large", "X-Large"] as const;

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
          <RadioButtonNew
            key={variant.title}
            index={i}
            value={variant.title}
            name="size"
            selected={selectedSize}
            onClick={setSelectedSize}
            available={loading ? false : variant.quantityAvailable > 0}
          >
            {sizesHardcoded[i]}
          </RadioButtonNew>
        ))}
      </RadioGroup>
      <Row>
        <Button $available={loading} onClick={submit}>
          {loading ? <LoadingStar /> : "Add To Cart"}
        </Button>
      </Row>
    </ShopCtaWrapper>
  );
};

export default ShopCtaSimple;

const ShopCtaWrapper = styled(m.div)`
  width: 100%;
  margin-bottom: var(--gap-xs);
  font-weight: 400;
`;
const RadioGroup = styled.div`
  justify-content: flex-start;
  margin-bottom: var(--gap-xxs);
  width: 100%;
`;
const Button = styled("button", transientOptions)<{ $available: boolean }>`
  background-color: ${({ $available }) => $available && "white"};
  color: ${({ $available }) => ($available ? "var(--gray-3)" : "black")};
  pointer-events: ${({ $available }) => $available && "none"};
  cursor: pointer;
  width: auto;
  height: 2rem;
  display: block;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
