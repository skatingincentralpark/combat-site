import styled from "@emotion/styled";
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

const ShopItem = ({ product }: Props) => {
  const router = useRouter();
  const details = Object.entries(product);

  const navigate = () => {
    router.push("/shop-item");
  };

  return (
    <ShopItemWrapper onClick={navigate}>
      <StyledImage>
        <Image src="/images/Bill2.png" />
      </StyledImage>
      <StyledDescription>
        {details.map((x, i) => (
          <StyledDescriptionItem key={i}>
            <span>{x[0]}: </span>
            <span>{x[1]}</span>
          </StyledDescriptionItem>
        ))}
      </StyledDescription>
      <StyledCtaWrapper>
        <StyledButton>View</StyledButton>
      </StyledCtaWrapper>
    </ShopItemWrapper>
  );
};

export default ShopItem;

const ShopItemWrapper = styled(motion.div)`
  width: 100%;
  height: fit-content;

  margin: var(--gap-l);

  cursor: pointer;

  box-shadow: 4px 6px 15px var(--gray-2);

  border: 1px solid var(--gray-2);
  border-radius: 1rem;

  transform: rotate(0deg);
  transition: width 0.25s ease, transform 0.15s ease, border 0.25s ease,
    box-shadow 0.25s ease;

  @media screen and (min-width: 700px) {
    width: calc(50% - 2rem);
  }
  @media screen and (min-width: 1050px) {
    width: calc(25% - 2rem);
  }

  &:hover {
    transform: scale(1.02);
    border-color: var(--green-1);
    box-shadow: 4px 6px 15px var(--green-light-1);
  }
  &:active {
    border-color: var(--green-3);
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
  background-color: var(--green-1);
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: var(--green-2);
  }
  &:active {
    background-color: var(--green-3);
  }
`;
