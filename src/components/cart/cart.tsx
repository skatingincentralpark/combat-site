import { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { AnimatePresence } from "framer-motion";
import CartModal from "./cart-modal";
import { headerCartVariants } from "@lib/animate";
import { ButtonBaseMotion } from "@components/ui";
import CartContext from "@lib/cart-context";

const Cart = ({
  cartOpen,
  toggleCart,
  navOpen,
}: {
  cartOpen: boolean;
  toggleCart: () => void;
  navOpen: boolean;
}) => {
  const { checkout, isLoading } = useContext(CartContext);
  const { lineItems } = checkout || {};
  const [quantityInCart, setQuantityInCart] = useState<number | null>(null);

  useEffect(() => {
    if (!lineItems) return;
    const sumOfAllVariantsQuantities = lineItems?.reduce(
      (partialSum, a) => partialSum + a.quantity,
      0
    );
    setQuantityInCart(sumOfAllVariantsQuantities);
  }, [lineItems]);

  if (!checkout) return null;

  return (
    <>
      <AnimatePresence>
        {quantityInCart && (
          <CartButton onClick={toggleCart} {...headerCartVariants()}>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <div>{!cartOpen ? `Cart (${quantityInCart})` : `Close`} </div>
            )}
          </CartButton>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {cartOpen && !navOpen && quantityInCart && <CartModal />}
      </AnimatePresence>
    </>
  );
};

export default Cart;

const CartButton = styled(ButtonBaseMotion)`
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  transition: background-color 200ms;
  backdrop-filter: blur(2px);
  background-color: rgba(255, 251, 0, 0.5);

  &:active {
    background-color: var(--yellow-1) !important;
  }
`;
