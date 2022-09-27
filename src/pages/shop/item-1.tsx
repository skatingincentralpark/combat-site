import HeadSEO from "@components/head-seo";
import ShopItem from "@components/shop-item";

const ShopItemPage = () => {
  const sizes = ["s", "m", "l", "xl"];

  return (
    <>
      <HeadSEO title="Item 1" />
      <ShopItem sizes={sizes} />;
    </>
  );
};

export default ShopItemPage;
