import styled from "@emotion/styled";
import Image from "../image";
import image1 from "../../../public/images/tee-bill.png";
import image2 from "../../../public/images/tee-viktor.png";
import image3 from "../../../public/images/tee-laughing.png";

type Props = {
  tee: number;
};

const CartItem = ({ tee }: Props) => {
  return (
    <CartItemWrapper>
      {tee === 1 && <Image src={image1} />}
      {tee === 2 && <Image src={image2} />}
      {tee === 3 && <Image src={image3} />}
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
  margin-top: var(--gap-m);
  margin-left: var(--gap-xs);

  @media screen and (min-width: 650px) {
    border-top: 0.5px solid var(--olive-1);
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
