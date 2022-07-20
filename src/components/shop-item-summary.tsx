import styled from "styled-components";
import Image from "./image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

type Props = {
  product: {
    title: string;
    price: string;
    collection: string;
    year: string;
    material: string;
    made: string;
    sizes: string[];
  };
};

const ShopItemSummary = ({ product }: Props) => {
  const router = useRouter();
  const details = Object.entries(product);

  const navigate = () => {
    router.push("/shop/item-1");
  };

  return (
    <ShopItemWrapper onClick={navigate}>
      <StyledImage>
        <Image src="/images/Bill2.png" />
      </StyledImage>
      <StyledDescription>
        {details.map((detail, i) => (
          <StyledDescriptionItem key={i}>
            <span>{detail[0]}: </span>
            <span>{detail[1]}</span>
          </StyledDescriptionItem>
        ))}
      </StyledDescription>
      <StyledCtaWrapper>
        <StyledButton>View</StyledButton>
      </StyledCtaWrapper>
    </ShopItemWrapper>
  );
};

export default ShopItemSummary;

const ShopItemWrapper = styled(motion.div)`
  width: 100%;
  height: fit-content;

  margin: var(--gap-l);

  cursor: pointer;

  box-shadow: 4px 6px 15px var(--gray-2);

  border: 1px solid var(--gray-2);
  border-radius: 1rem;

  transform: rotate(0deg);
  transition: width 0.5s ease, transform 0.15s ease, border 0.1s,
    box-shadow 0.25s ease;

  @media screen and (min-width: 700px) {
    width: calc(50% - 3rem);
  }
  @media screen and (min-width: 1050px) {
    width: calc(25% - 3rem);
  }

  --active-hover-color: var(--green-1);

  &:hover {
    @media screen and (min-width: 700px) {
      transform: scale(1.02);
      border-color: var(--active-hover-color);
      box-shadow: 4px 6px 15px var(--active-hover-color);
    }
  }

  &:active {
    --active-hover-color: var(--green-2);
    border-color: var(--active-color);
  }
`;
const StyledImage = styled.div`
  width: 70%;
  aspect-ratio: 1 / 1;
  margin: auto;
`;
const StyledDescription = styled.div`
  background-color: var(--gray-1);
  border-top: 1px dashed var(--gray-2);
  border-bottom: 1px dashed var(--gray-2);
  padding: var(--gap-m) var(--gap-l);
`;
const StyledDescriptionItem = styled.div`
  display: flex;

  & > span:first-of-type {
    font-weight: 600;
    min-width: clamp(7rem, 6vw, 10rem);
    margin-right: var(--gap-l);
  }
  & > span:nth-of-type(2) {
  }
`;
const StyledCtaWrapper = styled.div`
  padding: var(--gap-l);
`;
const StyledButton = styled.button`
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  padding: var(--gap-s) var(--gap-l);
  background-color: var(--active-hover-color);
  width: 100%;
  cursor: pointer;
`;
