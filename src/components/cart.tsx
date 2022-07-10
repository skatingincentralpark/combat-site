import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { StyledButton } from "./shared-styles/styled-button";

const Cart = () => {
  return (
    <>
      <CartButtonWrapper>
        <StyledButton>Cart (1)</StyledButton>
      </CartButtonWrapper>
      <CartModal></CartModal>
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
  z-index: 8;
`;
