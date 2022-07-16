import styled from "@emotion/styled";
import Image from "../image";

const CartItem = () => {
  return (
    <CartItemWrapper>
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
    </CartItemWrapper>
  );
};

export default CartItem;

const CartItemWrapper = styled.div`
  width: calc(50% - 1rem);
  height: min-content;
  margin: 1rem 1rem 0 0;

  @media screen and (min-width: 650px) {
    width: calc(20% - 1rem);
  }

  & > div:first-of-type {
    border-radius: 1.5rem;
    overflow: hidden;
  }
`;
const CartItemBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--gap-xxl);

  @media screen and (min-width: 650px) {
    border-top: 0.5px solid var(--olive-1);
    padding: var(--gap-l) 0;
    margin-top: var(--gap-xxl);
  }
`;
const CartItemBodySummary = styled.div`
  margin: var(--gap-l) 0;
`;
