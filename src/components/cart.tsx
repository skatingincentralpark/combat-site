import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { StyledButton } from "./shared-styles/styled-button";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const variants = {
    initial: {
      // y: "-100%",
      opacity: 0,
    },
    animate: {
      // y: "0",
      opacity: 1,
    },
    exit: {
      // y: "-100%",
      opacity: 0,
    },
  };

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
            // transition={{ type: "spring", duration: 0.3, bounce: 0.3 }}
          >
            <p>hello</p>
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
  height: 100vh;
  background-color: #f6ff00a7;
  backdrop-filter: blur(3px) invert(1);
`;
