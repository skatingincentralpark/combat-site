import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { StyledButton } from "../shared-styles/styled-button";
import Accordion from "../accordion/accordion";
import CartItem from "./cart-item";
import SlideUpModal from "../slide-up-modal";
import { default as NextImage } from "next/image";
import CartCta from "./cart-cta";

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

  const myRef = useRef<HTMLDivElement>(null);
  const [eleVisible, setEleVisible] = useState<boolean>(true);

  useEffect(() => {
    if (!cartOpen) return;
    if (!myRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setEleVisible(entry.isIntersecting);
    });

    observer.observe(myRef.current);
  }, [cartOpen]);

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
            <CartModalInner>
              <CartFunWrapper ref={myRef}>
                <NextImage
                  src="/images/pig.GIF"
                  alt="Something"
                  layout="fill"
                  objectFit="cover"
                />
              </CartFunWrapper>
              <CartItemWrapper>
                <CartItem tee={1} />
                <CartItem tee={2} />
                <CartItem tee={3} />
              </CartItemWrapper>
              <CartCta />
              <Accordion options={accordionOptions} />
            </CartModalInner>
            <SlideUpModal
              isClosed={!eleVisible}
              backgroundColor="var(--yellow-4)"
            >
              <CartCta />
            </SlideUpModal>
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

  background-color: var(--yellow-4);
  backdrop-filter: blur(3px) invert(1);
`;
const CartModalInner = styled.div`
  padding: var(--gap-l) var(--gap-xxl) 6rem var(--gap-xxl);
  overflow-y: auto;
  height: 100%;
`;
const CartItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: var(--gap-xxl);
`;
const CartFunWrapper = styled.div`
  margin-bottom: var(--gap-xl);
  aspect-ratio: 2 / 3;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 10rem;
  flex-shrink: 0;
  transition: aspect-ratio 1s, width 1s, aspect-ratio 1s;

  @media screen and (min-width: 650px) {
    margin-right: var(--gap-xl);
    aspect-ratio: 1 / 1;
  }
`;
