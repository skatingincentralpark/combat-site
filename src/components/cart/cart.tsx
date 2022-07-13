import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { StyledButton } from "../shared-styles/styled-button";
import Image from "../image";
import Accordion from "../accordion/accordion";

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
            <CartItem>
              <Image src="/images/Bill2.png" />
              <CartItemBody>
                <strong>Viktor Tee</strong>
                <strong>$70 AUD</strong>
                <CartItemBodySummary>
                  <div>
                    <strong>Color:</strong> <span>White</span>
                  </div>
                  <div>
                    <strong>Size:</strong> <span>S</span>
                  </div>
                  <div>
                    <strong>Quantity:</strong> <span>1</span>
                  </div>
                </CartItemBodySummary>
                <span>Remove</span>
              </CartItemBody>
            </CartItem>
            <Accordion options={accordionOptions} />
            {/* <TempFillerText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              blanditiis consectetur similique porro architecto cupiditate cum
              eligendi est dolorem, facere itaque consequuntur molestiae
              obcaecati repellat neque, libero quae culpa recusandae!
            </TempFillerText> */}
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

  background-color: #f6ff00e5;
  backdrop-filter: blur(3px) invert(1);
  padding: var(--gap-page-top) var(--gap-xxl);
`;
const CartItem = styled.div`
  width: 50%;
  height: min-content;

  @media screen and (min-width: 650px) {
    width: 25%;
  }

  & > div:first-of-type {
    border-radius: 1.5rem;
    overflow: hidden;
  }
`;
const CartItemBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--gap-l);
`;
const CartItemBodySummary = styled.div`
  margin: var(--gap-l) 0;
`;
const TempFillerText = styled.div`
  /* border-top: 1px solid gray; */
  margin-top: 1rem;
  padding-top: 1rem;
`;