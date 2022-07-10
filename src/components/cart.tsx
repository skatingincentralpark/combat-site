import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./shared-styles/button";

const Cart = () => {
  return (
    <>
      <CartButton>
        <Button>Hello</Button>
      </CartButton>
      <CartModal></CartModal>
    </>
  );
};

export default Cart;

const CartButton = styled(motion.div)`
  position: fixed;
  z-index: 9;
`;
const CartModal = styled(motion.div)``;
