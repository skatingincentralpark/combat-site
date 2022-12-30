declare module "shopify-buy";
declare module "shopify-buy/index.unoptimized.umd";

interface ShopifyVariant {
  id: string;
  title: string;
  quantityAvailable: number;
  image: { altText: string; src: string; width: number; height: number };
  price: {
    amount: string;
    currencyCode: string;
  };
  compareAtPrice: {
    amount: string;
    currencyCode: string;
  };
}
interface Product {
  id: string;
  title: string;
  handle: string;
  descriptionHtml: string;
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    nodes: { url: string; width: number; height: number; altText: string }[];
  };
  variants: { nodes: ShopifyVariant[] };
}
