import { useState } from "react";
import styled from "@emotion/styled";
import { m, AnimatePresence } from "framer-motion";
import CartModal from "./cart-modal";
import { headerButtonVariants } from "../../lib/animate";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartHasItems, setCartHasItems] = useState(true);

  return (
    <>
      <AnimatePresence>
        {cartHasItems && (
          <CartButtonWrapper
            onClick={() => setCartOpen((x) => !x)}
            {...headerButtonVariants()}
          >
            {!cartOpen ? "Cart (1)" : "Close"}
          </CartButtonWrapper>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {cartOpen && <CartModal cartOpen={cartOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Cart;

const CartButtonWrapper = styled(m.button)`
  z-index: 9;
  --back-button-width: 10rem;
  width: var(--back-button-width);
  height: 100%;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
`;
