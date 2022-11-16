import { useState } from "react";
import styled from "@emotion/styled";
import { m, AnimatePresence } from "framer-motion";
import CartModal from "./cart-modal";
import { headerCartVariants } from "@lib/animate";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartHasItems, setCartHasItems] = useState(true);

  return (
    <>
      <AnimatePresence>
        {cartHasItems && (
          <CartButtonWrapper
            onClick={() => setCartOpen((x) => !x)}
            {...headerCartVariants()}
          >
            {!cartOpen ? "Cart (1)" : "Close"}
          </CartButtonWrapper>
        )}
      </AnimatePresence>
      <AnimatePresence>{cartOpen && <CartModal />}</AnimatePresence>
    </>
  );
};

export default Cart;

const CartButtonWrapper = styled(m.button)`
  width: 100%;
  z-index: 9;
  --back-button-width: 8rem;
  height: 100%;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
`;
