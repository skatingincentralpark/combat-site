import { useContext, forwardRef, useRef } from "react";
import styled from "@emotion/styled";
import CartContext from "@lib/cart-context";
import Image from "@components/image";
import { transientOptions } from "@lib/helpers";
import { m } from "framer-motion";
import { LoadingStar } from "@components/ui";
import { StyledButtonDanger } from "@components/shared-styles/buttons";

interface Props {
  variant: ShopifyVariant;
  title: string;
  quantity: number;
}

// The forwarded ref is for popLayout (Framer Motion) in cartModal
const CartItem = forwardRef<HTMLDivElement, Props>(
  ({ variant, title, quantity }, ref) => {
    const currentPrice = parseInt(variant.price.amount).toFixed(2);
    const compareAtPrice = parseInt(variant.compareAtPrice.amount).toFixed(2);

    const { updateLineItem, isLoading } = useContext(CartContext);

    const imageObject: ImageType = {
      caption: variant.image.altText || title,
      url: variant.image.src,
      height: variant.image.height,
      width: variant.image.width,
      aspectRatio: variant.image.height / variant.image.width,
    };

    const prevQuantity = useRef(quantity);
    const isIncreasing = prevQuantity.current < quantity ? 1 : 0;

    // will only be isIncreasing if someone opens cart immediately after adding to cart
    const QuantityVariants = {
      animate: (isIncreasing: number) => {
        if (isIncreasing === 1) {
          return {
            color: [`#0cd226`, `#000`],
            borderColor: [`#0cd226`, `rgba(255, 255, 255, 0)`],
            x: [0, 5, 0, 0],
          };
        } else {
          return {
            color: [`#ff0000`, `#000`],
            borderColor: [`#ff0000`, `rgba(255, 255, 255, 0)`],
            x: [0, -5, 0, 0],
          };
        }
      },
    };

    return (
      <CartItemWrapper
        ref={ref}
        $loading={isLoading}
        layout
        initial={false}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.75, opacity: 0 }}
        transition={{ type: "spring" }}
      >
        <ImageWrapper>
          <Image image={imageObject} />
        </ImageWrapper>
        <CartItemBody>
          <strong>
            {title}
            {!variant.available && <small> (sold out - please remove) </small>}
          </strong>
          <div>
            <SalePrice>
              ${compareAtPrice} {variant.compareAtPrice.currencyCode}
            </SalePrice>
            ${currentPrice} {variant.price.currencyCode}
          </div>
          <CartItemBodySummary>
            <div>
              <strong>Color:</strong> <span>White</span>
            </div>
            <div>
              <strong>Size:</strong> <span>{variant.title}</span>
            </div>
            <QuantityCount
              key={quantity}
              variants={QuantityVariants}
              animate="animate"
              custom={isIncreasing}
              transition={{ duration: 1 }}
              initial={false}
            >
              <strong>Quantity: </strong>
              <span>{quantity}</span>
            </QuantityCount>
          </CartItemBodySummary>
          <CartRemove
            $loading={isLoading}
            onClick={() =>
              updateLineItem({ variantId: variant.id, quantity: -1 })
            }
          >
            {isLoading ? <LoadingStar /> : "Remove"}
          </CartRemove>
        </CartItemBody>
      </CartItemWrapper>
    );
  }
);

export default CartItem;

const CartItemWrapper = styled(m.div, transientOptions)<{
  $loading: boolean;
}>`
  display: block;
  width: calc(50% - 0.5rem);
  height: min-content;
  transition: width 0.5s ease;
  cursor: ${({ $loading }) => ($loading ? "wait" : "initial")};
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 1000px) {
    width: calc(20% - 0.8rem);
  }
`;
const ImageWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
`;
const CartItemBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--gap-m) var(--gap-xs) var(--gap-xs) var(--gap-xs);

  border-top: 1px solid var(--gray-3);
  padding-top: var(--gap-s);
`;
const CartItemBodySummary = styled.div`
  margin: var(--gap-s) 0 var(--gap-m) 0;
`;
const CartRemove = styled(StyledButtonDanger, transientOptions)<{
  $loading: boolean;
}>`
  pointer-events: ${({ $loading }) => ($loading ? "none" : "initial")};
`;
const SalePrice = styled.span`
  text-decoration: line-through;
  color: red;
  margin-right: 0.7em;
`;
const QuantityCount = styled(m.div)`
  border-bottom: 1px solid #000;
`;

CartItem.displayName = "CartItem";
