import { useState } from "react";
import styled from "@emotion/styled";
import { m, AnimatePresence } from "framer-motion";
import CartModal from "./cart-modal";
import { headerCartVariants } from "@lib/animate";
import { ButtonBaseMotion } from "@components/ui";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartHasItems, setCartHasItems] = useState(true);

  const onClick = () => setCartOpen((x) => !x);

  return (
    <>
      <AnimatePresence>
        {cartHasItems && (
          <CartButton onClick={onClick} {...headerCartVariants()}>
            <div>{!cartOpen ? "Cart (1)" : "Close"}</div>
          </CartButton>
        )}
      </AnimatePresence>
      <AnimatePresence>{cartOpen && <CartModal />}</AnimatePresence>
    </>
  );
};

export default Cart;

const CartButton = styled(ButtonBaseMotion)`
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
`;
