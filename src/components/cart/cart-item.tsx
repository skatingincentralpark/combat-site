import { useContext, forwardRef } from "react";
import styled from "@emotion/styled";
import CartContext from "@lib/cart-context";
import Image from "@components/image";
import { transientOptions } from "@lib/helpers";
import { m } from "framer-motion";
import { LoadingSpinner } from "@components/ui";

interface Props {
  variant: ShopifyVariant;
  title: string;
  quantity: number;
}

/*
 * The forwarded ref is for popLayout (Framer Motion) in cartModal
 */

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

    return (
      <CartItemWrapper
        ref={ref}
        $loading={isLoading}
        layout
        initial={{ scale: 0.75, opacity: 0 }}
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
          <strong>
            <SalePrice>
              ${compareAtPrice} {variant.compareAtPrice.currencyCode}
            </SalePrice>
            ${currentPrice} {variant.price.currencyCode}
          </strong>
          <CartItemBodySummary>
            <div>
              <strong>Color:</strong> <span>White</span>
            </div>
            <div>
              <strong>Size:</strong> <span>{variant.title}</span>
            </div>
            <div>
              <strong>Quantity:</strong> <span>{quantity}</span>
            </div>
          </CartItemBodySummary>
          <CartRemove
            $loading={isLoading}
            onClick={() =>
              updateLineItem({ variantId: variant.id, quantity: -1 })
            }
          >
            {isLoading ? <LoadingSpinner>&#9733;</LoadingSpinner> : "Remove"}
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
  width: calc(50% - 2rem);
  height: min-content;
  margin: 0 2rem 2rem 0;
  transition: width 0.5s ease;
  cursor: ${({ $loading }) => ($loading ? "wait" : "initial")};
  border: 1px dashed var(--gray-3);
  background-color: white;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 1000px) {
    width: calc(20% - 2rem);
  }

  & > div:first-of-type {
    overflow: hidden;
  }
`;
const ImageWrapper = styled.div`
  border-radius: 1rem;
`;
const CartItemBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--gap-m) var(--gap-xs) var(--gap-xs) var(--gap-xs);

  @media screen and (min-width: 650px) {
    border-top: 1px dashed var(--gray-3);
    padding-top: var(--gap-s);
  }
`;
const CartItemBodySummary = styled.div`
  margin: var(--gap-s) 0 var(--gap-m) 0;
`;
const CartRemove = styled("button", transientOptions)<{ $loading: boolean }>`
  font-weight: 400;
  width: fit-content;
  cursor: pointer;
  pointer-events: ${({ $loading }) => ($loading ? "none" : "initial")};
  transition: border-color 200ms, transform 200ms;
  padding: var(--gap-3xs) var(--gap-xs);
  border-radius: var(--gap-3xs);
  background-color: var(--gray-1);
  color: gray;
  width: 100%;
  height: var(--button-height);
  border: 1px dashed var(--gray-1);

  &:hover {
    border-color: var(--gray-3);
  }

  &:active {
    transform: scale(0.95);
  }
`;
const SalePrice = styled.span`
  text-decoration: line-through;
  color: red;
  margin-right: 0.7em;
`;
