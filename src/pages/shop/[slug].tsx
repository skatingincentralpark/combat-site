// @ts-nocheck
import { useEffect, useState, useContext } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import styled from "@emotion/styled";
import { clamp } from "@lib/helpers";
import ShopCta from "@components/shop-cta";
import Image from "@components/image";
import CartContext from "@lib/cart-context";

import useSWR from "swr";
import axios from "axios";
import { getAllProductsIdsAndHandles, getProduct } from "data";

const fetcher = async (url: string, id: string) => {
  const res = await axios.get(url, {
    params: {
      id,
    },
  });

  return res.data;
};

const ShopItemPage = ({ product }: { product: Product }) => {
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

  const image: ImageType = {
    caption: product?.title,
    url: product?.images.nodes[0]?.url,
    height: product?.images.nodes[0]?.height,
    width: product?.images.nodes[0]?.width,
    aspectRatio:
      product?.images.nodes[0]?.height / product?.images.nodes[0]?.width,
  };

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
    <StyledCenteredWrapper>
      <ShopItemWrapper>
        <Image image={image} />
        <ShopItemInfo>
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
              showBack
            />
          </ShopItemBody>
        </ShopItemInfo>
      </ShopItemWrapper>
    </StyledCenteredWrapper>
  );
};

export default ShopItemPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllProductsIdsAndHandles();

  return {
    paths: data.map((x) => ({ params: { slug: x.handle } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = "" } = context.params!; // Should fix typing here

  const product = await getProduct(slug as string);

  return {
    props: {
      product: product,
    },
  };
};

const StyledCenteredWrapper = styled.div`
  height: fit-content;
  margin: auto;
  min-height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 60rem;
`;

const ShopItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
  padding: var(--gap-page-top) var(--gap-m) var(--gap-3xl) var(--gap-m);

  @media screen and (min-width: 600px) {
    padding-top: 0;
    flex-wrap: nowrap;
  }

  & * {
    font-size: ${clamp(12, 14, 1440, 2560)};
  }

  & > img {
    height: auto;
    width: 100%;
    max-width: 40rem;

    @media screen and (min-width: 600px) {
      max-width: 50%;
    }
  }
`;

const ShopItemInfo = styled.div`
  border: 1px solid #d2dc9f;
  border-radius: 16px;
  position: relative;

  height: fit-content;
  margin-left: 0;

  overflow: hidden;
  width: 100%;

  @media screen and (min-width: 600px) {
    margin-left: 2rem;
  }
`;

const ShopItemHeader = styled.div`
  background-color: #f5f8dd;
  border-bottom: 1px solid #d2dc9f;

  padding: 0.75rem 1rem;

  display: flex;
  justify-content: space-between;

  & > span:nth-of-type(1) {
    font-weight: 600;
  }
  & > span:nth-of-type(2) {
    color: #969696;
  }
`;

const ShopItemBody = styled.div`
  padding: 0 1rem;

  p,
  strong,
  ul {
    line-height: ${clamp(18, 16, 1440, 2560)};
    font-size: ${clamp(12, 14, 1440, 2560)};
    margin: 1em auto;
  }

  & > * {
    margin-bottom: 1rem;
  }
`;

const SalePrice = styled.span`
  text-decoration: line-through;
  color: red;
  margin-right: 0.7em;
`;

const Thumbnails = ({ images }: { images: ImageType[] }) => {
  return (
    <StyledThumbnail>
      {images.map((x, i) => (
        <Image image={x} key={`thumb: ${i}`} />
      ))}
    </StyledThumbnail>
  );
};

const StyledThumbnail = styled.div`
  display: flex;
  border-bottom: 0.5px solid var(--gray-4);

  & > * {
    width: 5rem;
  }
`;
