import { useContext, useEffect, useRef } from "react";
import { GetStaticProps } from "next";
import styled from "@emotion/styled";
import useIntersectionObserver from "@hooks/useIntersectionObserver";

import { getAllProducts } from "data";
import ShopItem from "@components/shop-item";
import HeaderContext from "@lib/header-context";

const ShopPage = ({ products }: { products: Product[] }) => {
  const { setIsTransparent } = useContext(HeaderContext);

  const ref = useRef<HTMLImageElement | null>(null);

  const entry = useIntersectionObserver(ref, {
    rootMargin: "-50px",
    threshold: 0,
  });

  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    setIsTransparent(isVisible);
  }, [isVisible]);

  return (
    <>
      <HeroImageWrapper>
        <HeroImage src="/temp/splat1.png" alt="tetsuya nishima" ref={ref} />
      </HeroImageWrapper>
      <ShopPageWrapper>
        <Items>
          {products.map((product) => (
            <ShopItem product={product} key={product.id} />
          ))}
        </Items>
      </ShopPageWrapper>
    </>
  );
};

export default ShopPage;

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
  };
};

const HeroImageWrapper = styled.div`
  padding: 2rem 1rem 3.5rem 1rem;
  height: 100vh;
`;
const HeroImage = styled.img`
  height: 100%;
  margin: auto;
  object-fit: contain;
`;

const Items = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--gap-m);
  margin: auto;
  flex-grow: 1;

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ShopPageWrapper = styled.main`
  padding: var(--header-height) var(--gap-xxl) var(--gap-m) var(--gap-xxl);
  height: 100%;
  display: flex;
`;
