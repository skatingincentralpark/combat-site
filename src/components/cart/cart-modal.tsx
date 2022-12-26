import { useRef, useContext } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { AnimatePresence, m } from "framer-motion";
import Accordion from "../accordion/accordion";
import CartItem from "./cart-item";
import CartCta from "./cart-cta";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import useLockBodyScroll from "@hooks/useLockBodyScroll";
import {
  cartModalVariants,
  headerInnerVariants,
  cartModalMobileCtaVariants,
} from "@lib/animate";
import CartContext from "@lib/cart-context";
import Video from "@components/video";

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

  const { checkout } = useContext(CartContext);

  return (
    <>
      <m.div
        {...cartModalMobileCtaVariants}
        style={{
          position: `fixed`,
          bottom: `3rem`,
          width: `100%`,
          zIndex: 10,
        }}
      >
        <AnimatePresence>
          {!isVisible && (
            <TempSlideUpModal {...cartModalMobileCtaVariants} key="cart-cta">
              <CartCta totalPrice={checkout?.totalPriceV2.amount || "0"} />
            </TempSlideUpModal>
          )}
        </AnimatePresence>
      </m.div>
      <CartModalWrapper {...cartModalVariants}>
        <CartModalInner ref={refScrollable} {...headerInnerVariants}>
          <CartVideo />
          <CartItemsWrapper>
            <AnimatePresence mode="popLayout">
              {checkout?.lineItems.map((item) => (
                <CartItem
                  key={item.variant.id}
                  variant={item.variant}
                  title={item.title}
                  quantity={item.quantity}
                />
              ))}
            </AnimatePresence>
          </CartItemsWrapper>

          <Accordion options={accordionOptions} />
          <CartCta
            ref={ref}
            totalPrice={checkout?.totalPriceV2.amount || "0"}
          />
        </CartModalInner>
      </CartModalWrapper>
    </>
  );
};

export default CartModal;

const CartModalWrapper = styled(m.div)`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #e4e4e4;
  overflow: scroll;
`;
const CartModalInner = styled(m.div)`
  padding: var(--gap-l) var(--gap-l) 3rem var(--gap-l);
  overflow-y: auto;
  height: 100vh;
`;
const CartItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: var(--gap-l);
  gap: 1rem;
`;
const TempSlideUpModal = styled(m.div)`
  width: 100%;

  background-color: #e8ff8f;
  padding: 0 var(--gap-m);

  @media screen and (min-width: 650px) {
    display: none;
  }
`;

const CartVideo = () => {
  const asset = {
    url: "/videos/shin-sound.mp4",
    height: 720,
    width: 504,
    caption: "Shin Matsunaga",
    alt: "Shin Matsunaga",
    autoplay: true,
  };

  return (
    <Video
      asset={asset}
      defaultOnScreen={true}
      controls={false}
      containerStyles={containerStyles}
    />
  );
};

const containerStyles = css`
  height: clamp(200px, 10vw, 250px);
  width: auto;
  margin-bottom: var(--gap-l);
`;
