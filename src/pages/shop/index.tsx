import styled from "@emotion/styled";
import { motion } from "framer-motion";
import ShopItemSummary from "../../components/shop-item-summary";

const ShopPage = () => {
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
        <ShopItemSummary product={product} key={i} />
      ))}
    </PageWrapper>
  );
};

export default ShopPage;

const PageWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: var(--gap-page-top) 3.5rem;
  padding-bottom: 10rem;

  @media screen and (min-width: 700px) {
    padding: var(--gap-page-top) 3.5rem;
  }
`;
