import { useContext } from "react";
import styled from "@emotion/styled";
import CartContext from "@lib/cart-context";
import Image from "@components/image";

interface Props {
  variant: ShopifyVariant;
  title: string;
  quantity: number;
}

const CartItem = ({ variant, title, quantity }: Props) => {
  const currentPrice = parseInt(variant.price.amount).toFixed(2);
  const compareAtPrice = parseInt(variant.compareAtPrice.amount).toFixed(2);

  const { updateLineItem } = useContext(CartContext);

  const imageObject: ImageType = {
    caption: variant.image.altText || title,
    url: variant.image.src,
    height: variant.image.height,
    width: variant.image.width,
    aspectRatio: variant.image.height / variant.image.width,
  };

  return (
    <CartItemWrapper>
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
          onClick={() =>
            updateLineItem({ variantId: variant.id, quantity: -1 })
          }
        >
          Remove
        </CartRemove>
      </CartItemBody>
    </CartItemWrapper>
  );
};

export default CartItem;

const CartItemWrapper = styled.div`
  width: calc(50% - 2rem);
  height: min-content;
  margin: 2rem 2rem 2rem 0;
  transition: width 0.5s ease;

  @media screen and (min-width: 1000px) {
    width: calc(20% - 2rem);
  }

  & > div:first-of-type {
    overflow: hidden;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  border-radius: 1rem;
  aspect-ratio: 1 / 1;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;
const CartItemBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--gap-m);
  margin-left: var(--gap-xs);

  @media screen and (min-width: 650px) {
    border-top: 0.5px solid #000;
    padding: var(--gap-s) 0;
    margin-top: var(--gap-l);
  }
`;
const CartItemBodySummary = styled.div`
  margin: var(--gap-s) 0 var(--gap-m) 0;
`;
const CartRemove = styled.button`
  font-weight: 400;
  width: fit-content;
  cursor: pointer;
  text-decoration: underline;
`;
const SalePrice = styled.span`
  text-decoration: line-through;
  color: red;
  margin-right: 0.7em;
`;
