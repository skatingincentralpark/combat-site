import { useState } from "react";
import styled from "@emotion/styled";
import { AnimatePresence } from "framer-motion";
import { StyledButton } from "../shared-styles/styled-button";
import CartModal from "./cart-modal";

const CartButton = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <CartButtonWrapper>
        <StyledButton onClick={() => setCartOpen((x) => !x)}>
          {!cartOpen ? "Cart (1)" : "Close"}
        </StyledButton>
      </CartButtonWrapper>
      <AnimatePresence>
        {cartOpen && <CartModal cartOpen={cartOpen} />}
      </AnimatePresence>
    </>
  );
};

export default CartButton;

const CartButtonWrapper = styled.div`
  position: fixed;
  z-index: 9;
  top: var(--gap-s);
  right: var(--gap-s);
`;
