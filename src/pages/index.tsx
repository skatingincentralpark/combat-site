import { useContext, useEffect, useRef } from "react";
import { GetStaticProps } from "next";
import styled from "@emotion/styled";
import useIntersectionObserver from "@hooks/useIntersectionObserver";

import { getAllProducts, getLookbook } from "data";
import ShopItem from "@components/shop-item";
import HeaderContext from "@lib/header-context";
import { LookbookType } from "types/lookbookTypes";

import Thom from "../../public/images/thom.jpeg";
import Image from "next/image";

const HomePage = ({
  products,
  lookbook,
}: {
  products: Product[];
  lookbook: LookbookType;
}) => {
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
    <HomeWrapper>
      <ShopPageWrapper>
        <Items>
          {products.map((product) => (
            <ShopItem product={product} key={product.id} />
          ))}
        </Items>
      </ShopPageWrapper>
    </HomeWrapper>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts();
  const lookbook = await getLookbook("spring-song");

  return {
    props: {
      products,
      lookbook,
    },
  };
};

const HomeWrapper = styled.main`
  padding: 2rem 0 3rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > img {
    min-width: 0;
  }

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const HeroImageWrapper = styled.div`
  padding: 0 1rem 3.5rem 1rem;
  height: 100vh;
`;
const HeroImage = styled(Image)`
  height: 100%;
  margin: auto;
  object-fit: contain;
`;

const Items = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: var(--gap-xl);
  margin: auto;
  flex-grow: 1;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ShopPageWrapper = styled.div`
  padding: var(--header-height) var(--gap-xs) var(--gap-xxl) var(--gap-xs);
  min-height: 100vh;
  display: flex;

  @media screen and (min-width: 500px) {
    padding: var(--header-height) var(--gap-xxl) var(--gap-xxl) var(--gap-xxl);
  }
`;
