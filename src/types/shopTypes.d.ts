declare module "shopify-buy";
declare module "shopify-buy/index.unoptimized.umd";

interface Product {
  title: string;
  id: string;
  handle: string;
  images: { src: string; width: number; height: number }[];
  descriptionHtml: string;
  variants: {
    title: string;
    available: boolean;
    price: {
      amount: string;
      currencyCode: string;
    };
    compareAtPrice: {
      amount: string;
      currencyCode: string;
    };
  }[];
}
