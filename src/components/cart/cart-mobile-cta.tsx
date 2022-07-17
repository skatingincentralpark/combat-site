import { useState } from "react";
import styled from "@emotion/styled";
import SlideUpModal from "../slide-up-modal";
import { StyledButton } from "../shared-styles/styled-button";

const CartMobileCta = () => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <SlideUpModal isClosed={isClosed} backgroundColor="black" position="sticky">
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
    </SlideUpModal>
  );
};

export default CartMobileCta;

const CartCtaInner = styled.div`
  color: white;
  padding: var(--gap-xxl);
  border-top: 0.5px solid var(--olive-1);
  text-align: left;
  display: flex;
  flex-direction: column;

  & > button {
    margin-top: var(--gap-xl);
  }
`;
const CartDescriptionItem = styled.div`
  display: flex;
  justify-content: space-between;

  & > span:first-of-type {
    font-weight: 600;
    min-width: clamp(7rem, 6vw, 10rem);
    margin-right: var(--gap-l);
  }
`;
