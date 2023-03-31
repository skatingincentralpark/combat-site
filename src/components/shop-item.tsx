import styled from "@emotion/styled";
import Image from "@components/image";
import { useContext, useEffect, useState } from "react";
import ShopCta from "@components/shop-cta";

import useSWR from "swr";
import axios from "axios";
import CartContext from "@lib/cart-context";

const fetcher = async (url: string, id: string) => {
  const res = await axios.get(url, {
    params: {
      id,
    },
  });

  return res.data;
};

const ShopItem = ({ product }: { product: Product }) => {
  const currentPrice = parseInt(
    product?.priceRange.minVariantPrice.amount
  ).toFixed(2);
  const compareAtPrice = parseInt(
    product?.priceRange.maxVariantPrice.amount
  ).toFixed(2);
  const currencyCode = product?.priceRange.minVariantPrice.currencyCode;
  const onSale = currentPrice !== compareAtPrice;
  const [selectedSize, setSelectedSize] = useState<number | undefined>(
    undefined
  );

  const { data: latestVariants } = useSWR<ShopifyVariant[]>(
    ["/api/shopify-item-available", product?.handle],
    ([url, id]) => fetcher(url, id),
    { errorRetryCount: 3 }
  );

  useEffect(() => {
    setSelectedSize(
      latestVariants?.findIndex((variant) => variant.quantityAvailable > 0)
    );
  }, [latestVariants]);

  const { updateLineItem } = useContext(CartContext);

  const submit = () =>
    typeof selectedSize !== "undefined" &&
    latestVariants &&
    updateLineItem({ variantId: latestVariants[selectedSize].id, quantity: 1 });

  return (
    <Item key={product.title}>
      <Image
        image={{
          caption: product.title,
          url: product.images.nodes[0].url,
          height: product.images.nodes[0].height,
          width: product.images.nodes[0].width,
          aspectRatio:
            product.images.nodes[0].height / product.images.nodes[0].width,
        }}
      />
      <ShopItemHeader>
        <span>{product?.title}</span>
        <span>
          {onSale && (
            <SalePrice>
              {compareAtPrice} {currencyCode}
            </SalePrice>
          )}
          {currentPrice} {currencyCode}
        </span>
      </ShopItemHeader>
      <ShopItemBody>
        <div
          dangerouslySetInnerHTML={{ __html: product?.descriptionHtml }}
          style={{ borderBottom: "0.5px solid var(--gray-4)" }}
        />
        <ShopCta
          variants={latestVariants || product?.variants.nodes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          submit={submit}
        />
      </ShopItemBody>
    </Item>
  );
};

export default ShopItem;

const Item = styled.div`
  display: block;
  aspect-ratio: 1;
  text-align: center;

  & > * {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & img {
    object-fit: contain;
    width: auto;
    height: auto;
  }
`;

const SalePrice = styled.span`
  text-decoration: line-through;
  color: red;
  margin-right: 0.7em;
`;

const ShopItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-weight: 500;
`;

const ShopItemBody = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  & > * {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;
