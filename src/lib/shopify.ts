import Client from "shopify-buy";

export const shopifyClient = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
  domain: process.env.SHOPIFY_STORE_DOMAIN!,
});

// fix typing
export const parseShopifyResponse = (res: any) => {
  return JSON.parse(JSON.stringify(res));
};
