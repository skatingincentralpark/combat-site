import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { StyledButton } from "../shared-styles/styled-button";
import Accordion from "../accordion/accordion";
import CartItem from "./cart-item";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const accordionOptions = [
    {
      label: "Shipping Policy",
      text: "Italy: approximately 1-2 working days (excluding the Italian Islands which may take 2-3 working days).  European Union: approximately 2-3 working days.  Rest of the world: approximately 4-5 working days.",
    },
    {
      label: "Returns",
      text: "Compiled client and server successfully in 122 ms (522 modules).  European Union: approximately 2-3 working days.  Rest of the world: approximately 4-5 working days.",
    },
    {
      label: "Secure Payment",
      text: "Microfoam is shiny, slightly thickened, and should have microscopic, uniform bubbles.  European Union: approximately 2-3 working days.  Rest of the world: approximately 4-5 working days.",
    },
  ];

  return (
    <>
      <CartButtonWrapper>
        <StyledButton onClick={() => setCartOpen((x) => !x)}>
          {!cartOpen ? "Cart (1)" : "Close"}
        </StyledButton>
      </CartButtonWrapper>

      <AnimatePresence>
        {cartOpen && (
          <CartModal
            variants={variants}
            initial="initial"
            exit="exit"
            animate="animate"
          >
            <CartItemWrapper>
              <CartItem />
            </CartItemWrapper>
            <Accordion options={accordionOptions} />
          </CartModal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;

const CartButtonWrapper = styled(motion.div)`
  position: fixed;
  z-index: 9;
  top: var(--gap-l);
  right: var(--gap-l);
`;
const CartModal = styled(motion.div)`
  position: fixed;
  z-index: 8;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  background-color: var(--yellow-4);
  backdrop-filter: blur(3px) invert(1);
  padding: var(--gap-page-top) var(--gap-xxl);
`;
const CartItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: var(--gap-xxl);
`;
