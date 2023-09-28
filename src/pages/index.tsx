import { useContext, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import useIntersectionObserver from "@hooks/useIntersectionObserver";

import HeaderContext from "@lib/header-context";
import { LookbookType } from "types/lookbookTypes";

import Picasso from "../../public/images/picasso.jpeg";
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
        <SImage
          src={Picasso}
          alt="Picasso"
          sizes={"(max-width: 768px) 80vw, (max-width: 1400px) 33vw, 22vw"}
        />
      </ShopPageWrapper>
    </HomeWrapper>
  );
};

export default HomePage;

const HomeWrapper = styled.main`
  padding: 2rem 0 3rem 0;
`;
const SImage = styled(Image)`
  height: 50rem;
  object-fit: contain;
`;
const ShopPageWrapper = styled.div`
  padding: var(--header-height) var(--gap-xs) var(--gap-xxl) var(--gap-xs);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

  @media screen and (min-width: 500px) {
    padding: var(--header-height) var(--gap-xxl) var(--gap-xxl) var(--gap-xxl);
  }
`;
