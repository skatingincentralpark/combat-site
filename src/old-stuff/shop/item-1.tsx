import HeadSEO from "@components/head-seo";
import { useState } from "react";
import styled from "@emotion/styled";
import FutureImage from "next/image";
import ShopCta from "@components/shop-cta";
import productImage from "../../../public/images/tee-bill.png";

const ShopItemPage = () => {
  const sizes = ["s", "m", "l", "xl"];

  return (
    <>
      <HeadSEO title="Item 1" />
      <ShopItem sizes={sizes} />
    </>
  );
};

export default ShopItemPage;

type Props = {
  sizes: string[];
};

const ShopItem = ({ sizes }: Props) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <PageWrapper>
      <StyledImage>
        <FutureImage src={productImage} alt="Something" />
      </StyledImage>
      <InfoWrapper>
        <StyledTitle>
          <h1>Viktor Tee</h1>
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

const PageWrapper = styled.main`
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
const InfoWrapper = styled.div`
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
  font-weight: 400;
  margin-bottom: var(--gap-s);
  font-size: 17px;
  line-height: 1.6em;
  letter-spacing: -0.02em;
  text-align: left;

  @media screen and (min-width: 650px) {
    line-height: 1.5em;
    font-size: 12px;
  }

  & > span {
    color: var(--green-2);
    font-size: 14px;
  }

  @media screen and (min-width: 650px) {
    min-width: 10rem;

    & > span {
      color: var(--green-2);
      font-size: 12px;
    }
  }
`;
const StyledDescription = styled.div`
  padding-bottom: 2rem;
  font-size: 14px;
  line-height: 1.5em;
  text-align: left;

  & > p {
    display: block;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 650px) {
    font-size: 12px;
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
  & > img {
    object-fit: contain;
    height: fit-content;
    aspect-ratio: 1 / 1;
    margin-bottom: 2rem;
    overflow: hidden;
    padding: var(--gap-xs);
  }

  @media screen and (min-width: 650px) {
    max-width: 30rem;
    padding: 0;

    & > img {
      border: none;
    }
  }
`;
