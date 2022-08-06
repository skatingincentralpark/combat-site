import { useEffect, useRef, useState, useLayoutEffect } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Accordion from "../accordion/accordion";
import CartItem from "./cart-item";
import SlideUpModal from "../slide-up-modal";
import { default as NextImage } from "next/image";
import CartCta from "./cart-cta";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

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

const CartModal = ({ cartOpen }: { cartOpen: boolean }) => {
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

  const scrollPersistRef = useRef<HTMLDivElement>(null);

  // Fix for mobile Safari scrolling to top - https://github.com/willmcpo/body-scroll-lock/issues/237
  useLayoutEffect(() => {
    if (!scrollPersistRef.current) return;

    // Disabling scroll works with temporary overwrite
    const storedRequestAnimationFrame = window.requestAnimationFrame;

    window.requestAnimationFrame = () => 42;
    disableBodyScroll(scrollPersistRef.current);
    window.requestAnimationFrame = storedRequestAnimationFrame;

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <CartModalWrapper
      variants={variants}
      initial="initial"
      exit="exit"
      animate="animate"
      ref={scrollPersistRef}
    >
      <CartModalInner>
        <CartFunWrapper ref={myRef}>
          <NextImage
            src="/images/otter-cheeks.jpeg"
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
        <Accordion options={accordionOptions} />
        <CartCta />
      </CartModalInner>
      <SlideUpModal
        isClosed={!eleVisible}
        backgroundcolor="var(--yellow-4)"
        padding="0 var(--gap-m)"
        displaydesktop="none"
      >
        <CartCta />
      </SlideUpModal>
    </CartModalWrapper>
  );
};

export default CartModal;

const CartModalWrapper = styled(motion.div)`
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
  padding: var(--gap-s) var(--gap-l) var(--gap-s) var(--gap-l);
  overflow-y: auto;
  height: 100%;
`;
const CartItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: var(--gap-l);
`;
const CartFunWrapper = styled.div`
  margin-bottom: var(--gap-m);
  aspect-ratio: 2 / 3;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 10rem;
  flex-shrink: 0;
  transition: aspect-ratio 1s, width 1s, aspect-ratio 1s;

  @media screen and (min-width: 650px) {
    margin-right: var(--gap-m);
    aspect-ratio: 1 / 1;
  }
`;
