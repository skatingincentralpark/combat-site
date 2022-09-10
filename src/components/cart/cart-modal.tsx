import { useEffect, useRef, useState, useLayoutEffect } from "react";
import styled from "@emotion/styled";
import { m } from "framer-motion";
import Accordion from "../accordion/accordion";
import CartItem from "./cart-item";
import SlideUpModal from "../slide-up-modal";
import { default as NextImage } from "next/image";
import CartCta from "./cart-cta";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

const accordionOptions = [
  {
    label: "Shipping Policy",
    text: "Shipping within Australia is a flat rate of $10AUD. We strive to process each order within 1-2 business days of purchase, unless otherwise stated in checkout. Once your item is shipped, you will receive an email with tracking information.  International shipments are free for orders over $200AUD. Otherwise, prices differ depending on zones, from Australia ($20 - $25 Standard, $30 - $40 Express) - will be confirmed during checkout. Customs charges are different for every country. Goriot does not take any responsibility for any taxes, custom charges, duties and fees.  We do not currently offer returns or exchanges. If you have received a faulty, or the wrong sized item, please contact us at contact@goriot.com.",
  },
  {
    label: "Returns",
    text: "Compiled client and server successfully in 122 ms (522 modules).  European Union: approximately 2-3 working days.  Rest of the world: approximately 4-5 working days.",
  },
  {
    label: "Secure Payment",
    text: "Cotton garments stretch with wear and shrink with warm-hot washes. We recommend washing at 40ºC or less, on medium setting and to hang dry. Please allow for some variance in sizing, due to the stretch/shrink nature of the fabric and handmade construction. Typically, you can expect the tee to stretch 3-5cm in the shoulders and chest. Please take this into account when selecting a size.  You can enjoy beautiful ageing of the t-shirts through time as it adopts a papery-vintage texture with improved drape.  The collar is initially snug, however with wear/stretching, a perfect fit can be achieved.",
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
      setEleVisible(!entry.isIntersecting);
    });

    observer.observe(myRef.current);
  }, [cartOpen]);

  const scrollPersistRef = useRef<HTMLDivElement>(null);

  // Fix for mobile Safari scrolling to top - https://github.com/willmcpo/body-scroll-lock/issues/237
  useLayoutEffect(() => {
    // Disabling scroll works with temporary overwrite
    const storedRequestAnimationFrame = window.requestAnimationFrame;

    window.requestAnimationFrame = () => 42;
    if (!scrollPersistRef.current) return;
    disableBodyScroll(scrollPersistRef.current);
    window.requestAnimationFrame = storedRequestAnimationFrame;

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <CartModalWrapper
      variants={{
        open: {
          opacity: 1,
          // y: 0,
          height: "100%",
          transition: { duration: 0.7, ease: [0.14, 0.62, 0.23, 0.98] },
        },
        closed: {
          opacity: 0,
          // y: "100%",
          height: 0,
          transition: {
            duration: 0.7,
            ease: [0.04, 0.62, 0.23, 0.98],
            when: "afterChildren",
            staggerDirection: -1,
          },
        },
      }}
      initial="closed"
      exit="closed"
      animate="open"
    >
      <CartModalInner ref={scrollPersistRef}>
        <CartFunWrapper>
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
        <CartCta ref={myRef} />
      </CartModalInner>
      <SlideUpModal
        isClosed={!eleVisible}
        padding="0 var(--gap-m)"
        displaydesktop="none"
      >
        <CartCta />
      </SlideUpModal>
    </CartModalWrapper>
  );
};

export default CartModal;

const CartModalWrapper = styled(m.div)`
  position: fixed;
  z-index: 8;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(180deg, #e6ff40, #b7ff01, #ffffff);
  background-size: 400% 400%;
  animation: Combative 4s ease infinite;
  background-attachment: fixed;

  @keyframes Combative {
    0% {
      background-position: 51% 0%;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 51% 0%;
    }
  }

  overflow: scroll;
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
