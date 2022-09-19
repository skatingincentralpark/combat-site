import { useRef } from "react";
import styled from "@emotion/styled";
import { AnimatePresence, m } from "framer-motion";
import Accordion from "../accordion/accordion";
import CartItem from "./cart-item";
import { default as NextImage } from "next/image";
import CartCta from "./cart-cta";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

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

const CartModal = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const refScrollable = useRef<HTMLDivElement>(null);

  const entry = useIntersectionObserver(ref, {
    root: refScrollable?.current,
    rootMargin: "100px",
  });
  const isVisible = !!entry?.isIntersecting;

  useLockBodyScroll(refScrollable);

  const slideUpVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const parentVariants = {
    open: {
      opacity: 1,
      y: 0,
      background: "white",
      transition: { duration: 0.6, ease: [0.14, 0.62, 0.23, 0.98] },
    },
    closed: {
      opacity: 0,
      y: 60,
      background: "var(--yellow-1)",
      transition: { duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] },
    },
  };

  return (
    <CartModalWrapper
      variants={parentVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <CartModalInner ref={refScrollable}>
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
        <CartCta ref={ref} />
      </CartModalInner>
      <AnimatePresence>
        {!isVisible && (
          <TempSlideUpModal {...slideUpVariant}>
            <CartCta />
          </TempSlideUpModal>
        )}
      </AnimatePresence>
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
  background: var(--piss-1);

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
const TempSlideUpModal = styled(m.div)`
  width: 100%;

  background-color: var(--piss-1);
  position: fixed;
  bottom: 0;
  padding: 0 var(--gap-m);

  @media screen and (min-width: 650px) {
    display: none;
  }
`;
