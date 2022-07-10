import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  return (
    <>
      <CartButton>
        <button></button>
      </CartButton>
      <CartModal></CartModal>
    </>
  );
};

export default Cart;

const CartButton = styled(motion.div)``;
const CartModal = styled(motion.div)``;
