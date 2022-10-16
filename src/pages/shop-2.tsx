import styled from "@emotion/styled";
import { default as NextImage } from "next/image";
import { HeadingSm, TextSm } from "@components/shared-styles/typography";
import Link from "@components/link";
import HeadSEO from "@components/head-seo";
import { useEffect, useState } from "react";

const products = [
  {
    title: "Aftermath",
    price: "60",
    collection: "Spring Song Recondo",
    year: "2022",
    material: "USA Cotton",
    made: "Japan",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/tee-laughing.png",
  },
  {
    title: "Aftermath",
    price: "60",
    collection: "Spring Song Recondo",
    year: "2022",
    material: "USA Cotton",
    made: "Japan",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/tee-viktor.png",
  },
  {
    title: "Aftermath",
    price: "60",
    collection: "Spring Song Recondo",
    year: "2022",
    material: "USA Cotton",
    made: "Japan",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/tee-bill.png",
  },
  {
    title: "Aftermath",
    price: "60",
    collection: "Spring Song Recondo",
    year: "2022",
    material: "USA Cotton",
    made: "Japan",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/tee-wartime.png",
  },
];

const infoCards = [
  { title: "Silky USA Cotton" },
  { title: "Made in Japan" },
  { title: "Double Wrapped Neck" },
];

const ShopPage = () => {
  const colors = ["orange", "purple", "green"];

  const [colorIndex, setColorIndex] = useState(0);

  const cycleColor = () =>
    setColorIndex(colors.length - 1 === colorIndex ? 0 : colorIndex + 1);

  return (
    <ShopPageWrapper>
      <Items>
        {products.map((product, i) => (
          <Item key={i} color={colors[colorIndex]} onMouseDown={cycleColor}>
            <Link href="/shop/item-1">
              <Dot color={colors[colorIndex]} />
              <NextImage
                src={product.image}
                layout="fill"
                objectFit="contain"
              />
            </Link>
          </Item>
        ))}
      </Items>
    </ShopPageWrapper>
  );
};

export default ShopPage;

const Items = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--gap-m);
  max-width: 50rem;
  margin: auto;
  flex-grow: 1;
`;

const Item = styled.div`
  display: block;
  aspect-ratio: 1;

  & > * {
    border-radius: 1rem;
    border: 1px dashed var(--gray-2);
    transition: border 200ms ease, outline 200ms ease;
    overflow: hidden;
    --dot-opacity: 0;
    --dot-scale: 3;

    &:hover {
      @media screen and (min-width: 700px) {
        border-color: var(--gray-4);
      }
    }

    &:active {
      border: 1px dashed ${({ color }) => color && color};
      --dot-opacity: 100%;
      --dot-scale: 1;
    }

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Dot = styled.div`
  position: absolute;
  z-index: 1;
  width: 10%;
  height: 10%;
  border-radius: 50%;
  background-color: ${({ color }) => color && color};
  opacity: var(--dot-opacity);
  transform: scale(var(--dot-scale));
  transform-origin: center;
  transition: opacity 150ms, transform 150ms, background 150ms;
`;

const ShopPageWrapper = styled.main`
  padding-top: var(--header-height);
  padding: var(--gap-m) var(--gap-xxl) var(--gap-m) var(--gap-xxl);
  height: 100%;
  display: flex;
`;
