import React from "react";
import styled from "@emotion/styled";
import { StyledButton } from "../shared-styles/buttons";

const CartCta = React.forwardRef<HTMLDivElement, { totalPrice: string }>(
  ({ totalPrice }, ref) => {
    const currentPrice = parseInt(totalPrice).toFixed(2);

    return (
      <CartCtaInner ref={ref || null}>
        <CartDescriptionItem>
          <span>Subtotal</span>
          <span>$60</span>
        </CartDescriptionItem>
        <CartDescriptionItem>
          <span>Shipping</span>
          <span>FREE</span>
        </CartDescriptionItem>
        <CartDescriptionItem>
          <span>Total (Duties Included)</span>
          <span>${currentPrice}</span>
        </CartDescriptionItem>
        <StyledButton>Checkout</StyledButton>
      </CartCtaInner>
    );
  }
);

export default CartCta;

const CartCtaInner = styled.div`
  padding: var(--gap-m) 0;
  text-align: left;
  display: flex;
  flex-direction: column;

  & > button {
    max-width: fit-content;
    margin-top: var(--gap-m);
  }
`;
const CartDescriptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 35rem;

  & > span:first-of-type {
    font-weight: 600;
    min-width: clamp(7rem, 6vw, 10rem);
    margin-right: var(--gap-s);
  }
`;

CartCta.displayName = "CartCta";
