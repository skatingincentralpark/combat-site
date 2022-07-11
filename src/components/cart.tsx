import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { StyledButton } from "./shared-styles/styled-button";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const variants = {
    initial: {
      // y: 50,
      opacity: 0,
    },
    animate: {
      // y: 0,
      opacity: 1,
    },
    exit: {
      // y: -50,
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
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              blanditiis fugiat tempore, assumenda quae error earum non id eos
              deserunt perferendis distinctio autem! Tenetur eaque in, dolores
              architecto vitae autem.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              vitae in eligendi sit! Cupiditate expedita ipsam hic amet aperiam
              voluptatibus eligendi doloribus alias perferendis, reiciendis
              reprehenderit eaque autem laudantium obcaecati sint error qui quae
              asperiores voluptas numquam atque. Ratione reiciendis molestias
              doloribus atque quae rerum aperiam eos sint! Possimus, natus?
              Similique expedita, deserunt fuga laudantium repellat nam itaque
              magnam reprehenderit excepturi culpa neque porro quos libero nihil
              est minus facere ab molestias, maxime iusto dignissimos
              architecto! Dicta eius, cum ad voluptates sit error.
            </p>
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
