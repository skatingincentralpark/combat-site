import CartContext from "@lib/cart-context";
import { useContext } from "react";
import dynamic from "next/dynamic";
import { type CartProps } from "@components/cart/cart";

const CartComponent = dynamic(
  () =>
    import(
      /* webpackChunkName: "Cart_Component" */
      "@components/cart/cart"
    )
);

export default function Cart({ ...props }: CartProps) {
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;
  return <CartComponent {...props} />;
}
