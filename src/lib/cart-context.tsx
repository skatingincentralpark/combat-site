import React, { createContext, useState, useEffect } from "react";
import { shopifyClient } from "./shopify";

interface UpdateLineItemFunctionArgs {
  variantId: string;
  quantity: number;
}

interface LineItem {
  title: string;
  id: string;
  variant: ShopifyVariant;
  quantity: number;
}

interface Checkout {
  createdAt: string;
  id: string;
  totalPriceV2: {
    amount: string;
  };
  lineItems: LineItem[];
}

interface DefaultState {
  isLoading: boolean;
  checkout: Checkout | null;
  updateLineItem: ({ variantId, quantity }: UpdateLineItemFunctionArgs) => void;
  removeLineItem: (lineItemId: string) => void;
  getProductById: (productId: string) => void;
  dismissSuccessfulOrder: () => void;
  successfulOrder: Checkout | null;
}

// Initializing a client to return content in the store's primary language
const client = shopifyClient;

const defaultState: DefaultState = {
  isLoading: true,
  checkout: null,
  updateLineItem: () => {},
  removeLineItem: () => {},
  getProductById: () => {},
  dismissSuccessfulOrder: () => {},
  successfulOrder: null,
};

const CartContext = createContext(defaultState);

export default CartContext; // what's used to actually consume the context

// ContextProvider to wrap everything
const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [successfulOrder, setSuccessfulOrder] = useState(null);
  // actual checkout object, which will be created once for a checkout
  // initially undefined, until updateLineItem is called to create new
  const [checkout, setCheckout] = useState<Checkout | null>(() => {
    const checkoutFromStorage =
      typeof window !== "undefined" ? localStorage.getItem("checkout") : null;

    return checkoutFromStorage !== null
      ? JSON.parse(checkoutFromStorage)
      : null;
  });

  const checkoutId = checkout?.id;

  useEffect(() => {
    const getCheckout = async () => {
      // if checkoutId exists; fetch checkout
      if (checkoutId && typeof window !== "undefined") {
        const fetchedCheckout = await client.checkout.fetch(checkoutId);
        if (fetchedCheckout?.completedAt) {
          localStorage.removeItem("checkout");
          setCheckout(null);
          setSuccessfulOrder(fetchedCheckout);
        } else {
          setCheckout(fetchedCheckout);
          localStorage.setItem("checkout", JSON.stringify(fetchedCheckout));
        }
      }
      setIsLoading(false);
    };
    getCheckout();
  }, [setCheckout, setSuccessfulOrder, checkoutId]);

  async function getProductById(productId: string) {
    const product = await client.product.fetch(productId);
    return product;
  }

  const updateLineItem = async ({
    variantId,
    quantity,
  }: UpdateLineItemFunctionArgs) => {
    setIsLoading(true);
    // if no checkout id, create a new checkout
    let newCheckout = checkout || (await client.checkout.create());

    // check to see if this variantId exists in storedCheckout
    const lineItemVariant = newCheckout.lineItems?.find(
      (lineItem: LineItem) => lineItem.variant.id === variantId
    );

    // if item variant; update/remove quantity, if no item variant; add new item
    if (lineItemVariant) {
      // add/remove quantity of particular product variant
      const newQuantity = lineItemVariant.quantity + quantity;

      if (newQuantity) {
        newCheckout = await client.checkout.updateLineItems(newCheckout.id, [
          {
            id: lineItemVariant.id,
            quantity: newQuantity,
          },
        ]);
      } else {
        newCheckout = await client.checkout.removeLineItems(newCheckout.id, [
          lineItemVariant.id,
        ]);
      }
    } else {
      newCheckout = await client.checkout.addLineItems(newCheckout.id, [
        {
          variantId,
          quantity,
        },
      ]);
    }

    setCheckout(newCheckout);
    setSuccessfulOrder(null);
    if (typeof window !== "undefined") {
      localStorage.setItem("checkout", JSON.stringify(newCheckout));
    }
    setIsLoading(false);
  };

  const removeLineItem = async (lineItemId: string) => {
    setIsLoading(true);
    const newCheckout = await client.checkout.removeLineItems(checkout?.id, [
      lineItemId,
    ]);
    setCheckout(newCheckout);
    setIsLoading(false);
  };

  const dismissSuccessfulOrder = () => {
    setSuccessfulOrder(null);
  };

  return (
    <CartContext.Provider
      value={{
        isLoading,
        checkout,
        updateLineItem,
        removeLineItem,
        getProductById,
        successfulOrder,
        dismissSuccessfulOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
