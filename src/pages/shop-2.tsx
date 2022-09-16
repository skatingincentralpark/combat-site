import styled from "@emotion/styled";
import { default as NextImage } from "next/image";
import { HeadingSm, TextSm } from "components/shared-styles/typography";
import { StyledPageWrapper } from "components/shared-styles/page-wrappers";
import Link from "components/link";

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
  return (
    <ShopPageWrapper>
      <IntroText>
        <HeadingSm>
          From the essays of Emerson, to the stories of the Beat, these
          vanguards of individualism, freedom and improvisation give us comfort
          and confidence to work towards these values - the values which we
          believe are key to living a fulfilling life.
        </HeadingSm>
      </IntroText>
      <ProductGroup>
        {products.map((product, i) => (
          <Product key={i}>
            <Link href="#">
              <NextImage
                src={product.image}
                layout="fill"
                objectFit="contain"
              />
            </Link>
          </Product>
        ))}
      </ProductGroup>
      <InfoCardGroup>
        {infoCards.map((x) => (
          <InfoCard title={x.title} key={x.title} />
        ))}
      </InfoCardGroup>
    </ShopPageWrapper>
  );
};

export default ShopPage;

const ShopPageWrapper = styled(StyledPageWrapper)``;
const IntroText = styled.div`
  padding: var(--gap-xxl) var(--gap-xxl) 0 var(--gap-xxl);
  max-width: 70rem;
  margin: auto;
  text-align: center;
  font-family: "Bitcount Mono Single Lt Circle", "Courier New", Courier,
    monospace;
  -webkit-font-smoothing: initial;
`;
const ProductGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  padding: var(--gap-m) var(--gap-xl) 0 var(--gap-xl);
  margin: auto;
`;

const Product = styled.div`
  position: relative;
  margin: var(--gap-xs);
  width: calc(50% - var(--gap-xs) * 2);
  aspect-ratio: 1;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid transparent;
  transition: border-color 100ms;

  @media screen and (min-width: 900px) {
    width: calc(25% - var(--gap-m) * 2);
    margin: var(--gap-m);
  }

  &:hover {
    @media screen and (min-width: 700px) {
      border-color: magenta;
    }
  }

  &:active {
    border-color: red;
  }
`;

const InfoCardGroup = styled.div`
  padding: var(--gap-m) var(--gap-xl) var(--gap-xl) var(--gap-xl);
  margin: auto;

  display: flex;
  flex-wrap: nowrap;
  justify-content: initial;

  overflow-x: auto;
  overscroll-behavior-x: none;

  @media screen and (min-width: 900px) {
    justify-content: center;
  }
`;

const InfoCard = ({ title }: { title: string }) => {
  return (
    <InfoCardWrapper>
      <HeadingSm>{title}</HeadingSm>
      <TextSm>
        We keep a project’s team small enough that it can be fed by two (large)
        pizzas to ensure high levels of care, low levels of politics and a
        vested interest in the project.
      </TextSm>
    </InfoCardWrapper>
  );
};

const InfoCardWrapper = styled.div`
  background-color: #f7f7f7;
  width: 32rem;
  border-radius: 1rem;
  padding: var(--gap-l) var(--gap-xl);
  margin: var(--gap-xs);
  flex-shrink: 0;

  @media screen and (min-width: 900px) {
    flex-shrink: initial;
  }

  & > h2 {
    margin-bottom: var(--gap-3xs);
    font-weight: 400;
  }

  & > p {
    color: #999999;
  }
`;
