import styled from "@emotion/styled";
import ShopItem from "../components/shop-item";

const Home = () => {
  const products = [
    {
      title: "Aftermath",
      price: "60",
      collection: "Spring Song Recondo",
      year: "2022",
      material: "USA Cotton",
      made: "Japan",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      title: "Aftermath",
      price: "60",
      collection: "Spring Song Recondo",
      year: "2022",
      material: "USA Cotton",
      made: "Japan",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      title: "Aftermath",
      price: "60",
      collection: "Spring Song Recondo",
      year: "2022",
      material: "USA Cotton",
      made: "Japan",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      title: "Aftermath",
      price: "60",
      collection: "Spring Song Recondo",
      year: "2022",
      material: "USA Cotton",
      made: "Japan",
      sizes: ["S", "M", "L", "XL"],
    },
  ];

  return (
    <PageWrapper>
      {products.map((product, i) => (
        <ShopItem product={product} key={i} />
      ))}
    </PageWrapper>
  );
};

export default Home;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: var(--gap-page-top) 4rem;

  @media screen and (min-width: 700px) {
    padding: var(--gap-page-top) var(--gap-l);
  }
`;
