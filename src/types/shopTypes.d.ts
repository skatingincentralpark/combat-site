declare module "shopify-buy";
declare module "shopify-buy/index.unoptimized.umd";

interface ShopifyVariant {
  id: string;
  title: string;
  available: boolean;
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
  title: string;
  id: string;
  handle: string;
  images: { src: string; width: number; height: number }[];
  descriptionHtml: string;
  variants: ShopifyVariant[];
}
