import styled from "@emotion/styled";
import { StyledButton } from "../shared-styles/styled-button";

const CartCta = () => {
  return (
    <CartCtaInner>
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
        <span>$60</span>
      </CartDescriptionItem>
      <StyledButton>Checkout</StyledButton>
    </CartCtaInner>
  );
};

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
