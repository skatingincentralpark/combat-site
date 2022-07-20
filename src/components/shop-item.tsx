import { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Image from "../components/image";
import ShopCta from "../components/shop-cta";

type Props = {
  sizes: string[];
};

const ShopItem = ({ sizes }: Props) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <PageWrapper>
      <StyledImage>
        <Image src="/images/Bill2.png" />
      </StyledImage>
      <InfoWrapper>
        <StyledTitle>
          <span>Viktor Tee</span>
          <span>$70 AUD</span>
        </StyledTitle>
        <StyledDescription>
          <p>
            100% Deadstock American cotton. Lightweight and soft. Spun to create
            slubby texture (similar to t-shirts from the mid-90s). Silkscreen
            graphic printed. Boxy fit – longer sleeves and shortened body.
          </p>
          <p>
            Please be aware that the t-shirt will stretch 2-3cm in the shoulders
            & chest with wear. The collar is initially snug, however will
            stretch to a perfect fit with wear.
          </p>
        </StyledDescription>
        <ShopCta
          sizes={sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </InfoWrapper>
    </PageWrapper>
  );
};

export default ShopItem;

const PageWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--gap-page-top) var(--gap-s);

  @media screen and (min-width: 650px) {
    justify-content: flex-end;
    padding-bottom: var(--gap-m);
  }
`;
const InfoWrapper = styled(motion.div)`
  text-align: center;
  margin: 0 var(--gap-m);

  @media screen and (min-width: 650px) {
    border-top: 1px solid var(--gray-2);
    padding-top: var(--gap-s);
    text-align: left;
    display: flex;
  }
`;
const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  margin-bottom: var(--gap-s);

  & > span:nth-of-type(2) {
    color: var(--gray-3);
  }

  @media screen and (min-width: 650px) {
    min-width: 10rem;
  }
`;
const StyledDescription = styled.div`
  padding-bottom: 8rem;

  & > p {
    display: block;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 650px) {
    padding-bottom: 0;
    margin-right: 5rem;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    padding-bottom: 0;

    & > p {
      margin-right: 2rem;
      max-width: 35rem;
    }
  }
`;
const StyledImage = styled.div`
  aspect-ratio: 1 / 1;
  padding: 0 var(--gap-s);

  @media screen and (min-width: 650px) {
    max-width: 30rem;
    padding: 0;
  }
`;
