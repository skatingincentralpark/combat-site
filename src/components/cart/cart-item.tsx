import styled from "styled-components";
import Image from "../image";
// import { StyledButton } from "../shared-styles/styled-button";

type Props = {
  tee: number;
};

const CartItem = ({ tee }: Props) => {
  return (
    <CartItemWrapper>
      {tee === 1 && <Image src="/images/Bill2.png" />}
      {tee === 2 && <Image src="/images/Viktor.png" />}
      {tee === 3 && <Image src="/images/Laughing.png" />}
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
        <CartRemove>Remove</CartRemove>
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

  @media screen and (min-width: 850px) {
    width: calc(20% - 2rem);
  }

  & > div:first-of-type {
    border-radius: 1.5rem;
    overflow: hidden;
  }
`;
const CartItemBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--gap-xl);
  margin-left: var(--gap-m);

  @media screen and (min-width: 650px) {
    border-top: 0.5px solid var(--olive-1);
    padding: var(--gap-l) 0;
    margin-top: var(--gap-xxl);
  }
`;
const CartItemBodySummary = styled.div`
  margin: var(--gap-l) 0 var(--gap-xl) 0;
`;
const CartRemove = styled.button`
  font-weight: 400;
  width: fit-content;
  cursor: pointer;
  text-decoration: underline;
`;
