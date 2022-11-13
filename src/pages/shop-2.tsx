import styled from "@emotion/styled";
import { default as NextImage } from "next/legacy/image";
import Link from "@components/link";
import { useState } from "react";

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
            <Link href="/shop/item-2">
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
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ShopPageWrapper = styled.main`
  padding-top: var(--header-height);
  padding: var(--gap-m) var(--gap-xxl) var(--gap-m) var(--gap-xxl);
  height: 100%;
  display: flex;
`;
