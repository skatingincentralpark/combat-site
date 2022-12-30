import { GetStaticProps } from "next";
import styled from "@emotion/styled";
import Link from "@components/link";
import Image from "@components/image";
import { getAllProducts } from "data";

const ShopPage = ({ products }: { products: Product[] }) => {
  return (
    <ShopPageWrapper>
      <Items>
        {products.map((product, i) => (
          <Item key={product.title}>
            <Link href={`/shop/${product.handle}`}>
              <Image
                image={{
                  caption: product.title,
                  url: product.images.nodes[0].url,
                  height: product.images.nodes[0].height,
                  width: product.images.nodes[0].width,
                  aspectRatio:
                    product.images.nodes[0].height /
                    product.images.nodes[0].width,
                }}
              />
            </Link>
            {product.title}
          </Item>
        ))}
      </Items>
    </ShopPageWrapper>
  );
};

export default ShopPage;

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
  };
};

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
  text-align: center;

  & > * {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & img {
    object-fit: contain;
    width: auto;
    height: auto;
  }
`;
const ShopPageWrapper = styled.main`
  padding-top: var(--header-height);
  padding: var(--gap-m) var(--gap-xxl) var(--gap-m) var(--gap-xxl);
  height: 100%;
  display: flex;
`;
