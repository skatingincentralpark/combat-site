import { forwardRef, useContext, MouseEvent } from "react";
import styled from "@emotion/styled";
import { StyledButton } from "../shared-styles/buttons";
import CartContext from "@lib/cart-context";
import { transientOptions } from "@lib/helpers";
import { LoadingStar } from "@components/ui";

const CartCta = forwardRef<HTMLDivElement, { totalPrice: string }>(
  ({ totalPrice }, ref) => {
    const currentPrice = parseInt(totalPrice).toFixed(2);
    const { isLoading, checkout } = useContext(CartContext);

    const goToCheckout = (e: MouseEvent) => {
      e.preventDefault();
      if (checkout?.webUrl !== null)
        return window.open(checkout?.webUrl, "_self");
    };

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
        <Button $available={!isLoading} onClick={goToCheckout}>
          {isLoading ? <LoadingStar /> : "Checkout"}
        </Button>
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
const Button = styled(StyledButton, transientOptions)<{ $available: boolean }>`
  min-width: 12rem;
  background-color: ${({ $available }) => !$available && "var(--gray-2)"};
  color: ${({ $available }) => (!$available ? "var(--gray-3)" : "white")};
  pointer-events: ${({ $available }) => !$available && "none"};
`;

CartCta.displayName = "CartCta";
