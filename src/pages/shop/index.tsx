import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import ShopItem from "../../components/shop-item";

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
        <ShopItem product={product} key={i} />
      ))}
    </PageWrapper>
  );
};

export default ShopPage;

const PageWrapper = styled(motion.div)`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: var(--gap-page-top) 3.5rem;

  @media screen and (min-width: 700px) {
    padding: var(--gap-page-top) var(--gap-l);
  }
`;
